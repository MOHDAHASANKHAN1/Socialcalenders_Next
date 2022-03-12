import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

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

function Choose_Industry() {

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row g-0 px-4">
                <div className="col-sm-6 d-flex justify-content-start">
                    <h1><b>Choose your industry</b></h1>
                </div>
                <div className="col-sm-6 d-flex justify-content-end">
                    <Link href="/All-Industries">
                        <a>
                            <h5 className="text-muted"><b>View All Industries <i className="fas fa-chevron-right"></i></b></h5>
                        </a>
                    </Link>
                </div>
            </div>
            <Carousel responsive={responsive} className="py-4">
                <div className="px-2">
                    <Link href="/Products/All/Happiness">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Happiness.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Happiness</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Social-Media">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Social.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Socials</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Holiday">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Holiday.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Holiday</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Real-Estate">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Real-Estate.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Estate</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Bussiness">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Bussiness.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Bussiness</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Motivation">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Motivation.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Motivation</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Travel">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Travel.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Travel</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Fitness">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Fitness.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Fitness</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Nutrition">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Nutrition.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Nutrition</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Music">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Music.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Music</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Beauty">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Beuty.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Beauty</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Finance">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Finance.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Finance</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Fashion">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Fashion.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Fashion</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Wellness">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Wellness.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Wellness</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Coaching">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Coaching.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Coaching</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Pets">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Pets.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Pets</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Home">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Home.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Home</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Liferstyle">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Lifestyle.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Liferstyle</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Wedding">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Wedding.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Wedding</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Health">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Health.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Health</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Food">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Food.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Food</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Sports">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Sports.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Sports</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Services">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Services.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Services</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Gadering">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Gadering.webp" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Gadering</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Education">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Education.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Education</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Events">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Events.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Events</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Therapy">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Therapy.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Therapy</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="px-2">
                    <Link href="/Products/All/Fashion">
                        <a>
                            <div className="card">
                                <div className="img-wrapper"><img src="/Fashion.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Fashion</h5>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

            </Carousel>
        </>
    );
}
export default Choose_Industry;

