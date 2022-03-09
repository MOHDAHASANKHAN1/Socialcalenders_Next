import Products_Details_Cmp from "../../../../Components/Products_Details";
import axios from "axios";

function Products_Details_M({ Product, Casu }) {

    return (
        <>
            <Products_Details_Cmp Detailes={Product} Casu={Casu} />
        </>
    );

}

export async function getServerSideProps(context) {

    const { Product_Category, Product_Subcategory, Products_Details } = context.params;

    const Data = await
        axios.get(`${process.env.Api_Base_Url}/api/Product?By=Path&Path=${Products_Details}&Category=${Product_Category}&SubCategory=${Product_Subcategory}`);

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

export default Products_Details_M;