import Link from "next/link";

function Supersale_Image_Banner() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <Link href="/Products-By-Category/All-Products/Super-Sale">
                <a><img src="/Supersale.png" className="img-fluid " alt="/" /></a>
            </Link>
        </>
    );
}

export default Supersale_Image_Banner;
