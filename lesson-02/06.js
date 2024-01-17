
let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA",
    }
};

const newPassport = JSON.parse(JSON.stringify(passportWithAddress));
newPassport.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);  
console.log(newPassport.address.city); 