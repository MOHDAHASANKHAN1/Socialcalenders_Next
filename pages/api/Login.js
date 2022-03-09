import initDB from '../../Connector/initDB';
import User from '../../Models/User';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

initDB();

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (user) {
            const doMatch = await bcrypt.compare(password, user.password)
            if (doMatch) {
                const Token = jwt.sign({ userId: user._id }, process.env.Jwt_Secret, {
                    expiresIn: "7d"
                })
                res.send({ Token, role: user.role, message: "Login Successfull", id: user._id, name: user.firstname + " " + user.lastname, email: user.email, phone: user.phone });
            } else {
                res.send({ message: "Password Is Invalid", data: "" });
            }
        } else {
            res.send({ message: "This User Is Not Registered", data: "" });
        }

    }
}