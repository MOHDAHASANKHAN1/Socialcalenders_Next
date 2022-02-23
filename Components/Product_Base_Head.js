
function Product_Base_Head() {
    return (
        <>
            <div className="bg-nav py-4">
                <div className="container py-3">
                    <h1 className="text-center py-2"><b>50,000+ Design Templates</b></h1>
                    <h4 className="text-center py-2">for multiple platforms, any categories, any purposes</h4>
                    <div className="d-flex align-items-center justify-content-center py-5">
                        <div className="input-group mb-3"> <input type="text" className="form-control form-control-search input-text" placeholder="Search products...." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append"> <button className="btn  bg-light btn-lg" type="button"><i className="fa fa-search"></i></button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product_Base_Head;