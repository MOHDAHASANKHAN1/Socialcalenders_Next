import Product_Base from "../../../Components/Product_Base";
import axios from "axios";

function Category_M({ Product, Countcat, Countsub, Catname, Subcatname }) {

    return (
        <>
            <Product_Base Product={Product} Countcat={Countcat} Countsub={Countsub} Catname={Catname} Subcatname={Subcatname} />
        </>
    );
}

export async function getServerSideProps(context) {

    const Category = context.params.Category;

    const Data = await
        axios.get(`${process.env.Api_Base_Url}/api/Product?By=Category&Category=${Category}`);

    if (Data.data.message !== "Found") {
        const { res } = context
        res.writeHead(302, { Location: "/" })
        res.end()
    }
    return {
        props: {
            Product: Data.data.Product,
            Countcat: Data.data.Countcat,
            Countsub: Data.data.Countsub,
            Catname: Data.data.catname,
            Subcatname: Data.data.subcatname,
        }
    }

}


export default Category_M;