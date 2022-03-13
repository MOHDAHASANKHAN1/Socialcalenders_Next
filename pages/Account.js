import Account_Cmp from "../Components/Account";
import { parseCookies } from 'nookies';
import Loader from '../Components/Loader';
import Router from 'next/router';
import { useState } from "react";

function Account() {

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
                    <Account_Cmp />

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

    if (!cookie.Token) {
        const { res } = ctx
        res.writeHead(302, { Location: "/Login" })
        res.end()
    }

    return {
        props: {}
    }
}

export default Account;