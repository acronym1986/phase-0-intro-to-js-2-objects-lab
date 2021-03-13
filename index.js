// Write your solution in this file!

//const employee = ['name', 'streetAddress'];
//employee.name = 'Tim';
//employee.streetAddress = '45 Harris St';

const employee = {
    name:'Tim',
    streetAddress: '45 Harris St'
}
 //not changing the original array
function updateEmployeeWithKeyAndValue(objt,key,value) {
       const newObjt = {...objt};
        newObjt [key] = value;
      return newObjt;
}
const employeeNew = updateEmployeeWithKeyAndValue (employee, 'name', 'Sam');
employeeNew;
       

//changing or mutating the original array 
 function destructivelyUpdateEmployeeWithKeyAndValue (objt,key,value) {
      objt[key] = value;
     return objt;
 }
 const employeeNew2 = destructivelyUpdateEmployeeWithKeyAndValue(employeeNew,'streetAddress', '12 Broadway');
 employeeNew2;
 

 //deleting the key
 function deleteFromEmployeeByKey(objt,key) {
    const newObjt = {...objt};
    delete newObjt[key];
    return newObjt;    
}
const newEmployee = deleteFromEmployeeByKey (employee,'streetAddress','45 Harris St');
newEmployee;

 
//deleting the key destructively
function destructivelyDeleteFromEmployeeByKey(objt,key){
    delete objt[key];
    return objt;
}
const newEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress','45 Harris St');
newEmployee2;

 