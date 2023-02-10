class Tool {
    /**
     * 
     * @param {string} cadena 
     * @returns {string}
     */
    static strToSlug (cadena){
        return encodeURIComponent(cadena).replace(/%20/g, '-');
    }

    static numberToLetter(number){
        let letter;
        switch (number){
            case 1:
                letter = "Uno";
                break;
            case 2:
                letter =  "dos";
                break;
            default:
                letter = "No encontrado";
                break;
        }
        return letter;
    }
    /**
     * 
     * @param {String} parameter 
     * @param {Array} data 
     */
    static setDataToLocalStorage(parameter, data){
        localStorage.setItem(parameter, JSON.stringify(data));
    }
    /**
     * 
     * @param {string} parameter 
     * @returns {Array}
     */
    static getDatFromLocalStorage(parameter){
        return JSON.parse( localStorage.getItem(parameter));
    }

}