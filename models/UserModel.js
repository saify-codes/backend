import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    emailVerificationToken: { type: String },
    emailVerificationTokenExpires: { type: Date },
    emailVerified: { type: Boolean, default: false },
    status: { type: String, default: "active" },
    seller: { type: Boolean, default: false },
    signupseller: { type: Boolean, default: false },
    profileimage: {
      public_id: { type: String },
      url: { type: String },
    },
    coverimage: {
      public_id: { type: String },
      url: { type: String },
    },
    business: { type: mongoose.Schema.Types.ObjectId, ref: "Business" },
  },
  { timestamps: true }
);

const model = mongoose.model('users',schema)

class User{
    static async addUser(obj){
        const user = new model(obj)
        await user.save()
        console.log("user added successfully!");
    }

    static async getUser(user_id){
        const user = await model.findById(user_id)
        return user
    }

    static async findUserByEmail(email){
      const user = await model.findOne({email})
      return user
    }
}
export {User as userModel}
