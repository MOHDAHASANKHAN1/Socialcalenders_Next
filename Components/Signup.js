import Link from "next/link";
import classNames from 'classnames';
import { useForm } from "react-hook-form";
import { useRef } from "react";
import axios from "axios";
import cookie from 'js-cookie';
import { useRouter } from "next/router";

function Signup() {

    const { handleSubmit, register, formState: { errors }, watch } = useForm();

    const Password = useRef({});
    Password.current = watch("password", "");
    const Router = useRouter();

    function Submit(data) {
        axios
            .post('/api/Signup', data)
            .then((res) => {
                alert(res.data.message);
                if (res.data.message === "Successfully Register") {
                    cookie.set('Token', res.data.Token);
                    cookie.set('User_Role', res.data.role);
                    cookie.set('id', res.data.id);
                    cookie.set('name', res.data.name);
                    cookie.set('email', res.data.email);
                    cookie.set('phone', res.data.phone);
                    Router.push("/Profile");
                }
            });
    }

    return (
        <section className="bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container py-5">
                    <br />
                    <br />
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                    <form onSubmit={handleSubmit(Submit)}>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example1cg" className={classNames("form-control form-control-lg", { "is-invalid": errors.firstname }
                                            )}
                                                {...register("firstname", {
                                                    required: "Your Firstname Is Required Please Enter Firstname",
                                                    pattern: {
                                                        value: /[A-Za-z0-9]{4}/,
                                                        message: "Your Firstname Contain Minimum 4 Charecters Only letters And Numbers"
                                                    }
                                                })}
                                            />
                                            <label className="form-label" htmlFor="form3Example1cg">{errors.firstname ? errors.firstname.message : `Your Firstname`}</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example1cg" className={classNames("form-control form-control-lg", { "is-invalid": errors.lastname }
                                            )}
                                                {...register("lastname", {
                                                    required: "Your Firstname Is Required Please Enter Firstname",
                                                    pattern: {
                                                        value: /[A-Za-z0-9]{4}/,
                                                        message: "Your Firstname Contain Minimum 4 Charecters Only letters And Numbers"
                                                    }
                                                })}
                                            />
                                            <label className="form-label" htmlFor="form3Example1cg">{errors.lastname ? errors.lastname.message : `Your Lastname`}</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example3cg" className={classNames("form-control form-control-lg", { "is-invalid": errors.email }
                                            )}
                                                {...register("email", {
                                                    required: "Your Email Address Is Required Please Enter Email",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Please Enter Valid Email Address"
                                                    }
                                                })}
                                            />
                                            <label className="form-label" htmlFor="form3Example3cg">{errors.email ? errors.email.message : `Your Email`}</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" className={classNames("form-control ", { "is-invalid": errors.mobilenumber }
                                            )}
                                                {...register("mobilenumber", {
                                                    required: "Your Mobile Number Required Please Enter Mo. No.",
                                                    pattern: {
                                                        value: /[789]{1}[0-9]{9}/,
                                                        message: "Please Enter Valid Mobile Number"
                                                    }
                                                })}
                                            />
                                            <label className="form-label" htmlFor="form3Example3cg">{errors.mobilenumber ? errors.mobilenumber.message : `Your Phone No.`}</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example4cg" className={classNames("form-control form-control-lg", { "is-invalid": errors.password }
                                            )}
                                                {...register("password", {
                                                    required: "Your Password Is Required Please Enter Password",
                                                    minLength: {
                                                        value: 8,
                                                        message: "Password Must Have At Least 8 Characters"
                                                    }
                                                })}
                                            />
                                            <label className="form-label" htmlFor="form3Example4cg">{errors.password ? errors.password.message : `Your Password`}</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example4cdg" className={classNames("form-control form-control-lg", { "is-invalid": errors.cpassword }
                                            )}
                                                {...register("cpassword", {
                                                    required: "Repeat Password Is Required Please Repeat Password",
                                                    validate: value =>
                                                        value === Password.current || "Your Password Do Not Match"
                                                })}
                                            />
                                            <label className="form-label" htmlFor="form3Example4cdg">{errors.cpassword ? errors.cpassword.message : `Repeat your password`}</label>
                                        </div>

                                        <div className="form-check d-flex justify-content-center mb-5">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                value=""
                                                id="form2Example3cg"
                                                required
                                            />
                                            <label className="form-check-label" htmlFor="form2Example3g">
                                                I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link href="/Login"><a className="fw-bold text-body"><u>Login here</u></a></Link></p>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br /><br />
                </div>
            </div>
        </section>
    );
}

export default Signup;