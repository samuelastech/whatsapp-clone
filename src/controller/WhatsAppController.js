class WhatsAppController{
    constructor(){
        this.elements = {};
        this.loadElements();
    }

    // Selecting all pages' elements
    loadElements(){
        document.querySelectorAll('[id]').forEach(element=>{
            this.elements[Format.changeToCamelCase(element.id)] = element;
        });
    }
}