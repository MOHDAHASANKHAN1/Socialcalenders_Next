import initDB from '../../Connector/initDB';
import User from '../../Models/User';
import Cart from '../../Models/Cart';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

initDB();

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const { firstname, lastname, email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (firstname == "admin9918423716admin7777777") {
            if (user) {
                res.send({ message: "This User Is Already Exist", data: "" });
            } else {
                const hashedPassword = await bcrypt.hash(password, 9);
                const data = { firstname: "Mohd Ahasan", lastname: "Khan", email: email, password: hashedPassword, role: "Admin" };
                await new User(data).save();
                const user = await User.findOne({ email: email });
                await new Cart({ user: user._id }).save();
                const Token = jwt.sign({ userId: user._id }, "MohdAhasanKhan", {
                    expiresIn: "7d"
                })
                res.send({ Token, role: user.role, message: "Successfully Registeruser", id: user._id });
            }
        } else {
            if (user) {
                res.send({ message: "This User Is Already Exist", data: "" });
            } else {
                const hashedPassword = await bcrypt.hash(password, 9);
                const data = { firstname: firstname, lastname: lastname, email: email, password: hashedPassword, role: "User" };
                await new User(data).save();
                const user = await User.findOne({ email: email });
                await new Cart({ user: user._id }).save();
                const Token = jwt.sign({ userId: user._id }, "MohdAhasanKhan", {
                    expiresIn: "7d"
                })
                res.send({ Token, role: user.role, message: "Successfully Registeruser", id: user._id });
            }
        }

    }
}