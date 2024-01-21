function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  let passportWithAddress = {
      name: "Petr",
      surname: "Petrov",
      address: {
          country: "USA",
          city: "LA"
      }
  };
  
  let clonedPassport = deepClone(passportWithAddress);
  clonedPassport.address.city = 'Bobryisk';
  
  console.log(passportWithAddress.address.city);  // Output: "LA"
  console.log(clonedPassport.address.city);  // Output: "Bobryisk"