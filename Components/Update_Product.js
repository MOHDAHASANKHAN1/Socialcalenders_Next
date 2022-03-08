import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function Update_Product(props) {

    const data = props.Detailes;
    const Router = useRouter();


    const optionsindustry = [
        {
            label: props.Casu.Sub,
            value: props.Casu.Sub,
        },
        {
            label: "Social Media",
            value: "Social-Media",
        },
        {
            label: "Beauty",
            value: "Beauty",
        },
        {
            label: "Business",
            value: "Business",
        },
        {
            label: "Cars",
            value: "Cars",
        },
        {
            label: "Climate Change",
            value: "Climate-Change",
        },
        {
            label: "Coaching",
            value: "Coaching",
        },
        {
            label: "Cryptocurrency",
            value: "Cryptocurrency",
        },
        {
            label: "DIY",
            value: "DIY",
        },
        {
            label: "Education",
            value: "Education",
        },
        {
            label: "Empowerment",
            value: "Empowerment",
        },
        {
            label: "Events",
            value: "Events",
        },
        {
            label: "Fashion",
            value: "Fashion",
        },
        {
            label: "Finance",
            value: "Finance",
        },
        {
            label: "Fitness",
            value: "Fitness",
        },
        {
            label: "Floral",
            value: "Floral",
        },
        {
            label: "Food",
            value: "Food",
        },
        {
            label: "Gadering",
            value: "Gadering",
        },
        {
            label: "Happiness",
            value: "Happiness",
        },
        {
            label: "Health",
            value: "Health",
        },
        {
            label: "Holiday",
            value: "Holiday",
        },
        {
            label: "Home",
            value: "Home",
        },
        {
            label: "Lifestyle",
            value: "Lifestyle",
        },
        {
            label: "Marketing",
            value: "Marketing",
        },
        {
            label: "Music",
            value: "Music",
        },
        {
            label: "Sports",
            value: "Sports",
        },
        {
            label: "Nutrition",
            value: "Nutrition",
        },
        {
            label: "Pets",
            value: "Pets",
        },
        {
            label: "Podcast",
            value: "Podcast",
        },
        {
            label: "Real-Estate",
            value: "Real-Estate",
        },
        {
            label: "SPA",
            value: "SPA",
        },
        {
            label: "Sports",
            value: "Sports",
        },
        {
            label: "Therapy",
            value: "Therapy",
        },
        {
            label: "Travel",
            value: "Travel",
        },
        {
            label: "Universal",
            value: "Universal",
        },
        {
            label: "Wedding",
            value: "Wedding",
        },
        {
            label: "Wellness",
            value: "Wellness",
        },
        {
            label: "Women",
            value: "Women",
        },
        {
            label: "Yoga",
            value: "Yoga",
        }
    ];

    const optionscategory = [
        {
            label: props.Casu.Cat,
            value: props.Casu.Cat,
        },
        {
            label: "Templates",
            value: "Templates",
        },
        {
            label: "Calenders",
            value: "Calenders",
        },
        {
            label: "Books, Guides And Planners",
            value: "Books-Guides-And-Planners",
        },
        {
            label: "Email Marketing Kits",
            value: "Email-Marketing-Kits",
        },
        {
            label: "Courses",
            value: "Courses",
        },
        {
            label: "Lead Magnets",
            value: "Lead-Magnets",
        },
        {
            label: "Challenges",
            value: "Challenges",
        },
        {
            label: "Covers",
            value: "Covers",
        },
        {
            label: "Super sale",
            value: "Super-sale",
        }
    ];

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    //start Courses variable
    const [category, setCategory] = useState(props.Casu.Cat);
    const [industry, setIndustry] = useState(props.Casu.Sub);
    const [tittle, setTittle] = useState(data.tittle);
    const [date, setDate] = useState(data.date);
    const [productaddername, setProductaddername] = useState(data.productaddername);
    const [oprice, setOprice] = useState(data.oprice);
    const [cprice, setCprice] = useState(data.cprice);
    const [productpath, setProductpath] = useState(data.productpath);
    const [description, setDescription] = useState(data.description);
    const [image] = useState(data.image);
    const oproductpath = data.productpath;
    const oindustry = props.Casu.Sub;
    const ocategory = props.Casu.Cat;
    //end Courses variable

    var incs = 2;
    const [upload, setUpload] = useState(false);
    const [inc, setInc] = useState(incs);

    function Update_Products(e) {
        e.preventDefault();
        setUpload(true)
        setInterval(() => {
            incs += 7;
            setInc(incs)
        }, 1000);
        const data = new FormData();
        data.append("category", category)
        data.append("ocategory", ocategory)
        data.append("industry", industry)
        data.append("oindustry", oindustry)
        data.append("tittle", tittle)
        data.append("date", date)
        data.append("productaddername", productaddername)
        data.append("oprice", oprice)
        data.append("cprice", cprice)
        data.append("productpath", productpath)
        data.append("oproductpath", oproductpath)
        data.append("description", description)
        data.append("image", JSON.stringify(image))

        axios
            .put('/api/Product', data)
            .then((res) => {
                alert(res.data.message);
                if (res.data.message === "Successfully Updated") {
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
                            <h1 className="text-warning text-center">Please Wait Product Updating.....</h1>
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
                                    <form onSubmit={(e) => Update_Products(e)} method="post" className=" border p-4 bg-light shadow">
                                        <div className="row g-0">
                                            <div className="col-sm-12 d-flex justify-content-center">
                                                <h4 className="mb-3 text-secondary">Update Product Detailes And Publish Product</h4>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="mb-3 col-sm-12">
                                                <label>Product Tittle<n className="text-danger">*</n></label>
                                                <input type="text" value={tittle} className="form-control" required

                                                    placeholder="Enter Course Tittle"
                                                    onChange={((e) => {
                                                        const str = e.target.value;
                                                        const arr = str.split(" ");
                                                        for (var i = 0; i < arr.length; i++) {
                                                            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                                                        }
                                                        const str2 = arr.join(" ");
                                                        setTittle(str2);
                                                    })}
                                                />
                                            </div>

                                            <div className="mb-3 col-sm-4">
                                                <label>Publish Date<n className="text-danger">*</n></label>
                                                <input type="text" className="form-control" required
                                                    placeholder='Enter The Current Date'
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                />
                                            </div>

                                            <div className="mb-3 col-sm-4">
                                                <label>Original Price<n className="text-danger">*</n></label>
                                                <input type="text" className="form-control" required
                                                    placeholder='Enter Original Price'
                                                    value={oprice}
                                                    onChange={(e) => setOprice(e.target.value)}
                                                />
                                            </div>

                                            <div className="mb-3 col-sm-4">
                                                <label>Cut Price<n className="text-danger">*</n></label>
                                                <input type="text" className="form-control" required
                                                    placeholder='Enter Cut Price'
                                                    value={cprice}
                                                    onChange={(e) => setCprice(e.target.value)}
                                                />
                                            </div>


                                            <div className="mb-3 col-sm-8">
                                                <label>Product Adder Name<n className="text-danger">*</n></label>
                                                <input type="text" value={productaddername} className="form-control" required
                                                    placeholder="Enter Product Adder Name"

                                                    onChange={((e) => {
                                                        const str = e.target.value;
                                                        const arr = str.split(" ");
                                                        for (var i = 0; i < arr.length; i++) {
                                                            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                                                        }
                                                        const str2 = arr.join(" ");
                                                        setProductaddername(str2);
                                                    }
                                                    )}
                                                />
                                            </div>

                                            <div className="mb-3 col-sm-2">
                                                <label>Select The Category<n className="text-danger">*</n></label>
                                                <br />
                                                <select onChange={(e) => setCategory(e.target.value)}>
                                                    {optionscategory.map((option) => (
                                                        <option className="text-center" value={option.value} key={1} >{option.label}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="mb-3 col-sm-2">
                                                <label>Select The Industry<n className="text-danger">*</n></label>
                                                <br />
                                                <select onChange={(e) => setIndustry(e.target.value)}>
                                                    {optionsindustry.map((option) => (
                                                        <option className="text-center" value={option.value} key={1} >{option.label}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="mb-3 col-sm-12">
                                                <label>Product Path<n className="text-danger">*</n></label>
                                                <input type="text" value={productpath} className="form-control" required
                                                    placeholder="Enter Product Path"

                                                    onChange={((e) => {
                                                        const str = e.target.value;
                                                        const arr = str.split(" ");
                                                        for (var i = 0; i < arr.length; i++) {
                                                            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                                                        }
                                                        const str2 = arr.join(" ");
                                                        setProductpath(str2);
                                                    }
                                                    )}
                                                />
                                            </div>

                                            <div className="mb-3 col-sm-12">
                                                <label>Product Description<n className="text-danger">*</n></label>

                                                <textarea rows="15" value={description} className="form-control" required
                                                    placeholder="Enter Product Description"

                                                    onChange={((e) => {
                                                        const str = e.target.value;
                                                        const arr = str.split(" ");
                                                        for (var i = 0; i < arr.length; i++) {
                                                            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                                                        }
                                                        const str2 = arr.join(" ");
                                                        setDescription(str2);
                                                    })}>
                                                </textarea>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="row g-0">
                                                    <div className="col-sm-12   d-flex justify-content-center ie">
                                                        <button type="button" data-bs-toggle="modal" data-bs-target="#Update" className="btn btn-primary px-4 py-2 ">Update Product</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="modal fade" id="Update" tabIndex="-1" aria-labelledby="UpdateLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title text-dark" id="UpdateLabel"><b>Update Product</b></h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p className="text-muted"><b>Are you sure you want to update the selected Product?</b></p>
                                                        </div>
                                                        <hr className="bg-dark" />
                                                        <div className="row g-0">
                                                            <div className="col-sm-6 col-6 d-flex align-items-center justify-content-start px-4 pb-4">
                                                                <button type="button" className="btn btn-secondary text-dark" data-bs-dismiss="modal"><b>Cancel</b></button>
                                                            </div>
                                                            <div className=" col-sm-6 col-6 d-flex align-items-center justify-content-end px-4 pb-4">
                                                                <button type="submit" className="btn btn-danger" data-bs-dismiss="modal"><b>Update</b></button>
                                                            </div>
                                                        </div>
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

export default Update_Product;