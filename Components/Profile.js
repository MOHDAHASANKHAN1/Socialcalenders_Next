import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

function Profile(props) {
    const [up, setUp] = useState(false);
    const Router = useRouter();
    const data = props.Detailes;

    //start user data variabel
    const [firstname, setFirstname] = useState(data.firstname);
    const [lastname, setLastname] = useState(data.lastname);
    const [email, setEmail] = useState(data.email);
    const [mobilenumber, setMobilenumber] = useState(data.phone);
    const [upid] = useState(data._id);
    //end user data variabel

    function Updateuser() {
        const data = { _id: upid, firstname: firstname, lastname: lastname, email: email, phone: mobilenumber };
        axios
            .post('/api/User', data)
            .then((res) => {
                alert(res.data.message);
                if (res.data.message === "Successfully Updated") {
                    Router.push(`/Profile`);
                }
            }
            )
    }

    return (
        <>
            {
                up ?

                    <>
                        <div className="container-fluid py-3">
                            <div className="container-fluid rounded log ">
                                <div className="row">
                                    <div className="col-md-4 border-right">
                                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="" /><span className="font-weight-bold">{firstname + " " + lastname}</span><span className="text-black-50">{email}</span><span> </span></div>
                                    </div>
                                    <div className="col-md-8 border-right">
                                        <div className="p-3 py-5">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h4 className="text-right">Profile Settings</h4>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6"><h6 className="h6s">Name</h6><input type="text" className="form-control" placeholder="first name" value={firstname} onChange={(e) => setFirstname(e.target.value)} /></div>
                                                <div className="col-md-6"><h6 className="h6s">Surname</h6><input type="text" className="form-control" value={lastname} placeholder="surname" onChange={(e) => setLastname(e.target.value)} /></div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-6"><h6 className="h6s">Email ID</h6><input type="text" className="form-control" placeholder="enter email id" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                                                <div className="col-md-6"><h6 className="h6s">Mobile Number</h6><input type="text" className="form-control" placeholder="enter email id" value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} /></div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-6"><h6 className="h6s">Country</h6><input type="text" className="form-control" placeholder="country" value="India" /></div>
                                                <div className="col-md-6"><h6 className="h6s">State/Region</h6><input type="text" className="form-control" value="UtterPradesh" placeholder="state" /></div>
                                            </div>
                                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" data-bs-toggle="modal" data-bs-target="#Update">Update Profile</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="Update" tabIndex="-1" aria-labelledby="UpdateLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title text-dark" id="UpdateLabel"><b>Update Profile</b></h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p className="text-muted"><b>Are you sure you want to update the Profile?</b></p>
                                    </div>
                                    <hr className="bg-dark" />
                                    <div className="row g-0">
                                        <div className="col-sm-6 col-6 d-flex align-items-center justify-content-start px-4 pb-4">
                                            <button type="button" className="btn btn-secondary text-dark" data-bs-dismiss="modal"><b>Cancel</b></button>
                                        </div>
                                        <div className=" col-sm-6 col-6 d-flex align-items-center justify-content-end px-4 pb-4">
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => Updateuser()}><b>Update</b></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>

                    :

                    <>
                        <div className="container-fluid py-3">
                            <div className="container-fluid rounded log ">
                                <div className="row">
                                    <div className="col-md-4 border-right">
                                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="" /><span className="font-weight-bold">{data.firstname + " " + data.lastname}</span><span className="text-black-50">{data.email}</span><span> </span></div>
                                    </div>
                                    <div className="col-md-8 border-right">
                                        <div className="p-3 py-5">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h4 className="text-right">Profile Settings</h4>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6"><h6 className="h6s">Name</h6><input type="text" className="form-control" placeholder="first name" value={data.firstname} /></div>
                                                <div className="col-md-6"><h6 className="h6s">Surname</h6><input type="text" className="form-control" value={data.lastname} placeholder="surname" /></div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-6"><h6 className="h6s">Email ID</h6><input type="text" className="form-control" placeholder="enter email id" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                                                <div className="col-md-6"><h6 className="h6s">Mobile Number</h6><input type="text" className="form-control" placeholder="enter email id" value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} /></div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-6"><h6 className="h6s">Country</h6><input type="text" className="form-control" placeholder="country" value="India" /></div>
                                                <div className="col-md-6"><h6 className="h6s">State/Region</h6><input type="text" className="form-control" value="UtterPradesh" placeholder="state" /></div>
                                            </div>
                                            <div className="mt-5 text-center"><button className="btn-success px-3 py-1" onClick={() => setUp(true)}><i className="fas fa-pen px-1"></i> Edit</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
            }
        </>
    );

}

export default Profile;