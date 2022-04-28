import React from "react";
const Contact = () => {
  const handleSubmit = (event) => {
      console.log(event);
  }

  return (
    <div className="container contact-form border border-primary">
      <div className="contact-image">
        <img
          src="https://image.ibb.co/kUagtU/rocket_contact.png"
          alt="rocket_contact"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Contact to us for details</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
            <label for="txtName" className="label h5">Your name</label>
              <input
                type="text"
                name="txtName"
                className="form-control"
                placeholder="Input your name"
              />
            </div>
            <div className="form-group mb-3">
              <label for="txtEmail" className="label h5">Your email</label>
              <input
                type="text"
                name="txtEmail"
                className="form-control"
                placeholder="Input your email"
              />
            </div>
            <div className="form-group mb-3">
              <label for="txtPhone" className="label h5">Your phone number</label>
              <input
                type="text"
                name="txtPhone"
                className="form-control"
                placeholder="Input your phone number"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                name="btnSubmit"
                className="btnContact"
                value="Send Message"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="label h5">Your message</label>
              <textarea
                name="txtMsg"
                className="form-control"
                placeholder="Content"
                style={{ width: "100%", height: "150px" }}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
