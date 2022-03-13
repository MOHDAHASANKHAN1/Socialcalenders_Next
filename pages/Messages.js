import Messages_Cmp from "../Components/Messages";
import { parseCookies } from 'nookies';
import axios from "axios";
import Loader from '../Components/Loader';
import Router from 'next/router';
import { useState } from "react";

function Message({ Messages }) {
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
                    <Messages_Cmp Messages={Messages} />
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

    const { User_Role } = parseCookies(ctx);

    if (User_Role !== "Admin") {
        const { res } = ctx
        res.writeHead(302, { Location: "/" })
        res.end()
    }

    const Data = await
        axios.get(`${process.env.Api_Base_Url}/api/Messages`);
    // axios.get(`http://localhost:3000/api/User?id=${id}`);

    return {
        props: {
            Messages: Data.data.data
        }
    }

}

export default Message;