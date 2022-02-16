import $ from "jquery";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Products_Details() {

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

    useEffect(() => {

        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();
        var scrollPosition = 0;
        $("#carouselExampleControls-fourth .carousel-control-next").on("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 4) {
                scrollPosition += cardWidth;
                $("#carouselExampleControls-fourth .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });
        $("#carouselExampleControls-fourth .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                $("#carouselExampleControls-fourth .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });

        $(".image-change").click(function () {
            $("#main-image").attr("src", $(this).attr("src"));
        });


    }, []);

    const router = useRouter();

    const { Products_Details } = router.query;

    return (
        <>
            <br />
            <div className="container-fluid">
                <h6 className='text-muted  ress'>Templates / 200 Local Store Owner Templates for Social Media</h6>
                <br />
                <div className="row g-0 justify-content-around  ress">
                    <div className="col-sm-6">
                        <div className="row gx-0 gy-0">
                            <div className="col-sm-2 col-2">
                                <div className="row gx-0 gy-2">

                                    <div className="col-sm-12 d-flex align-items-center justify-content-center">
                                        <img src="/Pd.png" className="img-fluid image-change w-50 border border-primary rounded-3 p-2" alt="/" />
                                    </div>

                                    <div className="col-sm-12 d-flex align-items-center justify-content-center">
                                        <img src="/Pd1.png" className="img-fluid image-change w-50 border border-primary rounded-3 p-2" alt="/" />
                                    </div>

                                    <div className="col-sm-12 d-flex align-items-center justify-content-center">
                                        <img src="/Pd2.png" className="img-fluid image-change w-50 border border-primary rounded-3 p-2" alt="/" />
                                    </div>

                                    <div className="col-sm-12 d-flex align-items-center justify-content-center">
                                        <img src="/Pd3.png" className="img-fluid image-change w-50 border border-primary rounded-3 p-2" alt="/" />
                                    </div>

                                </div>
                            </div>
                            <div className="col-sm-10 col-10 d-flex align-items-center justify-content-center">
                                <div d-flex className='d-flex align-items-center justify-content-center w-75'>
                                    <img src="/Pd.png" className="img-fluid" id='main-image' alt="/" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-center p-4">
                        <div className=''>
                            <h2><b>200 Local Store Owner Templates for Social Media</b></h2>
                            <div className="d-flex justify-content-start">
                                <fieldset class="rating1">
                                    <input type="radio" id="star5" name="rating" value="5" />
                                    <label class="full" for="star5" title="Awesome - 5 stars"></label>
                                    <input type="radio" id="star4half" name="rating" value="4.5" />
                                    <label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                    <input type="radio" id="star4" name="rating" value="4" />
                                    <label class="full" for="star4" title="Pretty good - 4 stars"></label>
                                    <input type="radio" id="star3half" name="rating" value="3.5" />
                                    <label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                                    <input type="radio" id="star3" name="rating" value="3" />
                                    <label class="full" for="star3" title="Meh - 3 stars"></label>
                                    <input type="radio" id="star2half" name="rating" value="2.5" />
                                    <label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                    <input type="radio" id="star2" name="rating" value="2" />
                                    <label class="full" for="star2" title="Kinda bad - 2 stars"></label>
                                    <input type="radio" id="star1half" name="rating" value="1.5" />
                                    <label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                                    <input type="radio" id="star1" name="rating" value="1" />
                                    <label class="full" for="star1" title="Sucks big time - 1 star"></label>
                                    <input type="radio" id="starhalf" name="rating" value="0.5" />
                                    <label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                    <input type="radio" class="reset-option" name="rating" value="reset" />
                                </fieldset>
                                <h6 className="text-muted p-1">No Reviews</h6>
                            </div>
                            <h6 className="h5 text-muted"><del>$189.00</del><span className="h4 text-dark px-2">$49.00</span><span className="h5 text-white rounded-2 bg-success px-3"><b>70% OFF</b></span></h6>
                            <br />
                            <p className="text-muted">Receive 200 ready-made Local Store Owner templates for social media. These templates are perfect for every Store Owner, Manager, and Influencer. With these templates, you can get more reach, followers, engagement, and sales.</p>
                            <br />
                            <h6 className="text-muted">What will you get?</h6>
                            <br />
                            <ul>
                                <li className="text-muted">50 Engaging Questions</li>
                                <li className="text-muted">50 Beautiful Stories Templates</li>
                                <li className="text-muted">100 Stunning Promotional Posts</li>
                            </ul>
                            <br />
                            <h6 className="text-muted">What will you get?</h6>
                            <br />
                            <br />
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary rounded-pill p-3" type="button"><b>Add To Cart</b></button>
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
                <br /><br />
                <div className="container-fluid">
                    <div className="row gy-0 gx-0 justify-content-around">

                        <div className="col-sm-6 res">
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
                                    You can keep doing what you are doing now and getting the results you are getting... Or you can get instant access to templates and start chasing your dreams today. A year from now, you'll wish you had started today. The time is now. It's easy to delay working on your goals when the day-to-day stuff takes up so much of our time. And that is exactly the reason for the existence of the bundle.
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
                            <div className='Pdbg rounded-3 p-4'>
                                <h4><b>How to get started</b></h4>
                                <br />
                                <div class="ratio ratio-16x9">
                                    <iframe src="https://www.youtube.com/embed/xWf6Y_uVK7M" title="YouTube video" allowfullscreen></iframe>
                                </div>
                            </div>
                            <br /><br />
                            <div className='Pdbg rounded-3 p-4'>
                                <h4 className='px-2'><b>Frequently Asked Questions</b></h4>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="accordion accordion-flush" id="faqlist">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header px-2 Pdgb">
                                                    <button class="accordion-button collapsed Pdgb" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                                        Do I need a Canva account?
                                                    </button>
                                                </h2>
                                                <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                                    <div class="accordion-body">
                                                        Yes, a Canva account is required, but don't worry - creating one is completely FREE and easy.
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <div class="accordion-item">
                                                <h2 class="accordion-header px-2 Pdgb">
                                                    <button class="accordion-button collapsed Pdgb" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                                        Can I access these templates on my phone?
                                                    </button>
                                                </h2>
                                                <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                                    <div class="accordion-body">
                                                        Yes! However, editing templates on desktop is much more easier.
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <div class="accordion-item">
                                                <h2 class="accordion-header px-2 Pdgb">
                                                    <button class="accordion-button collapsed Pdgb" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                                        How do I access my templates?
                                                    </button>
                                                </h2>
                                                <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                                    <div class="accordion-body">
                                                        You will receive a .PDF file with links to templates via email after purchase. After adding templates to your Canva account, you can access your files directly from Canva
                                                    </div>
                                                </div>
                                            </div>
                                            <br />

                                            <div class="accordion-item">
                                                <h2 class="accordion-header px-2 Pdgb">
                                                    <button class="accordion-button collapsed Pdgb" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                                                        Can I edit these templates?
                                                    </button>
                                                </h2>
                                                <div id="faq-content-4" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                                    <div class="accordion-body">
                                                        Yes! All of our templates are fully editable.
                                                    </div>
                                                </div>
                                            </div>

                                            <br />
                                            <div class="accordion-item">
                                                <h2 class="accordion-header px-2 Pdgb">
                                                    <button class="accordion-button collapsed Pdgb" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                                                        What if I'm not happy with my purchase?
                                                    </button>
                                                </h2>
                                                <div id="faq-content-5" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                                    <div class="accordion-body">
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
                                        <fieldset class="rating2">
                                            <input type="radio" id="star5" name="rating" value="5" />
                                            <label class="full" for="star5" title="Awesome - 5 stars"></label>
                                            <input type="radio" id="star4half" name="rating" value="4.5" />
                                            <label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                            <input type="radio" id="star4" name="rating" value="4" />
                                            <label class="full" for="star4" title="Pretty good - 4 stars"></label>
                                            <input type="radio" id="star3half" name="rating" value="3.5" />
                                            <label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                                            <input type="radio" id="star3" name="rating" value="3" />
                                            <label class="full" for="star3" title="Meh - 3 stars"></label>
                                            <input type="radio" id="star2half" name="rating" value="2.5" />
                                            <label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                            <input type="radio" id="star2" name="rating" value="2" />
                                            <label class="full" for="star2" title="Kinda bad - 2 stars"></label>
                                            <input type="radio" id="star1half" name="rating" value="1.5" />
                                            <label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                                            <input type="radio" id="star1" name="rating" value="1" />
                                            <label class="full" for="star1" title="Sucks big time - 1 star"></label>
                                            <input type="radio" id="starhalf" name="rating" value="0.5" />
                                            <label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                            <input type="radio" class="reset-option" name="rating" value="reset" />
                                        </fieldset>
                                        <h5 className="text-muted p-2">No Reviews Yet</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 d-flex justify-content-end px-5">
                                <div>
                                    <button class="btn btn-primary rounded-pill py-3 px-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        <b>Write a review</b>
                                    </button>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <br />
                                <div class="collapse px-4" id="collapseExample">
                                    <div class="card card-body bg-info">

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
                                                                    <fieldset class="rating">
                                                                        <input type="radio" id="star5" name="rating" value="5" />
                                                                        <label class="full" for="star5" title="Awesome - 5 stars"></label>
                                                                        <input type="radio" id="star4half" name="rating" value="4.5" />
                                                                        <label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                                                        <input type="radio" id="star4" name="rating" value="4" />
                                                                        <label class="full" for="star4" title="Pretty good - 4 stars"></label>
                                                                        <input type="radio" id="star3half" name="rating" value="3.5" />
                                                                        <label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                                                                        <input type="radio" id="star3" name="rating" value="3" />
                                                                        <label class="full" for="star3" title="Meh - 3 stars"></label>
                                                                        <input type="radio" id="star2half" name="rating" value="2.5" />
                                                                        <label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                                                        <input type="radio" id="star2" name="rating" value="2" />
                                                                        <label class="full" for="star2" title="Kinda bad - 2 stars"></label>
                                                                        <input type="radio" id="star1half" name="rating" value="1.5" />
                                                                        <label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                                                                        <input type="radio" id="star1" name="rating" value="1" />
                                                                        <label class="full" for="star1" title="Sucks big time - 1 star"></label>
                                                                        <input type="radio" id="starhalf" name="rating" value="0.5" />
                                                                        <label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                                                        <input type="radio" class="reset-option" name="rating" value="reset" />
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
                                                                <button class="btn btn-primary rounded-pill px-5 py-3" type="submit">
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
                            <Link href="/All-Industries">
                                <a>
                                    <h5 className="text-muted"><b>View All Products <i className="fas fa-chevron-right"></i></b></h5>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div id="carouselExampleControls-fourth" className="carousel" data-bs-ride="carousel">
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <div className="d-flex">
                                    <Link href="/Products-By-Category/All-Products/Happiness">
                                        <a>
                                            <div className="card cards-s d-flex align-items-center justify-content-center">
                                                <div className="img-wrapper-s"><img src="/Real-State-Book.png" className="d-block w-100" alt="..." /> </div>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">300 Real Estate Templates For Social Media</h5>
                                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="/Products-By-Category/All-Products/Social-Media">
                                        <a>
                                            <div className="card cards-s d-flex align-items-center justify-content-center">
                                                <div className="img-wrapper-s"><img src="/Women.png" className="d-block w-100" alt="..." /> </div>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">200 Empowering Women Templates Bundle For Social Media</h5>
                                                    <h6 className="text-center text-muted"><del>$59.00</del><span className="text-danger px-2">$49.00</span></h6>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="d-flex">
                                    <Link href="/Products-By-Category/All-Products/Holiday">
                                        <a>
                                            <div className="card cards-s d-flex align-items-center justify-content-center">
                                                <div className="img-wrapper-s"><img src="/Mind.png" className="d-block w-100" alt="..." /> </div>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">300 Mindfullness Templates For Social Media</h5>
                                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="/Products-By-Category/All-Products/Holiday">
                                        <a>
                                            <div className="card cards-s d-flex align-items-center justify-content-center">
                                                <div className="img-wrapper-s"><img src="/Mind.png" className="d-block w-100" alt="..." /> </div>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">email marketing kits</h5>
                                                    <h6 className="text-center text-muted"><del>$199.00</del><span className="text-danger px-2">$99.00</span></h6>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="d-flex">
                                    <Link href="/Products-By-Category/All-Products/Holiday">
                                        <a>
                                            <div className="card cards-s d-flex align-items-center justify-content-center">
                                                <div className="img-wrapper-s"><img src="/Crypto.png" className="d-block w-100" alt="..." /> </div>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">200 Empowering Women Templates Bundle For Social Media</h5>
                                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="/Products-By-Category/All-Products/Real-Estate">
                                        <a>
                                            <div className="card cards-s d-flex align-items-center justify-content-center">
                                                <div className="img-wrapper-s"><img src="/Oil.png" className="d-block w-100" alt="..." /> </div>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">200 Empowering Women Templates Bundle For Social Media</h5>
                                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="d-flex">
                                    <Link href="/Products-By-Category/All-Products/Holiday">
                                        <a>
                                            <div className="card cards-s d-flex align-items-center justify-content-center">
                                                <div className="img-wrapper-s"><img src="/Candle.png" className="d-block w-100" alt="..." /> </div>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">200 Empowering Women Templates Bundle For Social Media</h5>
                                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="/Products-By-Category/All-Products/Real-Estate">
                                        <a>
                                            <div className="card cards-s d-flex align-items-center justify-content-center">
                                                <div className="img-wrapper-s"><img src="/Jewelry.png" className="d-block w-100" alt="..." /> </div>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">200 Empowering Women Templates Bundle For Social Media</h5>
                                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>


                            <div className="carousel-item">
                                <div className="d-flex">
                                    <Link href="/Products-By-Category/All-Products/Holiday">
                                        <a>
                                            <div className="card cards-s d-flex align-items-center justify-content-center">
                                                <div className="img-wrapper-s"><img src="/Mind.png" className="d-block w-100" alt="..." /> </div>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">200 Empowering Women Templates Bundle For Social Media</h5>
                                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="/Products-By-Category/All-Products/Real-Estate">
                                        <a>
                                            <div className="card cards-s d-flex align-items-center justify-content-center">
                                                <div className="img-wrapper-s"><img src="/Email.png" className="d-block w-100" alt="..." /> </div>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">200 Empowering Women Templates Bundle For Social Media</h5>
                                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="d-flex">
                                    <Link href="/Products-By-Category/All-Products/Holiday">
                                        <a>
                                            <div className="card cards-s d-flex align-items-center justify-content-center">
                                                <div className="img-wrapper-s"><img src="/Crypto.png" className="d-block w-100" alt="..." /> </div>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">200 Empowering Women Templates Bundle For Social Media</h5>
                                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="/Products-By-Category/All-Products/Real-Estate">
                                        <a>
                                            <div className="card cards-s d-flex align-items-center justify-content-center">
                                                <div className="img-wrapper-s"><img src="/Oil.png" className="d-block w-100" alt="..." /> </div>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">200 Empowering Women Templates Bundle For Social Media</h5>
                                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="d-flex">
                                    <Link href="/Products-By-Category/All-Products/Holiday">
                                        <a>
                                            <div className="card cards-s d-flex align-items-center justify-content-center">
                                                <div className="img-wrapper-s"><img src="/Real-State-Book.png" className="d-block w-100" alt="..." /> </div>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">200 Empowering Women Templates Bundle For Social Media</h5>
                                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="/Products-By-Category/All-Products/Real-Estate">
                                        <a>
                                            <div className="card cards-s d-flex align-items-center justify-content-center">
                                                <div className="img-wrapper-s"><img src="/Women.png" className="d-block w-100" alt="..." /> </div>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">200 Empowering Women Templates Bundle For Social Media</h5>
                                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-fourth" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-fourth" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <br /><br /><br /><br />
            </div>
        </>
    );
}

export default Products_Details