let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

// Create a deep copy of the object using JSON.parse() and JSON.stringify()
let clonedPassport = JSON.parse(JSON.stringify(passportWithAddress));

// Modify the cloned object
clonedPassport.address.city = 'Bobryisk';

console.log(passportWithAddress.address.city);  // Output: "LA"
console.log(clonedPassport.address.city);  // Output: "Bobryisk"