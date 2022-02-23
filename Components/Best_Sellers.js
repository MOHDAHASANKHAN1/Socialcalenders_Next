import $ from "jquery";
import { useEffect } from "react";
import Link from "next/link";

function Best_Sellers() {

    useEffect(() => {

        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();
        var scrollPosition = 0;
        $("#carouselExampleControls-third .carousel-control-next").on("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 4) {
                scrollPosition += cardWidth;
                $("#carouselExampleControls-third .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });
        $("#carouselExampleControls-third .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                $("#carouselExampleControls-third .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });

    }, []);

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="">
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

                <div id="carouselExampleControls-third" className="carousel" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <div className="d-flex">
                                <Link href="/Products/All/Happiness">
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
                                <Link href="/Products/All/Social-Media">
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
                                <Link href="/Products/All/Holiday">
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
                                <Link href="/Products/All/Holiday">
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
                                <Link href="/Products/All/Holiday">
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
                                <Link href="/Products/All/Real-Estate">
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
                                <Link href="/Products/All/Holiday">
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
                                <Link href="/Products/All/Real-Estate">
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
                                <Link href="/Products/All/Holiday">
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
                                <Link href="/Products/All/Real-Estate">
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
                                <Link href="/Products/All/Holiday">
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
                                <Link href="/Products/All/Real-Estate">
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
                                <Link href="/Products/All/Holiday">
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
                                <Link href="/Products/All/Real-Estate">
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
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-third" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-third" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}
export default Best_Sellers;

