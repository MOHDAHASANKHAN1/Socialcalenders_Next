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

function Best_Sellers() {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row g-0 px-4">
                <div className="col-sm-6 d-flex justify-content-start">
                    <h1><b>Best Sellers</b></h1>
                </div>
                <div className="col-sm-6 d-flex justify-content-end">
                    <Link href="/All-Industries">
                        <a>
                            <h5 className="text-muted"><b>View All Products <i className="fas fa-chevron-right"></i></b></h5>
                        </a>
                    </Link>
                </div>
            </div>
            <Carousel responsive={responsive} className="py-4">
                <div className="px-3">
                    <Link href="/Products/All/Happiness" >
                        <a>
                            <div className="card card-sss d-flex align-items-center justify-content-center mx-1" >
                                <div className="img-wrapper-s"><img src="/Real-State-Book.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">300 Real Estate Templates For Social Media</h5>
                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="px-3">
                    <Link href="/Products/All/Happiness" >
                        <a>
                            <div className="card card-sss d-flex align-items-center justify-content-center mx-1" >
                                <div className="img-wrapper-s"><img src="/Real-State-Book.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">300 Real Estate Templates For Social Media</h5>
                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="px-3">
                    <Link href="/Products/All/Happiness" >
                        <a>
                            <div className="card card-sss d-flex align-items-center justify-content-center mx-1" >
                                <div className="img-wrapper-s"><img src="/Real-State-Book.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">300 Real Estate Templates For Social Media</h5>
                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="px-3">
                    <Link href="/Products/All/Happiness" >
                        <a>
                            <div className="card card-sss d-flex align-items-center justify-content-center mx-1" >
                                <div className="img-wrapper-s"><img src="/Real-State-Book.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">300 Real Estate Templates For Social Media</h5>
                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="px-3">
                    <Link href="/Products/All/Happiness" >
                        <a>
                            <div className="card card-sss d-flex align-items-center justify-content-center mx-1" >
                                <div className="img-wrapper-s"><img src="/Real-State-Book.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">300 Real Estate Templates For Social Media</h5>
                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="px-3">
                    <Link href="/Products/All/Happiness" >
                        <a>
                            <div className="card card-sss d-flex align-items-center justify-content-center mx-1" >
                                <div className="img-wrapper-s"><img src="/Real-State-Book.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">300 Real Estate Templates For Social Media</h5>
                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="px-3">
                    <Link href="/Products/All/Happiness" >
                        <a>
                            <div className="card card-sss d-flex align-items-center justify-content-center mx-1" >
                                <div className="img-wrapper-s"><img src="/Real-State-Book.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">300 Real Estate Templates For Social Media</h5>
                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="px-3">
                    <Link href="/Products/All/Happiness" >
                        <a>
                            <div className="card card-sss d-flex align-items-center justify-content-center mx-1" >
                                <div className="img-wrapper-s"><img src="/Real-State-Book.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">300 Real Estate Templates For Social Media</h5>
                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="px-3">
                    <Link href="/Products/All/Happiness" >
                        <a>
                            <div className="card card-sss d-flex align-items-center justify-content-center mx-1" >
                                <div className="img-wrapper-s"><img src="/Real-State-Book.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">300 Real Estate Templates For Social Media</h5>
                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="px-3">
                    <Link href="/Products/All/Happiness" >
                        <a>
                            <div className="card card-sss d-flex align-items-center justify-content-center mx-1" >
                                <div className="img-wrapper-s"><img src="/Real-State-Book.png" className="d-block w-100" alt="..." /> </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">300 Real Estate Templates For Social Media</h5>
                                    <h6 className="text-center text-muted"><del>$189.00</del><span className="text-danger px-2">$49.00</span></h6>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            </Carousel>
        </>
    );
}

export default Best_Sellers