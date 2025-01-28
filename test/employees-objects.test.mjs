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
        const obj = {id: 123, department: "QA", basicSalary: 10000 };
        Object.setPrototypeOf(obj, new Employee());
        expect(obj.getId()).toBe(123);
    })
})