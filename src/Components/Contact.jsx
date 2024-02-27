import React, { useState } from "react";

export default function Contact() {
  const [name, setname] = useState();
  const [phone, setphone] = useState();
  const [email, setemail] = useState();
  const [message, setmessage] = useState();

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const formsubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(data));
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formsubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  FullName
                </label>
                <input
                  name="name"
                  value={name}
                  onChange={inputEvent}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={phone}
                  onChange={inputEvent}
                  type="phone"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  value={email}
                  onChange={inputEvent}
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={inputEvent}
                  id="msg"
                  className="form-control"
                  rows="3"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
