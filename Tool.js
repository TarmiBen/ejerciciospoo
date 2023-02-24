class Tool {
   
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


    /**
     * 
     * @param {string} parameter 
     * @returns {Array}
     */
    static getMecanicFromLocalStorage(parameter="mecanics"){
        let mecanics = []; 
        let mecanicsArray = JSON.parse( localStorage.getItem(parameter));
        if(mecanicsArray.length != 0){
            mecanicsArray.forEach(element => {
                let object =  new Mecanic(element.Name, element.Lastname, element.Email, element.Phone, element.Specialty, element.id);
                mecanics.push(object);
            });
        }
        return mecanics;
    }

    

}