import $ from "jquery";
import { useEffect } from "react";
import Link from "next/link";

function New_Releases() {

    useEffect(() => {

        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();
        var scrollPosition = 0;
        $("#carouselExampleControls-seconds .carousel-control-next").on("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 4) {
                scrollPosition += cardWidth;
                $("#carouselExampleControls-seconds .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });
        $("#carouselExampleControls-seconds .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                $("#carouselExampleControls-seconds .carousel-inner").animate(
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
                        <h1><b>New releases</b></h1>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-end">
                        <Link href="/All-Industries">
                            <a>
                                <h5 className="text-muted"><b>View More Posts <i className="fas fa-chevron-right"></i></b></h5>
                            </a>
                        </Link>
                    </div>
                </div>

                <div id="carouselExampleControls-seconds" className="carousel" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <div className="d-flex">
                                <Link href="/Products/All/Happiness">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/new1.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{`What's NEW in December`}</h5>
                                                <br />
                                                <h6 className="text-muted">{`What's NEW in December`} Hey everybody! We hope your Christmas went well!...</h6>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products/All/Happiness">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/new2.jpg" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{`What's NEW in November`}</h5>
                                                <br />
                                                <h6 className="text-muted">{`What's NEW in November Good news everyone! It's been a busy month for us...`}</h6>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products/All/Happiness">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/new1.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{`What's NEW in December`}</h5>
                                                <br />
                                                <h6 className="text-muted">{`What's NEW in December`} Hey everybody! We hope your Christmas went well!...</h6>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products/All/Happiness">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/new2.jpg" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{`What's NEW in November`}</h5>
                                                <br />
                                                <h6 className="text-muted">{`What's NEW in November Good news everyone! It's been a busy month for us...`}</h6>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products/All/Happiness">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/new1.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{`What's NEW in December`}</h5>
                                                <br />
                                                <h6 className="text-muted">{`What's NEW in December`} Hey everybody! We hope your Christmas went well!...</h6>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products/All/Happiness">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/new2.jpg" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{`What's NEW in November`}</h5>
                                                <br />
                                                <h6 className="text-muted">{`What's NEW in November Good news everyone! It's been a busy month for us...`}</h6>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products/All/Happiness">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/new1.png" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{`What's NEW in December`}</h5>
                                                <br />
                                                <h6 className="text-muted">{`What's NEW in December`} Hey everybody! We hope your Christmas went well!...</h6>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <Link href="/Products/All/Happiness">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper"><img src="/new2.jpg" className="d-block w-100" alt="..." /> </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{`What's NEW in November`}</h5>
                                                <br />
                                                <h6 className="text-muted">{`What's NEW in November Good news everyone! It's been a busy month for us...`}</h6>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-seconds" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-seconds" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}
export default New_Releases;

