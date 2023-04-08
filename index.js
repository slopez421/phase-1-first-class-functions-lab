// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
function returnFirstTwoDrivers () {
    const returnFirstTwoDrivers = function() {return drivers.slice(0,2)};
    return returnFirstTwoDrivers();
}

function returnLastTwoDrivers () {
    const returnLastTwoDrivers = function() {return drivers.slice(2,4)};
    return returnLastTwoDrivers();
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier (x) {
    return function (fare=5) {return fare * x}
}

const fareQuintupler = createFareMultiplier(5);

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
}