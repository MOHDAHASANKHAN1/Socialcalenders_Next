import { useRouter } from 'next/router';
import Category_And_Subcategory from "../../../Components/Category_And_Subcategory";

function Category_M() {

    const router = useRouter();

    const { Category } = router.query;

    return (
        <>
            <h1>{Category}</h1>
            <Category_And_Subcategory />
        </>
    );
}

export default Category_M;