const not_empty = "*Required";
const invalid = "*Not valid";

export default {
  not_empty: not_empty,
  name: { not_empty, invalid },
  dob: { not_empty },
  gender: { not_empty },
  phone: { not_empty, len: "Length must be 10", invalid },
  email: { not_empty, invalid },
  password: {
    not_empty,
    straingth:
      "Use strong password whiche contain \na capital letter,\na special character,\na digit,\nlength(8-12)",
  },
};
