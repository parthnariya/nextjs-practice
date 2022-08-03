import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../helpers/auth";
import { connectDatabase } from "../../../helpers/db";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectDatabase();

        const userCollection = client.db().collection("usersNextJs");

        const user = await userCollection.findOne({ email: credentials.email });
        if (!user) {
          client.close();

          throw new Error("no user found");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();

          throw new Error("password is incorrect");
        }
        client.close();
        return { email: user.email };
      },
    }),
  ],
});
