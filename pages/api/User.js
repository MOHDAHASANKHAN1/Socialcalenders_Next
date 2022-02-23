import initDB from '../../Connector/initDB';
import User from '../../Models/User';

initDB();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body);
        await User.updateOne({ _id: req.body._id }, { $set: req.body });
        const newuser = await User.find({ _id: req.body._id })
        res.send({ message: "Successfully Updated", data: newuser });
    } else if (req.method === 'GET') {
        const user = await User.findOne({ _id: req.query.id })
        res.send({ message: "Successfully Get", data: user });
    }
}