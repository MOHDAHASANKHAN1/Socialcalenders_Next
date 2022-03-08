import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function Add_Product_Image({ Image_Update_Data }) {

    const Router = useRouter();
    //start Courses variable
    const [category] = useState(Image_Update_Data.Cat);
    const [industry] = useState(Image_Update_Data.Sub);
    const [productpath] = useState(Image_Update_Data.Path);
    const [image, setImage] = useState('');
    //end Courses variable

    const [fileData, setFileData] = useState("");
    function getFile(e) {
        setFileData(e.target.files[0]);
    };

    var incs = 2;
    const [upload, setUpload] = useState(false);
    const [inc, setInc] = useState(incs);

    function Add_Products(e) {
        e.preventDefault();
        setUpload(true)
        setInterval(() => {
            incs += 7;
            setInc(incs)
        }, 1000);
        const data = new FormData();
        data.append("By", "Onlyimage")
        data.append("category", category)
        data.append("industry", industry)
        data.append("productpath", productpath)
        data.append("file", fileData);

        axios
            .post('/api/Product', data)
            .then((res) => {
                alert(res.data.message);
                if (res.data.message === "Successfully Added") {
                    Router.push(`/Product/${res.data.Red.cat}/${res.data.Red.sub}/${res.data.Red.path}`);
                    setUpload(false);
                }
            }
            )

    }

    return (
        <>
            {
                upload ?
                    <>
                        <div className="p-4">
                            <h1 className="text-warning text-center">Please Wait Image Adding.....</h1>
                            <div className="pt-4">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${inc}%` }}></div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${inc}%` }}></div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${inc}%` }}></div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${inc}%` }}></div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${inc}%` }}></div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${inc}%` }}></div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${inc}%` }}></div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${inc}%` }}></div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${inc}%` }}></div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${inc}%` }}></div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${inc}%` }}></div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${inc}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </>
                    :

                    <>
                        <div className="container-fluid py-2">
                            <div className="row g-0">
                                <div className="col-sm-12">
                                    <form onSubmit={(e) => Add_Products(e)} method="post" className=" border p-4 bg-light shadow">
                                        <div className="row g-0">
                                            <div className="col-sm-12 d-flex justify-content-center">
                                                <h4 className="mb-3 text-secondary">Add Product Image And Publish Product</h4>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="mb-3 col-sm-12">
                                                <label>Product Image<n className="text-danger">*</n></label>
                                                <input type="file" value={image} className="form-control" required
                                                    onChange={(e) => {
                                                        setImage(e.target.value);
                                                        getFile(e);
                                                    }}
                                                />
                                            </div>

                                            <div className="col-md-12">
                                                <div className="row g-0">
                                                    <div className="col-sm-12   d-flex justify-content-center ie">
                                                        <button type="submit" className="btn btn-primary px-4 py-2 ">Add Image</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    );
}

export default Add_Product_Image;