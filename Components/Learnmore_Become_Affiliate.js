import Link from "next/link";

function Learnmore_Become_Affiliate() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="row g-0 learn-more-become-affiliate-color">
                <div className="col-sm-6 d-flex align-items-center justify-content-center py-4">
                    <img src="/Learn-Become-Affiliate.png" className="img-fluid " alt="/" />
                </div>
                <div className="col-sm-6 d-flex align-items-center justify-content-center py-4">
                    <div className='px-5'>
                        <h2><b>Easy way to make money online!</b></h2><br />
                        <p>Our affiliate program is suitable especially for bloggers and social media influencers. But, even if you don’t have a large followers base, you can invite your family, friends, neighbors and even strangers!</p>
                        <br />
                        <p>You earn 35% commission for every sale you make via your referral link. There is no limit on how much you can earn!</p>
                        <br />
                        <Link href="/Affiliate">
                            <a>
                                <button type="button" className="btn btn-primary btn-lg"><b>Learn More And Become Affiliate</b></button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Learnmore_Become_Affiliate;
