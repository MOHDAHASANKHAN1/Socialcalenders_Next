import Product_Base_Head from "./Product_Base_Head";
import Link from "next/link";
import $ from "jquery";
import { useEffect, useState } from "react";
import { Add_To_Cart } from "../Redux/Action/Cart";
import { useDispatch } from "react-redux";
import Router, { useRouter } from "next/router";
import Loader from './Loader';

const Loding = (props) => {
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
    if (loading) {
        return (
            <>
                {
                    props.data.map((data) =>

                        <div className="col-12 col-md-6 col-sm-6 col-lg-4 col-xl-4 col-xxl-4 py-5 d-flex align-items-center justify-content-center" key={1}>
                            <div className={`card card-ss show `} id={data._id}>
                                <Link href={`/Product/${data.productpath}`}>
                                    <a>
                                        <div className="d-flex align-items-center justify-content-center ">
                                            <div className=" cards-s d-flex align-items-center justify-content-center ">
                                                <img src={data.imageurl[0]} className="card-img-top image-change" id={data.imageurl[1]} alt={data.imageurl[0]} />
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <div className="d-grid gap-2">
                                    <button className={`btn btn-dark ${data._id}`} id="add" type="button" onClick={() => Add({ quantity: 1, id: data._id, url: data.imageurl[0], tittle: data.tittle, oprice: parseFloat(data.oprice), uprice: parseFloat(data.oprice), productpath: data.productpath })}><h5><b>Add To Cart</b></h5></button>
                                </div>
                                <div className="card-body">
                                    <Link href={`/Product/${data.productpath}`}>
                                        <a>
                                            <p className="text-muted text-center">Social Medial Calender</p>
                                            <h5 className="card-title text-center">{data.tittle}</h5>
                                            <h6 className="text-center text-muted"><del>{`$${data.cprice}`}</del><span className="text-danger px-2">{`$${data.oprice}`}</span></h6>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div >
                    )
                }
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

function Product_Base(props) {
    const data = props.Detailes;
    const router = useRouter();
    // const [categorylength, setCategorylength] = useState([]);

    useEffect(() => {
        $(".side").click(function () {
            $(`#sidebars`).toggle();
        });
    });

    const optionsindustry = [
        {
            label: `Social Media`,
            value: "Social-Media",
        },
        {
            label: "Beauty",
            value: "Beauty",
        },
        {
            label: "Business",
            value: "Business",
        },
        {
            label: "Cars",
            value: "Cars",
        },
        {
            label: "Climate Change",
            value: "Climate-Change",
        },
        {
            label: "Coaching",
            value: "Coaching",
        },
        {
            label: "Cryptocurrency",
            value: "Cryptocurrency",
        },
        {
            label: "DIY",
            value: "DIY",
        },
        {
            label: "Education",
            value: "Education",
        },
        {
            label: "Empowerment",
            value: "Empowerment",
        },
        {
            label: "Events",
            value: "Events",
        },
        {
            label: "Fashion",
            value: "Fashion",
        },
        {
            label: "Finance",
            value: "Finance",
        },
        {
            label: "Fitness",
            value: "Fitness",
        },
        {
            label: "Floral",
            value: "Floral",
        },
        {
            label: "Food",
            value: "Food",
        },
        {
            label: "Gadering",
            value: "Gadering",
        },
        {
            label: "Happiness",
            value: "Happiness",
        },
        {
            label: "Health",
            value: "Health",
        },
        {
            label: "Holiday",
            value: "Holiday",
        },
        {
            label: "Home",
            value: "Home",
        },
        {
            label: "Lifestyle",
            value: "Lifestyle",
        },
        {
            label: "Marketing",
            value: "Marketing",
        },
        {
            label: "Music",
            value: "Music",
        },
        {
            label: "Sports",
            value: "Sports",
        },
        {
            label: "Nutrition",
            value: "Nutrition",
        },
        {
            label: "Pets",
            value: "Pets",
        },
        {
            label: "Podcast",
            value: "Podcast",
        },
        {
            label: "Real-Estate",
            value: "Real-Estate",
        },
        {
            label: "SPA",
            value: "SPA",
        },
        {
            label: "Sports",
            value: "Sports",
        },
        {
            label: "Therapy",
            value: "Therapy",
        },
        {
            label: "Travel",
            value: "Travel",
        },
        {
            label: "Universal",
            value: "Universal",
        },
        {
            label: "Wedding",
            value: "Wedding",
        },
        {
            label: "Wellness",
            value: "Wellness",
        },
        {
            label: "Women",
            value: "Women",
        },
        {
            label: "Yoga",
            value: "Yoga",
        }
    ];

    const optionscategory = [
        {
            label: "All Products",
            value: "All",
        },
        {
            label: "Templates",
            value: "Templates",
        },
        {
            label: "Calenders",
            value: "Calenders",
        },
        {
            label: "Planners",
            value: "Books-Guides-And-Planners",
        },
        {
            label: "Books And Guides",
            value: "Books-Guides-And-Planners",
        },
        {
            label: "Email Marketing Kits",
            value: "Email-Marketing-Kits",
        },
        {
            label: "Courses",
            value: "Courses",
        },
        {
            label: "Lead Magnets",
            value: "Lead-Magnets",
        },
        {
            label: "Challenges",
            value: "Challenges",
        },
        {
            label: "Covers",
            value: "Covers",
        },
        {
            label: "Super sale",
            value: "Super-sale",
        }
    ];


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
                                    optionscategory.map((cate) =>
                                        <Link passHref href={`/Products/${cate.value}/`} className='nav-link px-0' key={1}><a><h5 className='topics'>{cate.label}</h5></a></Link>
                                    )
                                }
                            </div>
                            <h2 className='text-dark'><b>Industry</b></h2>
                            <div className="scroll-area-sm">
                                <div style={{ position: "static" }} className="ps ps--active-y">
                                    <div className="ps-content">
                                        <div className="pb-4">
                                            {
                                                optionsindustry.map((cate) =>
                                                    <Link passHref href={`/Products/${router.query.Category}/${cate.value}`} className='nav-link px-0' key={1}><a><h5 className='topics'>{cate.label}</h5></a></Link>
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
                        <Loding data={data} />
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
                                                optionscategory.map((cate) =>
                                                    <Link passHref href={`/Products/${cate.value}/`} className='nav-link px-0' key={1}><a><h5 className='topics'>{cate.label}</h5></a></Link>
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
                                            optionsindustry.map((cate) =>
                                                <Link passHref href={`/Products/${router.query.Category}/${cate.value}`} className='nav-link px-0' key={1}><a><h5 className='topics'>{cate.label}</h5></a></Link>
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