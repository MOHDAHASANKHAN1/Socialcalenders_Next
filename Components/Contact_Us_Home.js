import Link from "next/link";

function Contactus() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="row g-0 contact-color flex-column-reverse flex-sm-row">
                <div className="col-sm-6 d-flex align-items-center justify-content-center py-4">
                    <div className='px-5'>
                        <h2><b>We are happy to help you!</b></h2><br />
                        <p>Need help deciding which product is best for you? Or do you need help with your product? Contact us and we will answer you within 24 hours!</p>
                        <br />
                        <Link href="/Contact">
                            <a>
                                <button type="button" className="btn btn-primary btn-lg"><b>Contact Us</b></button>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-sm-6 d-flex align-items-center justify-content-center py-4">
                    <img src="/Contact.png" className="img-fluid " alt="/" />
                </div>
            </div>
        </>
    );
}

export default Contactus;
