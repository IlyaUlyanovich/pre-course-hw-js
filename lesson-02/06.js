let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};


let clonedPassport = structuredClone(passportWithAddress);
clonedPassport.address.city = 'Bobryisk';

console.log(passportWithAddress.address.city);  
console.log(clonedPassport.address.city);  