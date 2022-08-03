import { getHashPassword } from "../../../helpers/auth";
import { connectDatabase } from "../../../helpers/db";

export default async function handler(req, res) {
    if(req.method === "POST"){

        const { email, password } = req.body;
        if (
          !email ||
          !email.includes("@") ||
          !password ||
          password.trim().length < 7
        ) {
          res.status(422).json({ message: "Invalid email or password" });
          return;
        }
        const client = await connectDatabase();
        const hashPassword = await getHashPassword(password)
        const db = client.db();

        const existingUser = await db.collection('usersNextJs').findOne({ email: email})
        if(existingUser){
            res.status(422).json({ message: "User already exists" });
            client.close();
            return
        }

        db.collection("usersNextJs").insertOne({ email: email, password: hashPassword });
        res.status(201).json({ message: "Successfully created new user" });
        client.close();
        return;
    }
}
