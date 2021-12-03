let emp = {
    empId: " ",
    empName: " ",
    baseSal: " ",
    baseHrs: " ",
    extraHrs: " ", 
};

let consultant = {
    empId: "21"
    empName: "Mary Jane"
    baseSal: 4000
    _proto_: emp,
    extraHrs: 10,
};

let mgr = {
    empId: "42"
    empName: "Levi Brown"
    baseSal: 6000
    _proto_: emp,
    extraHrs: 15,
};

let srMgr = {
    empId: "48"
    empName: "Josh King"
    baseSal: 8000
    _proto_: emp
    extraHrs: 10
};

function calcSal(emp) {
    (let totSal = emp.baseSal + emp.extraHrs * 50;
    console.log(totSal);
    return totSal;
}

calcSal(consultant);
let consultantSal = calcSal(consultant);
let mgrSal = calcSal(mgr);
let srMgrSal = calcSal(srMgr);


console.log(consultant.empName + "has accrued $" + consultantSal + "due to working additional" + consultant.extraHrs + "hours.");
console.log(mgr.empName + "has  accrued $" + mgrSal + "due to working additional" + mgr.extraHrs + "hours.");
console.log(srMgr.empName + "has accrues $" + mgrSal + "due to working additional" + mgr.extraHrs + "hours.");






