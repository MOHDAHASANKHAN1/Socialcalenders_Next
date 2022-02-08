import $ from "jquery";
import { useEffect } from "react";
import Link from "next/link";

function Choose_Industry() {

    useEffect(() => {

        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();
        var scrollPosition = 0;
        $("#carouselExampleControls-first .carousel-control-next").on("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 4) {
                scrollPosition += cardWidth;
                $("#carouselExampleControls-first .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });
        $("#carouselExampleControls-first .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                $("#carouselExampleControls-first .carousel-inner").animate(
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
                <div id="carouselExampleControls-first" className="carousel" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <div className="d-flex">
                                <Link href="/Products-By-Category/All-Products/Happiness">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/Happiness.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Happiness</h5>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/Products-By-Category/All-Products/Social-Media">
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
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products-By-Category/All-Products/Holiday">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/Holiday.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Holiday</h5>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/Products-By-Category/All-Products/Real-Estate">
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
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products-By-Category/All-Products/Bussiness">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/Bussiness.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Bussiness</h5>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/Products-By-Category/All-Products/Motivation">
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
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products-By-Category/All-Products/Travel">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/Travel.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Travel</h5>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/Products-By-Category/All-Products/Fitness">
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
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products-By-Category/All-Products/Nutrition">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/Nutrition.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Nutrition</h5>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/Products-By-Category/All-Products/Music">
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
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products-By-Category/All-Products/Beauty">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/Beuty.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Beauty</h5>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/Products-By-Category/All-Products/Finance">
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
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products-By-Category/All-Products/Fashion">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/Fashion.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Fashion</h5>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/Products-By-Category/All-Products/Wellness">
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
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products-By-Category/All-Products/Coaching">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/Coaching.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Coaching</h5>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/Products-By-Category/All-Products/Pets">
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
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products-By-Category/All-Products/Home">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/Home.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Home</h5>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/Products-By-Category/All-Products/Liferstyle">
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
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products-By-Category/All-Products/Wedding">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/Wedding.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Wedding</h5>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/Products-By-Category/All-Products/Health">
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
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products-By-Category/All-Products/Food">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/Food.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Food</h5>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/Products-By-Category/All-Products/Sports">
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
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products-By-Category/All-Products/Services">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/Services.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Services</h5>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/Products-By-Category/All-Products/Gadering">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/Gadering.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Gadering</h5>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products-By-Category/All-Products/Education">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/Education.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Education</h5>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/Products-By-Category/All-Products/Events">
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
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products-By-Category/All-Products/Therapy">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/Therapy.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Therapy</h5>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/Products-By-Category/All-Products/Fashion">
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
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-first" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-first" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}
export default Choose_Industry;

