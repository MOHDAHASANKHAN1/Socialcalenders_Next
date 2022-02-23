import Products_Details_Cmp from "../../Components/Products_Details";
import axios from "axios";

function Products_Details_M({ Product }) {

    return (
        <>
            <Products_Details_Cmp Detailes={Product} />
        </>
    );

}

export async function getServerSideProps(context) {

    const Product_Path = context.params.Products_Details;

    const Data = await
        axios.get(`https://socialsmediacalendar.herokuapp.com/api/Product?By=Path&Path=${Product_Path}`);
    // axios.get(`http://localhost:3000/api/Product?By=Path&Path=${Product_Path}`);

    if (Data.data.Product === null) {
        const { res } = context
        res.writeHead(302, { Location: "/" })
        res.end()
    }

    return {
        props: {
            Product: Data.data.Product
        }
    }

}

export default Products_Details_M;