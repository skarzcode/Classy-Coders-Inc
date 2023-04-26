const { Employees } = require("./Employees")
class SalesPerson extends Employees {
    #totalSales;
    constructor(name,position,salary,client){
      super(name,position,salary);
      this.salary = salary;
      this.client = client;
     this.#totalSales = 0;
     
      }

      getSalesNumber(){
        return this.#totalSales;
      }

      makeSale(amount){
        return this.#totalSales += amount;
      }
    }

module.exports = {
    SalesPerson,
}