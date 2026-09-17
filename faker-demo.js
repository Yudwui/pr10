const { faker } = require("@faker-js/faker");

console.log("Имя:", faker.person.fullName());
console.log("Адрес:", faker.location.streetAddress());