import Employee from "../src/Employee.mjs";
import WageEmployee from "../src/WageEmployee.mjs";
import Manager from "../src/Manager.mjs";
import SalesPerson from "../src/SalesPerson.mjs";

import { describe, it, expect } from "vitest";

describe("creating, getters, computeSalary tests", () => {
    const basicSalary = 10000;
    const department = "dep1";
    const id = 1;
    const wage = 100;
    const hours = 1;
    const sales = 100000;
    const percent = 0.1;
    const factor = 2;
    const employee = new Employee(id, department, basicSalary);
    const wageEmployee = new WageEmployee(id, department, basicSalary, wage, hours);
    const salesPerson = new SalesPerson(id, department, basicSalary, wage, hours, percent, sales);
    const manager = new Manager(id, department, basicSalary, factor);
    it("Employee test", () => {
        expect(employee.getBasicSalary()).toBe(basicSalary);
        expect(employee.computeSalary()).toBe(basicSalary);
        expect(employee.getDepartment()).toBe(department);
        expect(employee.getId()).toBe(id);
    })
    it("WageEmployee test", () => {
        expect(wageEmployee.getHours()).toBe(hours);
        expect(wageEmployee.getWage()).toBe(wage);
        expect(wageEmployee.computeSalary()).toBe(basicSalary + wage * hours);
    })
    it("SalesPerson test", () => {
        expect(salesPerson.getPercent()).toBe(percent);
        expect(salesPerson.getSales()).toBe(sales);
        expect(salesPerson.computeSalary()).toBe(basicSalary + wage * hours + sales * percent / 100);
    })
    it("Manager test", () => {
        expect(manager.getFactor()).toBe(factor);
        expect(manager.computeSalary()).toBe(basicSalary * factor);
    })
    it("Polymorphism test", () => {
        const employees = [
            employee, wageEmployee, salesPerson, manager
        ];
        const budget = employees.reduce((bud, empl) => bud + empl.computeSalary(), 0);
        expect(budget).toBe(10000 + 10100 + 10200 + 20000);
    })
    it("setPrototype", () => {
        const obj = {id: 123, department: "QA", basicSalary: 10000, factor: 2 };
        Object.setPrototypeOf(obj, new Manager());
        expect(obj.getId()).toBe(123);
    })
})

describe("JSON serialisation /deserialisation of Employees objects", () => {
    const empl = new Employee(123, "QA", 10000);
    const wageEmpl = new WageEmployee(123, "QA", 10000, 100, 100);
    const salesPerson = new SalesPerson(123, "QA", 10000, 100, 100, 0.1, 100000);
    const manager = new Manager(123, "QA", 10000, 2);
    it("Employee JSON serialization", () => {
    
        const jsonEmpl = JSON.stringify(empl);
        expect(jsonEmpl.indexOf("Employee")).toBeGreaterThan(-1);
      });
      it("WageEmployee JSON serialization", () => {
       
        const jsonEmpl = JSON.stringify(wageEmpl);
        expect(jsonEmpl.indexOf("WageEmployee")).toBeGreaterThan(-1);
      });
      it("SalesPerson JSON serialization", () => {
        
        const jsonEmpl = JSON.stringify(salesPerson);
        expect(jsonEmpl.indexOf("SalesPerson")).toBeGreaterThan(-1);
      });
      it("Manager JSON serialization", () => {
        
        const jsonEmpl = JSON.stringify(manager);
        expect(jsonEmpl.indexOf("Manager")).toBeGreaterThan(-1);
      });
      it ("Employee deserialization", () => {
        const jsonStr = JSON.stringify(empl);
        const obj = JSON.parse(jsonStr);
        Object.setPrototypeOf(obj, Employee.classMap[obj.className]);
        expect(obj.computeSalary()).toBe(10000)
      })
      it ("WageEmployee deserialization", () => {
        const jsonStr = JSON.stringify(wageEmpl);
        const obj = JSON.parse(jsonStr);
        Object.setPrototypeOf(obj, Employee.classMap[obj.className]);
        expect(obj.computeSalary()).toBe(20000)
      })
      it ("SalesPerson deserialization", () => {
        const jsonStr = JSON.stringify(salesPerson);
        const obj = JSON.parse(jsonStr);
        Object.setPrototypeOf(obj, Employee.classMap[obj.className]);
        expect(obj.computeSalary()).toBe(20100)
      })
      it ("Nanager deserialization", () => {
        const jsonStr = JSON.stringify(manager);
        const obj = JSON.parse(jsonStr);
        Object.setPrototypeOf(obj, Employee.classMap[obj.className]);
        expect(obj.computeSalary()).toBe(20000)
      })
})