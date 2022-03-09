const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req, res) {
    if (req.method === "POST") {
        // Initialize razorpay object
        const razorpay = new Razorpay({
            key_id: process.env.Rozarpay_Key_Id,
            key_secret: process.env.Rozarpay_Key_Secret,
        });

        // Create an order -> generate the OrderID -> Send it to the Front-end
        // Also, check the amount and currency on the backend (Security measure)
        const payment_capture = 1;
        const amount = req.body.price;
        const currency = "INR";
        const options = {
            amount: (amount * 100).toString(),
            currency,
            receipt: shortid.generate(),
            payment_capture,
        };

        try {
            const response = await razorpay.orders.create(options);
            res.status(200).json({
                id: response.id,
                currency: response.currency,
                amount: response.amount,
            });
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    } else {
        // Handle any other HTTP method
    }
}