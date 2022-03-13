import { useState } from "react";
import axios from "axios";

export default function Contact() {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  function Submit() {
    if (email || name || message !== '') {
      if (email === '') {
        alert("Please Enter Your Email");
      } else if (message === '') {
        alert("Please Enter Your messsage");
      } else if (name === '') {
        alert("Please Enter Your Name");
      } else {
        var format1 = /[@]+/;
        var format2 = /[.]+/;

        if (format1.test(email) && format2.test(email)) {
          const data = {
            name: name,
            email: email,
            message: message
          };

          axios
            .post("/api/Messages", data)
            .then((res) => {
              alert(res.data.message);
            });
        } else {
          alert("Please Enter A Valid Email Address")
        }
      }
    } else {
      alert("Please Enter Your Name And Email And messsage");
    }
  }

  return (
    <>
      <div className="container">
        <br />
        <h1 className="text-center"><b>About Us</b></h1>
        <h4 className="text-center"><b>Social Media Calender</b></h4>
        <br />
        <p className="text-center">Social media is undoubtedly the most important place for businesses to be. Like any media, social media is all about creating inspiring content for the audience. Content is the key when you want to grow. Unfortunately, too many companies fail to create content and implement it. There is never enough time or resources for creating valuable content.</p>
        <br />
        <p className="text-center">We created Social Media Calendar™ for you to help you get rid of content creation and focus on results instead. Founded as the first-to-market social media content library in 2019, we have grown from single template bundles to an endless collection of content for Instagram, Facebook, LinkedIn, Twitter, and Pinterest.</p>
        <br />
        <p className="text-center">Social media is a visual experience, and our dedicated team of world-className graphic designers will do their best to give you access to fresh and up-to-date social media templates that will guarantee you success.</p>
        <br />

        <h1 className="text-center"><b>Have a question?</b></h1>
        <br />
        <h6 className="text-center">Send your message to us with this from.</h6>
        <br />
      </div>
      <div className="px-3">
        <div id="bod" className=" container-fluid mb-0 my-0 mt-0 mx-0">
          <div className="contact-form">
            <h1>Contact Us</h1>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <h1 style={{ color: "#6ff" }}><b>{`let's get in touch`}</b></h1><br /><i className="fa fa-map-marker" aria-hidden="true">
                  <h6 className="size">Location: Mohanlalganj, Lucknow</h6>
                </i><br /><i className="fa email-box fa-envelope" aria-hidden="true">
                  <h6 className="size">Email: aimtahsankhan@gmail.com</h6>
                </i><br /><i className="fa fa-phone phone" aria-hidden="true">
                  <h6 className="size">Phone: +91-9918423716</h6>
                </i>
              </div>
              <div className="col-md-6">
                <form><div className="form-group">
                  <label>Name</label><input className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} /></div>
                  <div className="form-group"><label>Email</label><input className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                  <div className="form-group"><label>Massage</label><textarea className="form-control" rows="7"
                    name="disc" value={message} onChange={(e) => setMessage(e.target.value)}></textarea></div><br />
                  <div className="form-group">
                    <div className="d-grid"><button className="btn btn-primary" type="button" onClick={() => Submit()}>Send</button></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br /><br /><br /><br /><br /><br />
    </>
  );
}
