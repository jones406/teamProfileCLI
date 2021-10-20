//In addition to Employee's properties and methods, Manager will also have officeNumber, getRole()
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;