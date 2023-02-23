class Person{
    #id;
    Name;
    Lastname;
    Email;
    Phone;
    
    constructor(name, lastname, email, phone){
        this.Name = name;
        this.Lastname = lastname;
        this.Email = email;
        this.Phone = phone;
        this.#id = this.#generateId();
    }

    getFullName(){
        return this.Name + ' ' + this.Lastname;
    }

    getId(){
        return this.#id;
    }

     /**
     * 
     * @returns {Sring}
     */
   #generateId= function(){
        let name =  this.Name;
        
        return  name != undefined ? name.substr(0) + Math.floor(Math.random() * 1000):  'UU'+ Math.floor(Math.random() * 1000)
   }

}