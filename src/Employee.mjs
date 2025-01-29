export default class Employee {
    static classMap = {
        Employee: new Employee()
    };
    constructor(id = 0, department = null, basicSalary = 0, className) {
        this.id = id;
        this.basicSalary = basicSalary;
        this.department = department;
        this.className = className || "Employee";
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