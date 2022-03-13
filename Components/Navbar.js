import Link from "next/link";
import { parseCookies } from 'nookies';
import cookie from 'js-cookie';
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function Navbar() {

    const { Token, User_Role } = parseCookies();
    const Router = useRouter();

    const Quantity = useSelector((state) => state.Cart.Quantity);

    return (
        <>
            <div className="bg-nav p-3">
                <br />
                <nav className="navbar navbar-expand-sm navbar-light relat" aria-label="Third navbar example">
                    <div className="container-fluid"><Link href="/">
                        <a className="navbar-brand">
                            <b>Social Media Calender</b>
                        </a>
                    </Link> <button
                        className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
                        aria-controls="navbarsExample03" aria-expanded="false" aria-label="toggle navigation"><span
                            className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarsExample03">
                            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                                <li className="nav-item"><Link href="/"><a className="nav-link  ">Home</a></Link></li>
                                <li className="nav-item dropdown">
                                    <Link href="/Products" ><a className="nav-link dropdown-toggle  " id="dropdown03" data-bs-toggle="dropdown">Products</a></Link>
                                    <ul className="dropdown-menu">
                                        <li><Link href="/Products/All"><a className="dropdown-item text-center">All Products</a></Link></li>
                                        <li><Link href="/Products/Email-Marketing"><a className="dropdown-item text-center">Email Marketing</a></Link></li>
                                        <li><Link href="/Products/Calenders"><a className="dropdown-item text-center">Calenders</a></Link></li>
                                        <li><Link href="/Products/Planers"><a className="dropdown-item text-center">Planers</a></Link></li>
                                        <li><Link href="/Products/Courses"><a className="dropdown-item text-center">Courses</a></Link></li>
                                        <li><Link href="/Products/Lead-Magnets"><a className="dropdown-item text-center">Lead Magnets</a></Link></li>
                                        <li><Link href="/Products/Challenges"><a className="dropdown-item text-center">Challenges</a></Link></li>
                                        <li><Link href="/Products/Books"><a className="dropdown-item text-center">Books</a></Link></li>
                                        <li><Link href="/Products/Guides"><a className="dropdown-item text-center">Guides</a></Link></li>
                                        <li><Link href="/Products/Covers"><a className="dropdown-item text-center">Covers</a></Link></li>
                                        <li><Link href="/Products/Templates"><a className="dropdown-item text-center">Templates</a></Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link href="/All-Industries"><a className="nav-link  ">Industries</a></Link></li>
                                {
                                    Token ? User_Role === "Admin" ?
                                        <>
                                            <li className="nav-item"><Link href="/Add-Product"><a className="nav-link ">Add</a></Link></li>
                                            <li className="nav-item"><Link href="/Messages"><a className="nav-link ">Messages</a></Link></li>
                                            <li className="nav-item"><a className="nav-link btn" onClick={() => {
                                                cookie.remove('Token');
                                                cookie.remove('User_Role');
                                                cookie.remove('id');
                                                cookie.remove('name');
                                                cookie.remove('email');
                                                cookie.remove('phone');
                                                Router.push('/Login');
                                            }}>Logout</a></li>
                                        </>
                                        :
                                        <>
                                            <li className="nav-item"><a href="https://technicalknowledge.herokuapp.com/" className="nav-link  ">Blog</a></li>
                                            <li className="nav-item"><Link href="/Affiliate"><a className="nav-link  ">Affiliate</a></Link></li>
                                            <li className="nav-item"><Link href="/Contact"><a className="nav-link  ">Contact</a></Link></li>
                                            <li className="nav-item"><a className="nav-link btn" onClick={() => {
                                                cookie.remove('Token');
                                                cookie.remove('User_Role');
                                                cookie.remove('id');
                                                cookie.remove('name');
                                                cookie.remove('email');
                                                cookie.remove('phone');
                                                Router.push('/Login');
                                            }}>Logout</a></li>
                                        </>
                                        :

                                        <>
                                            <li className="nav-item"><a href="https://technicalknowledge.herokuapp.com/" className="nav-link  ">Blog</a></li>
                                            <li className="nav-item"><Link href="/Affiliate"><a className="nav-link  ">Affiliate</a></Link></li>
                                            <li className="nav-item"><Link href="/Contact"><a className="nav-link  ">Contact</a></Link></li>
                                        </>
                                }


                            </ul>
                            <form className="d-flex">
                                <Link href="/">
                                    <a><i className="fas fa-search h4 px-2"></i></a>
                                </Link>
                                <Link href="/Profile">
                                    <a><i className="far fa-user h4 px-2"></i></a>
                                </Link>
                                <Link href="/Cart">
                                    <a> <i className="fas fa-shopping-bag h4 px-2">{Quantity !== 0 ? <sup style={{ color: "#06ffff" }}>{Quantity}</sup> : ""}</i></a>
                                </Link>
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
