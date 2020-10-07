import bcrypt from "bcryptjs";

const passwordEnteredByUser = "mypass123";
export const passwordBcryptChecker = (props) => {
  const hash = props.hashcode;
  bcrypt.compare(passwordEnteredByUser, hash, function (err, isMatch) {
    if (err) {
      throw err;
    } else if (!isMatch) {
      console.log("Password doesn't match!");
    } else {
      console.log("Password matches!");
    }
  });
};
