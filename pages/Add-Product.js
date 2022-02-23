import Add_Product_Cmp from "../Components/Add_Product";
import { parseCookies } from 'nookies';
import Loader from '../Components/Loader';
import Router from 'next/router';
import { useState } from "react";

function Add_Product() {

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
                    <Add_Product_Cmp />

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

    if (cookie.User_Role) {
        if (cookie.User_Role === 'User') {
            const { res } = ctx
            res.writeHead(302, { Location: "/" })
            res.end()
        }
    } else {
        const { res } = ctx
        res.writeHead(302, { Location: "/Login" })
        res.end()
    }
    return {
        props: {}
    }
}

export default Add_Product;