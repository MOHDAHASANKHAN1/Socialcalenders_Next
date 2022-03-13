import initDB from '../../Connector/initDB';
import Messages from '../../Models/Messages';

initDB();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await new Messages(req.body).save();
        res.send({ message: "Your Message Recorded" });
    } else if (req.method === 'DELETE') {
        Messages.deleteOne({ _id: req.query.id }, () => {
            res.send({ message: "Successfully Deleted" });
        });
    } else if (req.method === 'GET') {
        const Message = await Messages.find({})
        res.send({ message: "Successfully Get", data: Message });
    }
}