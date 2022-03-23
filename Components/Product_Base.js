import Product_Base_Head from "./Product_Base_Head";
import Link from "next/link";
import $ from "jquery";
import { useEffect, useState } from "react";
import { Add_To_Cart } from "../Redux/Action/Cart";
import { useDispatch } from "react-redux";
import Router, { useRouter } from "next/router";
import Loader from './Loader';

const Loding = ({ Product }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(async () => {

        $(".image-change").hover(function () {
            $(this).attr("src", $(this).attr("id"));
        }, function () {
            $(this).attr("src", $(this).attr("alt"));
        });

        $(".show").hover(function () {
            $(`.${$(this).attr("id")}`).show();
        }, function () {
            $(`.${$(this).attr("id")}`).hide();
        });
    });

    function Add(cdata) {
        dispatch(Add_To_Cart(cdata));
        router.push("/Cart");
    }

    Router.onRouteChangeStart = url => {
        setLoading(false);
    }
    Router.onRouteChangeComplete = url => {
        setLoading(true);
    }

    let [start, setStart] = useState(0);
    let [end, setEnd] = useState(12);

    if (loading) {
        return (
            <>
                {

                    Product.slice(start, end).map((data) =>

                        <div className="col-12 col-md-6 col-sm-6 col-lg-4 col-xl-4 col-xxl-4 py-5 d-flex align-items-center justify-content-center px-3" key={1}>
                            <div className={`card card-sss card-ss show `} id={data.Product._id}>
                                <Link href={`/Product/${data.catname}/${data.subcatname}/${data.Product.productpath}`}>
                                    <a>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className=" cards-s d-flex align-items-center justify-content-center ">
                                                <img src={data.Product.image[0].url} className="card-img-top image-change" id={data.Product.image.length !== 1 ? data.Product.image[1].url : data.Product.image[0].url} alt={data.Product.image[0].url} />
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <div className="d-grid gap-2">
                                    <button className={`btn btn-dark ${data.Product._id}`} id="add" type="button" onClick={() => Add({ quantity: 1, url: data.Product.image[0].url, tittle: data.Product.tittle, oprice: parseFloat(data.Product.oprice), uprice: parseFloat(data.Product.oprice), productpath: data.Product.productpath, category: data.catname, subcategory: data.subcatname })}><h5><b>Add To Cart</b></h5></button>
                                </div>
                                <div className="card-body">
                                    <Link href={`/Product/${router.query.Category}/${data.Product.name}/${data.Product.productpath}`}>
                                        <a>
                                            <p className="text-muted text-center">Social Medial Calender</p>
                                            <h5 className="card-title text-center">{data.Product.tittle}</h5>
                                            <h6 className="text-center text-muted h6"><del><i className="fa-solid fa-indian-rupee-sign" style={{ fontSize: "0.9rem" }}></i>{`${data.Product.cprice}`}</del><span className="text-danger px-2"><i className="fa-solid fa-indian-rupee-sign" style={{ fontSize: "0.9rem" }}></i>{`${data.Product.oprice}`}</span></h6>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div >
                    )
                }

                <div className="d-flex align-items-center justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link btn" onClick={() => {
                                    if (start !== 0 && end !== 12) {
                                        setStart(start - 12), setEnd(end - 12)
                                    }
                                }} aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link btn" onClick={() => {
                                if (Product.length >= 12) {
                                    setStart(12), setEnd(24)
                                }
                            }}>1</a></li>
                            <li className="page-item"><a className="page-link btn" onClick={() => {
                                if (Product.length >= 24) {
                                    setStart(24), setEnd(36)
                                }
                            }}>2</a></li>
                            <li className="page-item"><a className="page-link btn" onClick={() => {
                                if (Product.length >= 36) {
                                    setStart(36), setEnd(48)
                                }
                            }}>3</a></li>
                            <li className="page-item">
                                <a className="page-link btn" onClick={() => {
                                    if (Product.length >= end) {
                                        setStart(start + 12), setEnd(end + 12)
                                    }
                                }} aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        );
    } else {
        return (
            <>
                <Loader />
            </>
        );
    }
}

