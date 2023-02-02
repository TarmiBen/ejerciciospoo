class Tool {
    
    static strToSlug (str){
        return encodeURIComponent(str).replace(/%20/g, '-');
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

}