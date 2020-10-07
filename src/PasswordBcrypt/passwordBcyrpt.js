import bcrypt from "bcryptjs";

const password = "mypass123";
const saltRounds = 10;
export const hashing = (props) => {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) {
      throw err;
    } else {
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) {
          throw err;
        } else {
          console.log(hash);
          props.getHashingCode(hash);
        }
      });
    }
  });
};
