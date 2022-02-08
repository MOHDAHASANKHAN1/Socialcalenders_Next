import Link from "next/link";

function Navbar() {
    return (
        <>
            <div className="bg-nav px-5">
                <br />
                <nav class="navbar navbar-expand-sm navbar-light relat" aria-label="Third navbar example">
                    <div class="container-fluid"><Link href="/">
                        <a class="navbar-brand">
                            <b>Social Media Calender</b>
                        </a>
                    </Link> <button
                        class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
                        aria-controls="navbarsExample03" aria-expanded="false" aria-label="toggle navigation"><span
                            class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarsExample03">
                            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                                <li className="nav-item"><Link href="/"><a className="nav-link  ">Home</a></Link></li>
                                <li className="nav-item dropdown">
                                    <Link href="/Products-By-Category" ><a className="nav-link dropdown-toggle  " id="dropdown03" data-bs-toggle="dropdown">Products</a></Link>
                                    <ul className="dropdown-menu">
                                        <li><Link href="/Products-By-Category/All-Products"><a className="dropdown-item text-center">All Products</a></Link></li>
                                        <li><Link href="/Products-By-Category/Email-Marketing"><a className="dropdown-item text-center">Email Marketing</a></Link></li>
                                        <li><Link href="/Products-By-Category/Calenders"><a className="dropdown-item text-center">Calenders</a></Link></li>
                                        <li><Link href="/Products-By-Category/Planers"><a className="dropdown-item text-center">Planers</a></Link></li>
                                        <li><Link href="/Products-By-Category/Courses"><a className="dropdown-item text-center">Courses</a></Link></li>
                                        <li><Link href="/Products-By-Category/Lead-Magnets"><a className="dropdown-item text-center">Lead Magnets</a></Link></li>
                                        <li><Link href="/Products-By-Category/Challenges"><a className="dropdown-item text-center">Challenges</a></Link></li>
                                        <li><Link href="/Products-By-Category/Books"><a className="dropdown-item text-center">Books</a></Link></li>
                                        <li><Link href="/Products-By-Category/Guides"><a className="dropdown-item text-center">Guides</a></Link></li>
                                        <li><Link href="/Products-By-Category/Covers"><a className="dropdown-item text-center">Covers</a></Link></li>
                                        <li><Link href="/Products-By-Category/Templates"><a className="dropdown-item text-center">Templates</a></Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item"><Link href="/All-Industries"><a className="nav-link  ">Industries</a></Link></li>
                                <li className="nav-item"><Link href="/Blog"><a className="nav-link  ">Blog</a></Link></li>
                                <li className="nav-item"><Link href="/Affiliate"><a className="nav-link  ">Affiliate</a></Link></li>
                                <li className="nav-item"><Link href="/Contact"><a className="nav-link  ">Contact</a></Link></li>
                            </ul>
                            <form className="d-flex">
                                <i className="fas fa-search h4 px-2"></i>
                                <i className="far fa-user h4 px-2"></i>
                                <i className="fas fa-shopping-bag h4 px-2"></i>
                            </form>
                        </div>
                    </div>
                </nav>
                <br />
            </div>
        </>
    );
}

export default Navbar;
