const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "Tahmid Alam",
    email: "tahmid@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Munchifa Ruhani",
    email: "munchifa@gmail.com",
  },
];

module.exports = users;
