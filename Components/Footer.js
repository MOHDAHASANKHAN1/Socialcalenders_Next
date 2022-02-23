
function Footer() {
  return (
    <>

      <footer
        className="text-center text-lg-start text-white pb-0 mb-0"
        style={{ backgroundColor: "#1c2331" }}
      >

        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#6351ce" }}
        >

          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>



          <div>
            <a href="" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>

        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold">Social Media Calender</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto footers"

                />
                <p>We create social media content for influencers all over the world. Over 100 000+ influencers around the globe, trust our content calendars and plans.</p>
              </div>



              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto footers"

                />
                <p>
                  <a href="#!" className="text-white">Templates</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Emails</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Books</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Courses</a>
                </p>
              </div>



              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold">Menu</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto footers"

                />
                <p>
                  <a href="#!" className="text-white">Home</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Blog</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Affiliate</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Contact Us</a>
                </p>
              </div>



              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto footers"

                />
                <p><i className="fas fa-home mr-3"></i> Utter Pradesh, Mohanlal Ganj, India</p>
                <p><i className="fas fa-envelope mr-3"></i> aimtahsankhan@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 91 99 18 42 37 16</p>
                <p><i className="fas fa-print mr-3"></i> + 91 99 18 42 37 16</p>
              </div>

            </div>

          </div>
        </section>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright :
          <a className="text-danger px-2" href="https://wa.me/+919918423716"
          >Mohd Ahasan Khan</a
          >
        </div>

      </footer>

    </>
  );
}

export default Footer;
