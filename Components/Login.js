import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import cookie from 'js-cookie';
import { useRouter } from "next/router";

function Login() {

    const { handleSubmit, register } = useForm();
    const Router = useRouter();

    function Submit(data) {
        axios
            .post('/api/Login', data)
            .then((res) => {
                alert(res.data.message);
                if (res.data.message === "Login Successfull") {
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
        <>
            <section className="py-5 container">
                <br />
                <br />
                <br />
                <br />
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
                                alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleSubmit(Submit)}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-2 rounded-circle">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-2 rounded-circle">
                                        <i className="fab fa-twitter "></i>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-2 rounded-circle">
                                        <i className="fab fa-linkedin-in"></i>
                                    </button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" required className="form-control form-control-lg"
                                        placeholder="Enter a valid email address"
                                        {...register("email")}
                                    />
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>


                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" required className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        {...register("password")}
                                    />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">

                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">{`Don't have an account?`} <Link href="/Signup"><a
                                        className="link-danger">Register</a></Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </section>
        </>
    );
}

export default Login;