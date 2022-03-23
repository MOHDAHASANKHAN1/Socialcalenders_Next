import $ from "jquery";
import { useEffect, useState } from "react";
import Link from "next/link";
import Parser from 'react-html-parser';
import { parseCookies } from 'nookies';
import Router, { useRouter } from "next/router";
import axios from "axios";
import { Add_To_Cart } from "../Redux/Action/Cart";
import { useDispatch } from "react-redux";
import Loader from './Loader';
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

function Products_Details({ Detailes, Casu }) {

    const { User_Role } = parseCookies();
    const dispatch = useDispatch();
    const router = useRouter();
    const Product = Detailes;
    const discount = (((parseFloat(Product.cprice)) - (parseFloat(Product.oprice))) / (parseFloat(Product.cprice))) * 100;

    //start Review variable
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reviewtittle, setReviewtittle] = useState('');
    const [review, setReview] = useState('');
    //end Review variable

    function Post_Review(e) {
        e.preventDefault();
        const data = new FormData();
        data.append("name", name);
        data.append("email", email);
        data.append("reviewtittle", reviewtittle);
        data.append("review", review);
    }
    const [deta, setDeta] = useState([]);

    useEffect(async () => {
        await axios
            .get(`/api/Product?By=Category&Category=${router.query.Product_Category}`)
            .then((deta) => {
                setDeta(deta.data.Product);
            });
        $(".image-change").click(function () {
            $("#main-image").attr("src", $(this).attr("src"));
        });
    }, [router]);

    function DeleteAll(productpath, image, category, subcategory) {

        axios
            .delete(`/api/Product?Type=All&productpath=${productpath}&image=${JSON.stringify(image)}&category=${category}&subcategory=${subcategory}`)
            .then((res) => {
                alert(res.data.message);
                if (res.data.message === "Successfully Deleted") {
                    router.push(`/Products/${category}`);
                }
            });
    }

    function DeleteOnly(productpath, image, category, subcategory) {

        axios
            .delete(`/api/Product?Type=Only&productpath=${productpath}&image=${JSON.stringify(image)}&category=${category}&subcategory=${subcategory}`)
            .then((res) => {
                alert(res.data.message);
                if (res.data.message === "Successfully Deleted Image") {
                    router.push(`/Product/${category}/${subcategory}/${productpath}`);
                }
                if (res.data.message === "Successfully Deleted") {
                    router.push(`/Products/${category}`);
                }
            });
    }

    function Add(cdata) {
        dispatch(Add_To_Cart(cdata));
        router.push("/Cart");
    }

    const Loding = (props) => {
        const [loading, setLoading] = useState(true);
        const data = props.data;

        Router.onRouteChangeStart = url => {
            setLoading(false);
        }
        Router.onRouteChangeComplete = url => {
            setLoading(true);
        }

        if (loading) {
            return (
                <>
                    <br />
                    <div className="container-fluid">
                        <h6 className='text-muted  ress'>{`${router.query.Product_Category} / ${Product.tittle}`}</h6>
                        <br />
                        <div className="row g-0 justify-content-around  ress">
                            <div className="col-sm-6">
                                <div className="row gx-0 gy-0">
                                    <div className="col-sm-2 col-2">
                                        <div className="row gx-0 gy-2">
                                            {
                                                Product.image.map((image) =>

                                                    <>
                                                        <div className="col-sm-12 d-flex justify-content-center" key={1}>
                                                            {
                                                                User_Role === "Admin" ?
                                                                    <>
                                                                        <i className="btn fas fa-pen pt-2 px-2 text-success" onClick={() => router.push(`/Update-Product-Image/${Casu.Cat}/${Casu.Sub}/${Product.productpath}/${image.id}`)}></i><img src={image.url} className="img-fluid image-change w-50 border border-primary rounded-3 p-2" alt="/" /><i className="btn fas fa-trash-alt pt-2 px-2 text-danger" data-bs-toggle="modal" data-bs-target={`#${image.id}`}></i>
                                                                    </>
                                                                    :
                                                                    <img src={image.url} className="img-fluid image-change w-50 border border-primary rounded-3 p-2" alt="/" />
                                                            }
                                                            <div className="modal fade" id={image.id} tabIndex="-1" aria-labelledby="DeleteLabelimg" aria-hidden="true">
                                                                <div className="modal-dialog modal-dialog-centered">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <h5 className="modal-title text-dark" id="DeleteLabel"><b>Delete Image</b></h5>
                                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <p className="text-muted"><b>Are you sure you want to delete the selected Image ?</b></p>
                                                                        </div>
                                                                        <hr className="bg-dark" />
                                                                        <div className="row g-0">
                                                                            <div className="col-sm-6 col-6 d-flex align-items-center justify-content-start px-4 pb-4">
                                                                                <button type="button" className="btn btn-secondary text-dark" data-bs-dismiss="modal"><b>Cancel</b></button>
                                                                            </div>
                                                                            <div className=" col-sm-6 col-6 d-flex align-items-center justify-content-end px-4 pb-4">
                                                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => DeleteOnly(Product.productpath, { url: image.url, id: image.id }, Casu.Cat, Casu.Sub)}><b>Delete</b></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </>
                                                )
                                            }
                                            {
                                                User_Role === "Admin" ?
                                                    <>
                                                        <div className="col-sm-12 d-flex align-items-center justify-content-center" key={1}>
                                                            <div className="btn w-50 text-center border border-primary rounded-3" onClick={() => router.push(`/Add-Product-Image/${Casu.Cat}/${Casu.Sub}/${Product.productpath}`)}><i className="text center fa fa-plus" aria-hidden="true"></i></div>
                                                        </div>
                                                    </>
                                                    :
                                                    ""
                                            }
                                        </div>
                                    </div>
                                    <div className="col-sm-10 col-10 d-flex align-items-center justify-content-center">
                                        <div d-flex className='d-flex align-items-center justify-content-center w-75'>
                                            <img src={Product.image[0].url} className="img-fluid" id='main-image' alt="/" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 d-flex justify-content-center p-4">
                                <div className=''>
                                    <h2><b>{Product.tittle}</b></h2>
                                    <div className="d-flex justify-content-start">
                                        <fieldset className="rating1">
                                            <input type="radio" id="star5" name="rating" value="5" />
                                            <label className="full" htmlFor="star5" title="Awesome - 5 stars"></label>
                                            <input type="radio" id="star4half" name="rating" value="4.5" />
                                            <label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
                                            <input type="radio" id="star4" name="rating" value="4" />
                                            <label className="full" htmlFor="star4" title="Pretty good - 4 stars"></label>
                                            <input type="radio" id="star3half" name="rating" value="3.5" />
                                            <label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
                                            <input type="radio" id="star3" name="rating" value="3" />
                                            <label className="full" htmlFor="star3" title="Meh - 3 stars"></label>
                                            <input type="radio" id="star2half" name="rating" value="2.5" />
                                            <label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
                                            <input type="radio" id="star2" name="rating" value="2" />
                                            <label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
                                            <input type="radio" id="star1half" name="rating" value="1.5" />
                                            <label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
                                            <input type="radio" id="star1" name="rating" value="1" />
                                            <label className="full" htmlFor="star1" title="Sucks big time - 1 star"></label>
                                            <input type="radio" id="starhalf" name="rating" value="0.5" />
                                            <label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
                                            <input type="radio" className="reset-option" name="rating" value="reset" />
                                        </fieldset>
                                        <h6 className="text-muted p-1">No Reviews</h6>
                                    </div>
                                    <h6 className="h5 text-muted"><del><i className="fa-solid h6 fa-indian-rupee-sign"></i>{`${Product.cprice}`}</del><span className="h4 text-dark px-2"><i className="fa-solid h5 fa-indian-rupee-sign"></i>{`${Product.oprice}`}</span><span className="h5 text-white rounded-2 bg-success px-3"><b>{`${parseInt(discount)}% OFF`}</b></span></h6>
                                    <br />

                                    {Parser(Product.description)}

                                    {
                                        User_Role === "Admin" ?

                                            <>
                                                <br />
                                                <br />
                                                <br />
                                                <div className="row g-0">
                                                    <div className="col-sm-6 col-6 d-flex justify-content-center">
                                                        <button className="btn-success px-3 py-1" onClick={() => router.push(`/Update-Product/${router.query.Product_Category}/${router.query.Product_Subcategory}/${Product.productpath}`)}><i className="fas fa-pen px-1"></i> Edit</button>
                                                    </div>
                                                    <div className="col-sm-6 col-6 d-flex justify-content-center">
                                                        <button className="btn-danger px-3 py-1" data-bs-toggle="modal" data-bs-target="#Delete"><i className="fas px-1 fa-trash-alt"></i> Delete</button>
                                                    </div>
                                                </div>

                                                <div className="modal fade" id="Delete" tabIndex="-1" aria-labelledby="DeleteLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title text-dark" id="DeleteLabel"><b>Delete Product</b></h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <p className="text-muted"><b>Are you sure you want to delete the selected Product ?</b></p>
                                                            </div>
                                                            <hr className="bg-dark" />
                                                            <div className="row g-0">
                                                                <div className="col-sm-6 col-6 d-flex align-items-center justify-content-start px-4 pb-4">
                                                                    <button type="button" className="btn btn-secondary text-dark" data-bs-dismiss="modal"><b>Cancel</b></button>
                                                                </div>
                                                                <div className=" col-sm-6 col-6 d-flex align-items-center justify-content-end px-4 pb-4">
                                                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => DeleteAll(Product.productpath, Product.image, Casu.Cat, Casu.Sub)}><b>Delete</b></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>

                                            : ""
                                    }

                                    <br />
                                    <br />
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary rounded-pill p-3" type="button" onClick={() => Add({ quantity: 1, url: Product.image[0].url, tittle: Product.tittle, oprice: parseFloat(Product.oprice), uprice: parseFloat(Product.oprice), productpath: Product.productpath, category: Casu.Cat, subcategory: Casu.Sub })}><b>Add To Cart</b></button>
                                    </div>
                                    <br />
                                    <h6 className="text-muted text-center">Secure Checkout With <span><img src="/Scrp1.png" className="img-fluid Scrp " alt="/" /> <img src="/Scrp2.png" className="img-fluid Scrp" alt="/" /> <img src="/Scrp3.png" className="img-fluid Scrp" alt="/" /> <img src="/Scrp4.png" className="img-fluid Scrp" alt="/" /> <img src="/Scrp5.png" className="img-fluid Scrp" alt="/" /></span></h6>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <hr className="bg-dark" />
                        <br /><br />
                        <div className="row g-0 justify-content-around">
                            <div className="col-sm-3">
                                <div className="d-flex justify-content-center">
                                    <div className='w-25'>
                                        <img src="/Pdn1.png" className="img-fluid " alt="/" />
                                    </div>
                                </div>
                                <p className='text-center h5'><b>FULLY EDITABLE</b></p>
                                <p className='text-center h6 text-muted'><b>All templates are designed to be completely customizable</b></p>
                            </div>
                            <div className="col-sm-3">
                                <div className="d-flex justify-content-center">
                                    <div className='w-25'>
                                        <img src="/Pdn2.png" className="img-fluid " alt="/" />
                                    </div>
                                </div>
                                <p className='text-center h5'><b>BEAUTIFUL DESIGN</b></p>
                                <p className='text-center h6 text-muted'><b>Each template is designed by a professional graphic designer</b></p>
                            </div>
                            <div className="col-sm-3">
                                <div className="d-flex justify-content-center">
                                    <div className='w-25'>
                                        <img src="/Pdn3.png" className="img-fluid " alt="/" />
                                    </div>
                                </div>
                                <p className='text-center h5'><b>USER-FRIENDLY</b></p>
                                <p className='text-center h6 text-muted'><b>Our templates are easy to use and effortless to customize</b></p>
                            </div>
                        </div>
                        <br /><br />
                    </div>

                    <div className="Affiliate-color2" >
                        <div className="container-fluid">
                            <div className="row gy-0 gx-0 justify-content-around">

                                <div className="col-sm-6 res">
                                    <br /><br />
                                    <div className='Pdbg rounded-3 px-4 pt-4 resp'>
                                        <h4><b>Why use ready-made templates?</b></h4>
                                        <br />
                                        <h5><b>Why Are Ready-made Templates An Excellent Investment?</b></h5>
                                        <br />
                                        <p className='h6 text-muted'>
                                            To succeed on social media, you need to post valuable and inspiring content almost every day. Most of the successful influencers, personal brands, bloggers, and companies are using the help of freelancers or agencies for content creation.
                                            <br />
                                            Now you can have instant access to beautiful content for very little money.Using ready-made templates will save you a lot of time and money.
                                            <br />
                                            You can create inspiring posts in seconds and without hiring an expensive graphic designer. All our gorgeous templates are tested and proven to increase your reach and visibility, engagement, followers, and sales on social media.
                                        </p>
                                        <br />
                                        <h5><b>Why Should I Get It Now?</b></h5>
                                        <br />
                                        <p className='h6 text-muted'>
                                            {`You can keep doing what you are doing now and getting the results you are getting... Or you can get instant access to templates and start chasing your dreams today. A year from now, you'll wish you had started today. The time is now. It's easy to delay working on your goals when the day-to-day stuff takes up so much of our time. And that is exactly the reason for the existence of the bundle.`}
                                        </p>
                                        <br />
                                        <h5><b>How Do I Use Templates?</b></h5>

                                        <ul>
                                            <li className='text-muted'>Step 1. Open the .PDF file that contains the link to your Canva templates.</li>
                                            <li className='text-muted'>Step 2. (optional) Edit the templates how you see fit.</li>
                                            <li className='text-muted'>Step 3. Download the templates from Canva and enjoy results (better reach, more followers, higher engagement and more sales.)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-sm-6 res">
                                    <br /><br />
                                    <div className='Pdbg rounded-3 p-4'>
                                        <h4><b>How to get started</b></h4>
                                        <br />
                                        <div className="ratio ratio-16x9">
                                            <iframe src="https://www.youtube.com/embed/xWf6Y_uVK7M" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className='Pdbg rounded-3 p-4'>
                                        <h4 className='px-2'><b>Frequently Asked Questions</b></h4>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="accordion accordion-flush" id="faqlist">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header px-2 Pdgb">
                                                            <button className="accordion-button collapsed Pdgb" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                                                Do I need a Canva account?
                                                            </button>
                                                        </h2>
                                                        <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                                            <div className="accordion-body">
                                                                {`Yes, a Canva account is required, but don't worry - creating one is completely FREE and easy.`}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header px-2 Pdgb">
                                                            <button className="accordion-button collapsed Pdgb" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                                                Can I access these templates on my phone?
                                                            </button>
                                                        </h2>
                                                        <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                                            <div className="accordion-body">
                                                                Yes! However, editing templates on desktop is much more easier.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header px-2 Pdgb">
                                                            <button className="accordion-button collapsed Pdgb" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                                                How do I access my templates?
                                                            </button>
                                                        </h2>
                                                        <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                                            <div className="accordion-body">
                                                                You will receive a .PDF file with links to templates via email after purchase. After adding templates to your Canva account, you can access your files directly from Canva
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br />

                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header px-2 Pdgb">
                                                            <button className="accordion-button collapsed Pdgb" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                                                                Can I edit these templates?
                                                            </button>
                                                        </h2>
                                                        <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                                            <div className="accordion-body">
                                                                Yes! All of our templates are fully editable.
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <br />
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header px-2 Pdgb">
                                                            <button className="accordion-button collapsed Pdgb" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                                                                {`What if I'm not happy with my purchase?`}
                                                            </button>
                                                        </h2>
                                                        <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                                            <div className="accordion-body">
                                                                No problem. We understand!Learn more about our refund policies here.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <br /><br /><br />

                        <div className='Pdbg'>
                            <br /><br /><br />
                            <div className="container-fluid">
                                <div className="row g-0">
                                    <div className="col-sm-6 d-flex justify-content-start px-5">
                                        <div>
                                            <h1><b>Customer Reviews</b></h1>
                                            <div className="d-flex justify-content-start">
                                                <fieldset className="rating2">
                                                    <input type="radio" id="star5" name="rating" value="5" />
                                                    <label className="full" htmlFor="star5" title="Awesome - 5 stars"></label>
                                                    <input type="radio" id="star4half" name="rating" value="4.5" />
                                                    <label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
                                                    <input type="radio" id="star4" name="rating" value="4" />
                                                    <label className="full" htmlFor="star4" title="Pretty good - 4 stars"></label>
                                                    <input type="radio" id="star3half" name="rating" value="3.5" />
                                                    <label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
                                                    <input type="radio" id="star3" name="rating" value="3" />
                                                    <label className="full" htmlFor="star3" title="Meh - 3 stars"></label>
                                                    <input type="radio" id="star2half" name="rating" value="2.5" />
                                                    <label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
                                                    <input type="radio" id="star2" name="rating" value="2" />
                                                    <label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
                                                    <input type="radio" id="star1half" name="rating" value="1.5" />
                                                    <label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
                                                    <input type="radio" id="star1" name="rating" value="1" />
                                                    <label className="full" htmlFor="star1" title="Sucks big time - 1 star"></label>
                                                    <input type="radio" id="starhalf" name="rating" value="0.5" />
                                                    <label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
                                                    <input type="radio" className="reset-option" name="rating" value="reset" />
                                                </fieldset>
                                                <h5 className="text-muted p-2 rp">No Reviews Yet</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 d-flex justify-content-end px-5">
                                        <div>
                                            <button className="btn btn-primary rounded-pill py-3 px-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                <b>Write a review</b>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <br />
                                        <div className="collapse px-4" id="collapseExample">
                                            <div className="card card-body bg-info">

                                                <div className="container-fluid-fluid py-2">
                                                    <div className="row g-0">
                                                        <div className="col-sm-12">
                                                            <form onSubmit={(e) => Post_Review(e)} method="post" className=" border p-4 bg-light shadow">
                                                                <div className="row">

                                                                    <div className="mb-3 col-sm-6">
                                                                        <label>Name<span className="text-danger">*</span></label>
                                                                        <input type="text" value={name} className="form-control" required

                                                                            placeholder="Enter Your Name (Public)"
                                                                            onChange={((e) => {
                                                                                const str = e.target.value;
                                                                                const arr = str.split(" ");
                                                                                for (var i = 0; i < arr.length; i++) {
                                                                                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                                                                                }
                                                                                const str2 = arr.join(" ");
                                                                                setName(str2);
                                                                            })}
                                                                        />
                                                                    </div>

                                                                    <div className="mb-3 col-sm-6">
                                                                        <label>Email<span className="text-danger">*</span></label>
                                                                        <input type="email" value={email} className="form-control" required

                                                                            placeholder="Enter Your Email (Private)"
                                                                            onChange={((e) => setEmail(e.target.value))}
                                                                        />
                                                                    </div>

                                                                    <div className="mb-3 col-sm-12 d-flex justify-content-start">
                                                                        <div>
                                                                            <label>Rating<span className="text-danger">*</span></label>
                                                                            <fieldset className="rating">
                                                                                <input type="radio" id="star5" name="rating" value="5" />
                                                                                <label className="full" htmlFor="star5" title="Awesome - 5 stars"></label>
                                                                                <input type="radio" id="star4half" name="rating" value="4.5" />
                                                                                <label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
                                                                                <input type="radio" id="star4" name="rating" value="4" />
                                                                                <label className="full" htmlFor="star4" title="Pretty good - 4 stars"></label>
                                                                                <input type="radio" id="star3half" name="rating" value="3.5" />
                                                                                <label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
                                                                                <input type="radio" id="star3" name="rating" value="3" />
                                                                                <label className="full" htmlFor="star3" title="Meh - 3 stars"></label>
                                                                                <input type="radio" id="star2half" name="rating" value="2.5" />
                                                                                <label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
                                                                                <input type="radio" id="star2" name="rating" value="2" />
                                                                                <label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
                                                                                <input type="radio" id="star1half" name="rating" value="1.5" />
                                                                                <label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
                                                                                <input type="radio" id="star1" name="rating" value="1" />
                                                                                <label className="full" htmlFor="star1" title="Sucks big time - 1 star"></label>
                                                                                <input type="radio" id="starhalf" name="rating" value="0.5" />
                                                                                <label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
                                                                                <input type="radio" className="reset-option" name="rating" value="reset" />
                                                                            </fieldset>
                                                                        </div>
                                                                    </div>

                                                                    <div className="mb-3 col-sm-12">
                                                                        <label>Review Title<span className="text-danger">*</span></label>
                                                                        <input type="text" value={reviewtittle} className="form-control" required

                                                                            placeholder="Enter Your Review A Title"
                                                                            onChange={((e) => {
                                                                                const str = e.target.value;
                                                                                const arr = str.split(" ");
                                                                                for (var i = 0; i < arr.length; i++) {
                                                                                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                                                                                }
                                                                                const str2 = arr.join(" ");
                                                                                setReviewtittle(str2);
                                                                            })}
                                                                        />
                                                                    </div>

                                                                    <div className="mb-3 col-sm-12">
                                                                        <label>Review<span className="text-danger">*</span></label>

                                                                        <textarea rows="6" value={review} className="form-control" required
                                                                            placeholder="Write Your Comments Here"

                                                                            onChange={((e) => {
                                                                                const str = e.target.value;
                                                                                const arr = str.split(" ");
                                                                                for (var i = 0; i < arr.length; i++) {
                                                                                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                                                                                }
                                                                                const str2 = arr.join(" ");
                                                                                setReview(str2);
                                                                            })}>
                                                                        </textarea>
                                                                    </div>

                                                                    <div className="col-md-12">
                                                                        <button className="btn btn-primary rounded-pill px-5 py-3" type="submit">
                                                                            <b>SUBMIT REVIEW</b>
                                                                        </button>
                                                                    </div>

                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <br /><br /><br />
                        </div>
                        <br /><br /><br />

                        <div className="container-fluid">
                            <div className="row g-0 px-4">
                                <div className="col-sm-6 d-flex justify-content-start">
                                    <h1><b>You May Also Like</b></h1>
                                </div>
                                <div className="col-sm-6 d-flex justify-content-end">
                                    <Link href={`/Products/${router.query.Product_Category}`}>
                                        <a>
                                            <h5 className="text-muted"><b>View All Products <i className="fas fa-chevron-right"></i></b></h5>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <Carousel responsive={responsive} className="py-4">
                                {

                                    deta.map((data) =>
                                        <div key={1} className="px-3">
                                            <Link href={`/Product/${data.catname}/${data.subcatname}/${data.Product.productpath}`} >
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
                        </div>

                        <br /><br /><br /><br />
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <Loader />
                </>
            );
        }
    }

    return (
        <>
            <Loding data={Detailes} />
        </>
    );
}

export default Products_Details;