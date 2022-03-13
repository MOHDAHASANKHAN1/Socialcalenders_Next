import Signup_Cmp from "../Components/Signup";
import Loader from '../Components/Loader';
import Router from 'next/router';
import { useState } from "react";

function Signup() {
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
                    <Signup_Cmp />

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

export default Signup;