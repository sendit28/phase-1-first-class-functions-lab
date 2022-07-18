
// let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function (arrayDrivers) {
    return arrayDrivers.slice(0,2)
}       

const returnLastTwoDrivers = function (arrayDrivers) {
    return arrayDrivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers,            returnLastTwoDrivers]

const createFareMultiplier = function (multiplyFare) {
    return function (fare) {
        return multiplyFare * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (arrayDrivers, driversToReturn) {
    return driversToReturn(arrayDrivers)
}




 