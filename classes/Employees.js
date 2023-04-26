class Employees {
static #allEmployee = [];
#salary;
#isHired;
constructor(name,position,salary){
this.name = name;
this.position = position;
this.#salary = salary
this.#isHired = true;
Employees.#allEmployee.push(this);
}



static getEmployees() {
    return Employees.#allEmployee.filter(e => e instanceof Employees);
  }

static getTotalPayroll(){
    Employees.total = 0;
    for(let i =0; i < Employees.#allEmployee.length; i++){
        console.log(Employees.#allEmployee.length)
        Employees.total += Employees.#allEmployee[i].getSalary();
        
    }
    return Employees.total
}


getSalary(){
    return this.#salary;
}

setSalary(amount){
    return this.#salary = amount;
}

getStatus(){
    return this.#isHired;
}

setStatus(com){
    if(com == "hire"){
        return this.#isHired = true
    } else if(com == "fire"){
        return this.#isHired = false
    }
}

    
}

module.exports = {
    Employees,
}