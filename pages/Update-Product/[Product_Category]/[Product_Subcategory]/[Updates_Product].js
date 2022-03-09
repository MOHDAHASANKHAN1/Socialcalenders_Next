import Update_Product_Cmp from "../../../../Components/Update_Product";
import { parseCookies } from 'nookies';
import axios from "axios";
import Loader from '../../../../Components/Loader';
import Router from 'next/router';
import { useState } from "react";

function Update_Product({ Product, Casu }) {

    const Loding = () => {
        const [loading, setLoading] = useState(true);

        Router.onRouteChangeStart = url => {
            setLoading(false);
        }
        Router.onRouteChangeComplete = url => {
            setLoading(true);
        }
        if (loading) {
            return (
                <>
                    <Update_Product_Cmp Detailes={Product} Casu={Casu} />

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



    return (
        <>
            <Loding />
        </>
    );

}

export async function getServerSideProps(ctx) {

    const cookie = parseCookies(ctx);

    if (cookie.Token) {
        if (cookie.User_Role !== "Admin") {
            const { res } = ctx
            res.writeHead(302, { Location: "/" })
            res.end()
        }
    } else {
        const { res } = ctx
        res.writeHead(302, { Location: "/Login" })
        res.end()
    }

    const { Product_Category, Product_Subcategory, Updates_Product } = ctx.params;

    const Data = await
        axios.get(`${process.env.Api_Base_Url}/api/Product?By=Update&Path=${Updates_Product}&Category=${Product_Category}&SubCategory=${Product_Subcategory}`);

    if (Data.data.message !== "Found") {
        const { res } = context
        res.writeHead(302, { Location: "/" })
        res.end()
    }

    return {
        props: {
            Product: Data.data.Product,
            Casu: Data.data.Casu
        }
    }

}

export default Update_Product;