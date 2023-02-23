class Repair {
    #id;
    #Car;
    #Mecanic;
    Time;
    Comments
    Price

    constructor(car, mecanic, time, comments, price){
        this.#Car = car;
        this.#Mecanic = mecanic;
        this.Time = time
        time.Comments = comments;
        this.price = price;
        this.#id = this.#generateId();
    }

    
    /**
     * 
     * @returns {String}
     */
   #generateId= function(){
        let car =  this.#Car;
        let mecanic =  this.#Mecanic;
        return   car.Model.substr(0) + mecanic.Name + Math.floor(Math.random() * 1000)
    }
}