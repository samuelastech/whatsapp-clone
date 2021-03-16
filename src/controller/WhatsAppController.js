class WhatsAppController{
    constructor(){
        this.elements = {};
        this.elementsPrototype();
        this.loadElements();
        this.initEvents();
    }

    // Saving all page's elements
    loadElements(){
        document.querySelectorAll('[id]').forEach(element=>{
            this.elements[Format.changeToCamelCase(element.id)] = element;
        });
    }

    // Controlling DOM's elements
    elementsPrototype(){
        Element.prototype.hide = function(){ // Hiding element
            this.style.display = 'none';
            return this;
        };

        Element.prototype.show = function(){ // Showing element
            this.style.display = 'block';
            return this;
        };

        Element.prototype.toggle = function(){ // Toggling element's display
            this.style.display = (this.style.display == 'none') ? 'block' : 'none';
            return this;
        };

        Element.prototype.on = function(events, fn){ // on[SOME ELEMENT'S EVENT] – Catching the element's events]
            events.split(' ').forEach(event=>{
                this.addEventListener(event, fn);
            });
            return this;
        };

        Element.prototype.css = function(styles){ // Editing the element with CSS
            for (const name in styles) {
                this.style[name] = styles[name];
            }
            return this;
        };

        Element.prototype.addClass = function(className){ // Adding element's CSS class
            this.classList.add(className);
            return this
        }

        Element.prototype.removeClass = function(className){ // Removing element's CSS class
            this.classList.remove(className);
            return this
        }

        Element.prototype.toggleClass = function(className){ // Toggling element's CSS class
            this.classList.toggle(className);
            return this
        }

        Element.prototype.hasClass = function(className){ // Checking if element has class
            return this.classList.contains(className);
        }
        
        HTMLFormElement.prototype.getForm = function(){ // Getting forms data
            return new FormData(this);
        
        }

        HTMLFormElement.prototype.toJSON = function(){ // Turning forms data to JSON
            let json = {};
            this.getForm().forEach((value, key)=>{
                json[key] = value;
            });
            return json;
        }
    }

    // Handling events
    initEvents(){

        // Opening and hiding panel "edit profile"
        this.elements.myPhoto.on('click', event=>{ 
            this.closeAllLeftPanel();
            this.elements.panelEditProfile.show();
            setTimeout(()=>{
                this.elements.panelEditProfile.addClass('open');
            }, 300);
        });

        this.elements.btnClosePanelEditProfile.on('click', event=>{
            this.elements.panelEditProfile.removeClass('open');
        });

        // Opening and hiding panel "new contact"
        this.elements.btnNewContact.on('click', event=>{
            this.closeAllLeftPanel();
            this.elements.panelAddContact.show();
            setTimeout(()=>{
                this.elements.panelAddContact.addClass('open');
            }, 300);
        });

        this.elements.btnClosePanelAddContact.on('click', event=>{
            this.elements.panelAddContact.removeClass('open');
        });

        // Profile handling
        // Photo upload
        this.elements.photoContainerEditProfile.on('click', event=>{
            this.elements.inputProfilePhoto.click();
        });

        // Choosing a name
        this.elements.inputNamePanelEditProfile.on('keypress', event=>{
            if(event.key === 'Enter'){
                event.preventDefault();
                this.elements.btnSavePanelEditProfile.click();
            }
        });

        this.elements.btnSavePanelEditProfile.on('click', event=>{
            console.log(this.elements.inputNamePanelEditProfile.innerHTML);
        });

        // Add contact panel handling
        this.elements.formPanelAddContact.on('submit', event=>{
            event.preventDefault();
            let formData = new FormData(this.elements.formPanelAddContact);
        });

    };

    closeAllLeftPanel(){
        this.elements.panelAddContact.hide();
        this.elements.panelEditProfile.hide();
    }
}