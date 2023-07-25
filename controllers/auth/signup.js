import bcrypt from "bcrypt";
import crypto from "crypto";
import { userModel } from "../../models/UserModel.js";
export async function signup(req, res) {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    const user = await userModel.findUserByEmail(email);

    if (!user) {
      console.log("good to go");

      // Encrypt password using bcrypt
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);

      // Generate email verification token
      const token = crypto.randomBytes(20).toString("hex");

      await userModel.addUser({
        ...req.body,
        password:hashPassword,
        emailVerificationToken: token,
        emailVerificationTokenExpires: Date.now() + 24 * 60 * 60 * 1000,
      });
    } else {
      return res.status(400).json({ message: "User already exists" });
    }
  } catch (error) {}
  setTimeout(() => {
    res.send("Working...");
  }, 5000);
}
