let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let clonedPassport = JSON.parse(JSON.stringify(passportWithAddress));

clonedPassport.address.city = 'Bobryisk';

console.log(passportWithAddress.address.city); 
console.log(clonedPassport.address.city);  