import { Remove_To_Cart, Addqts, Removeqts } from "../Redux/Action/Cart";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { parseCookies } from 'nookies';
import axios from "axios";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Cart_Cmp() {

    const { Token, name, email, phone } = parseCookies();

    const dispatch = useDispatch();
    const Router = useRouter();

    const data = useSelector((state) => state.Cart.Products);
    const Totalprice = useSelector((state) => state.Cart.Totalprice);

    const [value, setValue] = useState();
    const refresh = () => {
        // re-renders the component
        setValue({});
    }

    function Remove(cdata) {
        dispatch(Remove_To_Cart(cdata))
        refresh();
    }

    function Addqt(cdata) {
        dispatch(Addqts(cdata));
        refresh();
    }

    function Removeqt(cdata) {
        dispatch(Removeqts(cdata))
        refresh();
    }

    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };

    const makePayment = async () => {
        if (!Token) {
            alert("You Are Not Signuped/Logged Please Signup/Login");
            Router.push("/Login");
        } else {
            const res = await initializeRazorpay();

            if (!res) {
                alert("Razorpay SDK Failed to load");
                return;
            }

            // Make API call to the serverless API
            const Data = await
                axios.post(`/api/Razorpay`, { price: Totalprice });

            const data = Data.data;

            var options = {
                key: process.env.Rozarpay_Key_Id, // Enter the Key ID generated from the Dashboard
                name: "SocialCalender Pvt Ltd",
                currency: data.currency,
                amount: data.amount,
                order_id: data.id,
                description: "Thankyou For Your Believe",
                image: "https://res.cloudinary.com/technicalknowledges/image/upload/v1646823557/know1_mct3qm.jpg",
                handler: function (response) {
                    // Validate payment at server - using webhooks is a better idea.
                    alert(response.razorpay_payment_id);
                    alert(response.razorpay_order_id);
                    alert(response.razorpay_signature);
                },
                prefill: {
                    name: name,
                    email: email,
                    contact: phone,
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        }
    };

    var Cart;
    Cart = data.map((data) =>
        <>
            <div className="card rounded-3 mb-4" key={1}>
                <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                            <img src={data.url}
                                className="img-fluid rounded-3" alt="Cotton T-shirt" />
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">{data.tittle}</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 d-flex">
                            <button className="btn btn-link px-2" onClick={() => Removeqt({ quantity: 1, productpath: data.productpath })}>
                                <i className="fas fa-minus"></i>
                            </button>

                            <input id="form1" min="0" name="quantity" value={data.quantity} type="number"
                                className={`form-control form-control-sm`} />

                            <button className={`btn btn-link px-2`} onClick={() => Addqt({ quantity: 1, productpath: data.productpath })} >
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">  <i className="fa-solid fa-indian-rupee-sign"></i> {`${data.uprice}`}</h5>
                        </div>

                        <div className="col-md-1 col-lg-1 col-xl-1 text-center">
                            <a className="text-dark btn" onClick={() => Router.push(`/Product/${data.category}/${data.subcategory}/${data.productpath}`)}><i className="fa fa-eye fa-lg"></i></a>
                        </div>

                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-danger" data-bs-toggle="modal" data-bs-target="#Remove"><i className="fas fa-trash fa-lg"></i></a>
                        </div>

                        <div className="modal fade" id="Remove" tabIndex="-1" aria-labelledby="RemoveLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title text-dark" id="RemoveLabel"><b>Remove Product</b></h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p className="text-muted"><b>You want to remove the selected product from your cart ?</b></p>
                                    </div>
                                    <hr className="bg-dark" />
                                    <div className="row g-0">
                                        <div className="col-sm-6 col-6 d-flex align-items-center justify-content-start px-4 pb-4">
                                            <button type="button" className="btn btn-secondary text-dark" data-bs-dismiss="modal"><b>Cancel</b></button>
                                        </div>
                                        <div className=" col-sm-6 col-6 d-flex align-items-center justify-content-end px-4 pb-4">
                                            <button type="submit" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => Remove({ productpath: data.productpath })}><b>Remove</b></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );

    const [deta, setDeta] = useState([]);

    useEffect(() => {
        axios
            .get(`/api/Product?By=Category&Category=All`)
            .then((deta) => {
                setDeta(deta.data.Product);
            });
    }, [Router])

    return (
        <>
            {
                data.length !== 0 ?
                    <>
                        <section className="h-100" style={{ backgroundColor: " #ccff33" }}>
                            <div className="container-fluid h-100 py-5">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-10">

                                        <div className="d-flex justify-content-between align-items-center mb-4 px-3">
                                            <h3 className="fw-normal mb-0 text-black ">Shopping Cart</h3>
                                            <div>
                                                <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i
                                                    className="fas fa-angle-down mt-1"></i></a></p>
                                            </div>
                                        </div>

                                        {Cart}

                                        <div className="card mb-4">
                                            <div className="card-body p-4 d-flex flex-row">
                                                <div className="form-outline flex-fill">
                                                    <input placeholder="Discound code" type="text" id="form1" className="form-control form-control-lg" />
                                                </div>
                                                <button type="button" className="btn btn-outline-warning btn-lg ms-3">Apply</button>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row g-0">
                                                    <div className="col-sm-6 col-6 d-flex align-items-center justify-content-start">
                                                        <button type="button" className="btn btn-warning btn-block btn-lg" onClick={() => makePayment()} ><b>Proceed to Pay</b></button>
                                                    </div>
                                                    <div className=" col-sm-6 col-6 d-flex align-items-center justify-content-end">
                                                        <span className="mb-0 h5 text-info">Total <i className="fa-solid fa-indian-rupee-sign"></i> {Totalprice}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        <br />
                        <br />

                        <h1 className="text-center"><b>ADD THESE TO YOUR ORDER FOR THE BEST VALUE</b></h1>

                        <Carousel responsive={responsive} className="py-4">
                            {

                                deta.map((data) =>
                                    <div key={1} className="px-3">
                                        <Link href={`/Product/All/${data.subcatname}/${data.Product.productpath}`} >
                                            <a>
                                                <div className="card card-sss d-flex align-items-center justify-content-center mx-1" >
                                                    <div className="img-wrapper-s"><img src={data.Product.image[0].url} className="d-block w-100" alt="..." /> </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title text-center">{data.Product.tittle}</h5>
                                                        <h6 className="text-center text-muted"><del><i className="fa-solid fa-indian-rupee-sign" style={{ fontSize: "0.9rem" }}></i>{`${data.Product.cprice}`}</del><span className="text-danger px-2"><i className="fa-solid fa-indian-rupee-sign" style={{ fontSize: "0.9rem" }}></i>{`${data.Product.oprice}`}</span></h6>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                )

                            }

                        </Carousel>
                        <br />
                        <br />
                    </>
                    :

                    <>
                        <div className="container-fluid mt-100">
                            <div className="row">
                                <div className="col-md-12 p-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="fw-normal mb-0 text-black ">Shopping Cart</h3>
                                        </div>
                                        <div className="card-body cart p-4">
                                            <div className="col-sm-12 empty-cart-cls text-center"> <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" className="img-fluid mb-4 mr-3" />
                                                <h3><strong><b>Your Cart is Empty</b></strong></h3>
                                                <h4>Add something to make me happy :)</h4> <p onClick={() => Router.push("/Products/All")} className="btn btn-primary cart-btn-transform m-3 p-3" data-abc="true"><b>CONTINUE SHOPPING <span><i className='fas fa-long-arrow-alt-right px-2'></i></span></b></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    );
}

export default Cart_Cmp;