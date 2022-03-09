import Add_Product_Image_Cmp from "../../../../../Components/Add_Product_Image";
import { parseCookies } from 'nookies';
import axios from "axios";
import Loader from '../../../../../Components/Loader';
import Router from 'next/router';
import { useState } from "react";

function Add_Product({ Image_Update_Data }) {

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
                    <Add_Product_Image_Cmp Image_Update_Data={Image_Update_Data} />

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

    const { Product_Category, Product_Subcategory, Path } = ctx.params;

    const Data = await
        axios.get(`${process.env.Api_Base_Url}/api/Product?By=Addimg&Path=${Path}&Category=${Product_Category}&SubCategory=${Product_Subcategory}`);

    if (Data.data.message !== "Found") {
        const { res } = context
        res.writeHead(302, { Location: "/" })
        res.end()
    }
    return {
        props: {
            Image_Update_Data: Data.data.Image_Update_Data
        }
    }

}

export default Add_Product;