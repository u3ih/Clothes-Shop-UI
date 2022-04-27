import React from "react";
const Contact = () => {
  return (
    <div className="container contact-form border border-primary">
      <div className="contact-image">
        <img
          src="https://image.ibb.co/kUagtU/rocket_contact.png"
          alt="rocket_contact"
        />
      </div>
      <form method="post">
        <h3>Contact to us for details</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="text"
                name="txtName"
                className="form-control"
                placeholder="Your Name *"
                value=""
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                name="txtEmail"
                className="form-control"
                placeholder="Your Email *"
                value=""
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                name="txtPhone"
                className="form-control"
                placeholder="Your Phone Number *"
                value=""
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
              <textarea
                name="txtMsg"
                className="form-control"
                placeholder="Your Message *"
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
