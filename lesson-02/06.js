let passport = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA",
    }
};

let newPassport = JSON.parse(JSON.stringify(passport));
newPassport.address.city = "Bobryisk";

console.log(passport.address.city);  // Выводит "LA"
console.log(newPassport.address.city);  // Выводит "Bobryisk"