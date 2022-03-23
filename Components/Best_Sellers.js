import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

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

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`/api/Product?By=Category&Category=All`)
            .then((deta) => {
                setData(deta.data.Product);
            });
    }, [useRouter()]);


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
                    <Link href="/Products/All">
                        <a>
                            <h5 className="text-muted"><b>View All Products <i className="fas fa-chevron-right"></i></b></h5>
                        </a>
                    </Link>
                </div>
            </div>
            <Carousel responsive={responsive} className="py-4">
                {

                    data.map((datass) =>
                        <div key={1} className="px-3">
                            <Link href={`/Product/All/${datass.subcatname}/${datass.Product.productpath}`} >
                                <a>
                                    <div className="card card-sss d-flex align-items-center justify-content-center mx-1" >
                                        <div className="img-wrapper-s"><img src={datass.Product.image[0].url} className="d-block w-100" alt="..." /> </div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{datass.Product.tittle}</h5>
                                            <h6 className="text-center text-muted"><del><i className="fa-solid fa-indian-rupee-sign" style={{ fontSize: "0.9rem" }}></i>{`${datass.Product.cprice}`}</del><span className="text-danger px-2"><i className="fa-solid fa-indian-rupee-sign" style={{ fontSize: "0.9rem" }}></i>{`${datass.Product.oprice}`}</span></h6>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    )

                }

            </Carousel>
        </>
    );
}

export default Best_Sellers
