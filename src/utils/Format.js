class Format{
    static changeToCamelCase(elementId){
        const toCamelCase = elementId.replace(/-(\w)/g, (m, p1) => p1.toUpperCase());
        return toCamelCase;
    }
}