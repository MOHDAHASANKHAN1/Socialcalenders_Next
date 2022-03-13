import Contactus from "../Components/Contact";
import Loader from '../Components/Loader';
import Router from 'next/router';
import { useState } from "react";

function Contact() {
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
                    <Contactus />

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

export default Contact;
