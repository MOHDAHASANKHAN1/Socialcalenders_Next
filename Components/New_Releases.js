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

function New_Releases() {

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
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
            <Carousel responsive={responsive} className="py-4">

                <div className="px-2">
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

                <div className="px-2">
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

                <div className="px-2">
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

                <div className="px-2">
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

                <div className="px-2">
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

            </Carousel>
        </>
    );
}
export default New_Releases;

