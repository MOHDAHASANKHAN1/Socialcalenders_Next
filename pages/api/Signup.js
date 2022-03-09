import initDB from '../../Connector/initDB';
import User from '../../Models/User';
import Cart from '../../Models/Cart';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

initDB();

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const { firstname, lastname, email, mobilenumber, password } = req.body;
        const user = await User.findOne({ email: email });

        if (firstname == process.env.Admin_Secret) {
            if (user) {
                res.send({ message: "This User Is Already Exist", data: "" });
            } else {
                const hashedPassword = await bcrypt.hash(password, 9);
                const data = { firstname: "Mohd Ahasan", lastname: "Khan", email: email, phone: mobilenumber, password: hashedPassword, role: "Admin" };
                await new User(data).save();
                const user = await User.findOne({ email: email });
                await new Cart({ user: user._id }).save();
                const Token = jwt.sign({ userId: user._id }, process.env.Jwt_Secret, {
                    expiresIn: "7d"
                })
                res.send({ Token, role: user.role, message: "Successfully Register", id: user._id, name: user.firstname + " " + user.lastname, email: user.email, phone: user.phone });
            }
        } else {
            if (user) {
                res.send({ message: "This User Is Already Exist", data: "" });
            } else {
                const hashedPassword = await bcrypt.hash(password, 9);
                const data = { firstname: firstname, lastname: lastname, email: email, phone: mobilenumber, password: hashedPassword, role: "User" };
                await new User(data).save();
                const user = await User.findOne({ email: email });
                await new Cart({ user: user._id }).save();
                const Token = jwt.sign({ userId: user._id }, process.env.Jwt_Secret, {
                    expiresIn: "7d"
                })
                res.send({ Token, role: user.role, message: "Successfully Register", id: user._id, name: user.firstname + " " + user.lastname, email: user.email, phone: user.phone });
            }
        }

    }
}