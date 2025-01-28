export default class Employee {
    constructor(id = 0, department = null, basicSalary = 0) {
        this.id = id;
        this.basicSalary = basicSalary;
        this.department = department;
    }

    computeSalary() {
        return this.basicSalary;
    }
    
    getId() {
        return this.id;
    }
    
    getDepartment() {
        return this.department;
    }
    getBasicSalary() {
        return this.basicSalary;
    }

}