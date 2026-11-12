import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";

const authSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "sales team", "practice"],
    },
  },
  { timestamps: true },
);

authSchema.pre("save", async function () {
  const count = await model("User").countDocuments({ email: this.email });

  if (count > 0) {
    throw new Error("Email already exist");
  }
});

authSchema.pre("save", async function () {
  const count = await model("User").countDocuments({ mobile: this.mobile });

  if (count > 0) {
    throw new Error("Mobile number already exist");
  }
});

authSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcryptjs.hash(this.password, 12);
});

const UserModel = model("User", authSchema);

export default UserModel;
