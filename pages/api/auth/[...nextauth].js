import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import User from "../../../models/user";
import dbconnect from "../../../config/dbconnect";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        dbconnect();

        const { email, password } = credentials;
        console.log(email, password);
        const user = await User.findOne({ email });

        if (!User) {
          throw new Error("Invalid Email or Password");
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
          throw new Error("Invalid Email or Password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
