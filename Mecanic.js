class Mecanic extends Person {
    Specialty;
    #Repairs = [];
    constructor(name, lastname, email, phone, specialty) {
       super(name, lastname, email, phone);
       this.Specialyty = specialty
    }
    
    set repair(repair){
        let repairs = this.#Repairs;
        repairs.push(repair);
    }

    updateData(name = this.Name, lastname = this.Lastname, email = this.Email, phone = this.Phone, specialt =  this.Specialty){
        this.Name = name;
        this.Lastname = lastname;
        this.Email = email;
        this.Phone = phone;
        this.Specialyty = specialty
    }


}