function Product_Base({ Product, Countcat, Countsub }) {

    const router = useRouter();
    useEffect(() => {
        $(".side").click(function () {
            $(`#sidebars`).toggle();
        });
    });

    console.log(Countsub)

    return (
        <>
            <Product_Base_Head />

            <div className="row g-0 py-5">
                <div className="col-12 col-sm-3 com-md-3 col-lg-3 ">

                    <div className="row g-0 justify-content-around" id="unfilter">
                        <div className="col-sm-5 col-5 p-3 btn-outline-dark btn btn-default side">
                            <h5><b> <i className="fa px-2 fa-filter"></i> Filter By</b></h5>
                        </div>
                        <div className="col-sm-5 col-5 p-3  btn btn-default btn-outline-dark side">
                            <h5><b>Best Selling</b></h5>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="filter">
                            <div className="py-4">
                                <h2 className='text-dark'><b>Products</b></h2>
                                {
                                    Countcat.map((cate) =>
                                        <div key={1} className="row g-0">
                                            <div className="col-sm-11 col-10 d-flex align-items-center justify-content-start">
                                                <Link passHref href={`/Products/${cate.value}`} className='nav-link px-0' key={1}><a><h5 className='topics'>{cate.name}</h5></a></Link>
                                            </div>
                                            <div className=" col-sm-1 col-2 d-flex align-items-center justify-content-end">
                                                <Link passHref href={`/Products/${cate.value}`} className='nav-link px-0' key={1}><a><h5 className='topics'>({cate.length})</h5></a></Link>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <h2 className='text-dark'><b>Industry</b></h2>
                            <div className="scroll-area-sm">
                                <div style={{ position: "static" }} className="ps ps--active-y">
                                    <div className="ps-content">
                                        <div className="pb-4">
                                            {
                                                Countsub.map((data) =>
                                                    <div key={1} className="row g-0">
                                                        <div className="col-sm-11 col-10 d-flex align-items-center justify-content-start">
                                                            <Link passHref href={`/Products/${router.query.Category}/${data.name}`} className='nav-link px-0' key={1}><a><h5 className='topics'>{data.name}</h5></a></Link>
                                                        </div>
                                                        <div className=" col-sm-1 col-2 d-flex align-items-center justify-content-end">
                                                            <Link passHref href={`/Products/${router.query.Category}/${data.name}`} className='nav-link px-0' key={1}><a><h5 className='topics'>({data.len})</h5></a></Link>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-sm-9 com-md-9 col-12 col-lg-9">

                    <div className="row g-0">
                        <Loding Product={Product} />
                    </div>

                </div>
            </div>

            <div className="sidebar fixed-top bg-light" id="sidebars">
                <h5 className="text-end px-4 pt-2 side"><b><i className="fa fa-times btn" aria-hidden="true"></i></b></h5>
                <div className="d-flex justify-content-center">
                    <div id="unfilter">
                        <div className="">
                            <h2 className='text-dark'><b>Products</b></h2>
                            <div className="scroll-area-sm-sides">
                                <div style={{ position: "static" }} className="ps ps--active-y">
                                    <div className="ps-content">
                                        <div className="pb-4">
                                            {
                                                Countcat.map((cate) =>
                                                    <div key={1} className="row g-0">
                                                        <div className="col-sm-11 col-10 d-flex align-items-center justify-content-start">
                                                            <Link passHref href={`/Products/${cate.value}`} className='nav-link px-0' key={1}><a><h5 className='topics'>{cate.name}</h5></a></Link>
                                                        </div>
                                                        <div className=" col-sm-1 col-2 d-flex align-items-center justify-content-end">
                                                            <Link passHref href={`/Products/${cate.value}`} className='nav-link px-0' key={1}><a><h5 className='topics'>({cate.length})</h5></a></Link>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className='text-dark'><b>Industry</b></h2>
                        <div className="scroll-area-sm-side">
                            <div style={{ position: "static" }} className="ps ps--active-y">
                                <div className="ps-content">
                                    <div className="pb-4">
                                        {
                                            Countsub.map((data) =>
                                                <div key={1} className="row g-0">
                                                    <div className="col-sm-11 col-10 d-flex align-items-center justify-content-start">
                                                        <Link passHref href={`/Products/${router.query.Category}/${data.name}`} className='nav-link px-0' key={1}><a><h5 className='topics'>{data.name}</h5></a></Link>
                                                    </div>
                                                    <div className=" col-sm-1 col-2 d-flex align-items-center justify-content-end">
                                                        <Link passHref href={`/Products/${router.query.Category}/${data.name}`} className='nav-link px-0' key={1}><a><h5 className='topics'>({data.len})</h5></a></Link>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Product_Base;