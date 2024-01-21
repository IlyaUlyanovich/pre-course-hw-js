let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

// Create a deep copy of the object using the spread operator and object destructuring
let clonedPassport = { ...passportWithAddress, address: { ...passportWithAddress.address } };

// Modify the cloned object
clonedPassport.address.city = 'Bobryisk';

console.log(passportWithAddress.address.city);  // Output: "LA"
console.log(clonedPassport.address.city);  // Output: "Bobryisk"