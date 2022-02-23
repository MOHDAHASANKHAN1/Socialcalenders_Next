import Profile_Cmp from "../Components/Profile";
import { parseCookies } from 'nookies';
import axios from "axios";
import Loader from '../Components/Loader';
import Router from 'next/router';
import { useState } from "react";

function Profile({ Profile_Detailes }) {

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
                    <Profile_Cmp Detailes={Profile_Detailes} />
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

    const { id } = parseCookies(ctx);

    if (!id) {
        const { res } = ctx
        res.writeHead(302, { Location: "/Login" })
        res.end()
    }

    const Data = await
        axios.get(`https://socialsmediacalendar.herokuapp.com/api/User?id=${id}`);
    // axios.get(`http://localhost:3000/api/User?id=${id}`);

    return {
        props: {
            Profile_Detailes: Data.data.data
        }
    }

}

export default Profile;