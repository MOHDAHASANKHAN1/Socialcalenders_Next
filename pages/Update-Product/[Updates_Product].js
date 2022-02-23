import Update_Product_Cmp from "../../Components/Update_Product";
import { parseCookies } from 'nookies';
import axios from "axios";
import Loader from '../../Components/Loader';
import Router from 'next/router';
import { useState } from "react";

function Update_Product({ Product }) {

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
                    <Update_Product_Cmp Detailes={Product} />

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

    const Product_Path = ctx.params.Updates_Product;

    const Data = await
        axios.get(`https://socialsmediacalendar.herokuapp.com/api/Product?By=Path&Path=${Product_Path}`);
    // axios.get(`http://localhost:3000/api/Product?By=Path&Path=${Product_Path}`);

    if (Data.data.Product === null) {
        const { res } = ctx
        res.writeHead(302, { Location: "/" })
        res.end()
    }

    return {
        props: {
            Product: Data.data.Product
        }
    }

}

export default Update_Product;