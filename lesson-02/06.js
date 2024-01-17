
let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA",
    }
};

const deepCopyPassportWithAddress = JSON.parse(JSON.stringify(passportWithAddress))
deepCopyPassportWithAddress.address.city = "Bobryisk"

console.log(passportWithAddress.address.city);  
console.log(deepCopyPassportWithAddress.address.city);