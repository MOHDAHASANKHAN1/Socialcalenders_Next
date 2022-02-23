import Product_Base from "../../../Components/Product_Base";
import axios from "axios";

function Category_M({ Data }) {

    return (
        <>
            <Product_Base Detailes={Data} />
        </>
    );
}

export async function getServerSideProps(context) {

    const Category = context.params.Category;

    const Data = await
        axios.get(`https://socialsmediacalendar.herokuapp.com/api/Product?By=Category&Category=${Category}`);
    // axios.get(`http://localhost:3000/api/Product?By=Category&Category=${Category}`);

    if (Data.data.Category.length === 0) {
        const { res } = context
        res.writeHead(302, { Location: "/" })
        res.end()
    }

    return {
        props: {
            Data: Data.data.Category
        }
    }

}


export default Category_M;