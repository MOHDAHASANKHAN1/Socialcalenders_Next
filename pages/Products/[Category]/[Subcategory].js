import { useRouter } from 'next/router';
import Category_And_Subcategory from "../../../Components/Category_And_Subcategory";

function Subcategory_M() {
    const router = useRouter();

    const { Category, Subcategory } = router.query;

    return (
        <>
            <h1>{Category} {Subcategory}</h1>
            <Category_And_Subcategory />
        </>
    );
}

export default Subcategory_M;