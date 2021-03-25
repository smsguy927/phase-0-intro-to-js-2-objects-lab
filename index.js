// Write your solution in this file!
let employee = {
    name : 'Sean',
    id : 12345
}


function updateEmployeeWithKeyAndValue(employee, key, value) {
    let result = {};
    result = Object.assign(result, employee);
    result[key] = value;
    return result;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let result = {};
    result = Object.assign(result, employee);
    delete result[key];
    return result;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}