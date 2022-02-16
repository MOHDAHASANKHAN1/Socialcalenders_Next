import Link from "next/link";

function Category_Home() {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="">

                <div className="row g-0">
                    <div className="col-sm-12 d-flex justify-content-start p-4">
                        <h1><b>Categories</b></h1>
                    </div>

                    <div className="col-sm-4 p-4">
                        <Link href="/Products/Templates">
                            <a className="d-flex">
                                <img src="/Category_1.png" className="img-fluid " alt="/" />
                                <div className="position-absolute category">
                                    <p className="heading"><b>Ready Made Templates</b></p>
                                    <p className="subheading text-muted">Over 50 000 editable social media <br />  templates for over 200 different industries.</p>
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div className="col-sm-4 p-4">
                        <Link href="/Products/Email-Marketing">
                            <a className="d-flex">
                                <img src="/Category_2.png" className="img-fluid " alt="/" />
                                <div className="position-absolute category">
                                    <p className="heading"><b>Pre-written Emails</b></p>
                                    <p className="subheading text-muted">Ready-made marketing emails for <br /> business owners. Boost engagement and sales.</p>
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div className="col-sm-4 p-4">
                        <Link href="/Products/Books">
                            <a className="d-flex">
                                <img src="/Category_3.png" className="img-fluid " alt="/" />
                                <div className="position-absolute category">
                                    <p className="heading"><b>Digital Books</b></p>
                                    <p className="subheading text-muted">E-Books, Planners, and Guides about <br /> social media and digital marketing.</p>
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div className="col-sm-3 p-4">
                        <Link href="/Products/Calenders">
                            <a className="d-flex">
                                <img src="/Category_4.png" className="img-fluid " alt="/" />
                                <div className="position-absolute category">
                                    <p className="heading"><b>Calenders</b></p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="col-sm-3 p-4">
                        <Link href="/Products/Challenges">
                            <a className="d-flex">
                                <img src="/Category_5.png" className="img-fluid " alt="/" />
                                <div className="position-absolute category">
                                    <p className="heading"><b>Challeges</b></p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="col-sm-3 p-4">
                        <Link href="/Products/Covers">
                            <a className="d-flex">
                                <img src="/Category_6.png" className="img-fluid " alt="/" />
                                <div className="position-absolute category">
                                    <p className="heading"><b>Covers</b></p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="col-sm-3 p-4">
                        <Link href="/Products/Courses">
                            <a className="d-flex">
                                <img src="/Category_7.png" className="img-fluid " alt="/" />
                                <div className="position-absolute category">
                                    <p className="heading"><b>Courses</b></p>
                                </div>
                            </a>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Category_Home;
