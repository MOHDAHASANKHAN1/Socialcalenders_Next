import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function Add_Product() {

    const Router = useRouter();

    const optionsindustry = [
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
    const [category, setCategory] = useState("Templates");
    const [industry, setIndustry] = useState("Social-Media");
    const [tittle, setTittle] = useState('');
    const [date, setDate] = useState(today);
    const [productaddername, setProductaddername] = useState('Mohd Ahasan Khan');
    const [oprice, setOprice] = useState('');
    const [cprice, setCprice] = useState('');
    const [productpath, setProductpath] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    //end Courses variable

    const [fileData, setFileData] = useState("");
    function getFile(e) {
        setFileData(e.target.files);
    };
    var incs = 2;
    const [upload, setUpload] = useState(false);
    const [inc, setInc] = useState(incs);

    async function Add_Products(e) {
        e.preventDefault();
        setUpload(true);
        setInterval(() => {
            incs += 7;
            setInc(incs)
        }, 1000);
        const data = new FormData();
        data.append("category", category)
        data.append("industry", industry)
        data.append("tittle", tittle)
        data.append("date", date)
        data.append("productaddername", productaddername)
        data.append("oprice", oprice)
        data.append("cprice", cprice)
        data.append("productpath", productpath)
        data.append("description", description)
        for (let i = 0; i < fileData.length; i++) {
            data.append("file" + i, fileData[i]);
        }
        axios
            .post('/api/Product', data)
            .then((res) => {
                alert(res.data.message);
                if (res.data.message === "Successfully Added") {
                    Router.push(`/Product/${res.data.productpath}`);
                    setUpload(false);
                }
            });
    }

    return (
        <>
            {
                upload ?
                    <>
                        <div className="p-4">
                            <h1 className="text-warning text-center">Please Wait Product Uploading.....</h1>
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
                                                <h4 className="mb-3 text-secondary">Add Product Detailes And Publish Product</h4>
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

                                            <div className="mb-3 col-sm-6">
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

                                            <div className="mb-3 col-sm-6">
                                                <label>Product Images<n className="text-danger">*</n></label>
                                                <input type="file" multiple value={image} className="form-control" required
                                                    onChange={(e) => {
                                                        setImage(e.target.value);
                                                        getFile(e);
                                                    }}
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
                                                        <button type="submit" className="btn btn-primary px-4 py-2 ">Add Product</button>
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

export default Add_Product;