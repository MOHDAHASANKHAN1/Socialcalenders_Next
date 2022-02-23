import Product_Base from "../../../Components/Product_Base";
import axios from "axios";

function Subcategory_M({ Data }) {

    return (
        <>
            <Product_Base Detailes={Data} />
        </>
    );
}


export async function getServerSideProps(context) {

    const { Category, Subcategory } = context.params;

    const Data = await
        axios.get(`https://socialsmediacalendar.herokuapp.com/api/Product?By=Subcategory&Category=${Category}&SubCategory=${Subcategory}`);
    // axios.get(`http://localhost:3000/api/Product?By=Subcategory&Category=${Category}&SubCategory=${Subcategory}`);

    if (Data.data.Subcategory.length === 0) {
        const { res } = context
        res.writeHead(302, { Location: "/" })
        res.end()
    }

    return {
        props: {
            Data: Data.data.Subcategory
        }
    }

}


export default Subcategory_M;