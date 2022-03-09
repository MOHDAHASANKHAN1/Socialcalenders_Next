import Product_Base from "../../../Components/Product_Base";
import axios from "axios";

function Category_M({ Category, Countcat, Countsub }) {

    return (
        <>
            <Product_Base Category={Category} Countcat={Countcat} Countsub={Countsub} />
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
            Category: Data.data.Category,
            Countcat: Data.data.Countcat,
            Countsub: Data.data.Countsub
        }
    }

}


export default Category_M;