const { Employees } = require("./Employees")

class SoftwareEngineer extends Employees {
    #programingLanguages;
    constructor(name,position,salary,programingLanguages){
      super(name,position,salary);
      this.salary = salary;
     this.#programingLanguages= programingLanguages;
      }

      getProgrammingLanguages(){
        return this.#programingLanguages;
      }

      setProgrammingLanguages(language){
        return this.#programingLanguages.push(language);
      }

    }
module.exports = {
    SoftwareEngineer,
}