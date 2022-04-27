import React from "react";

const About = () => {
  return (
    <div>
      <div className="card bg-dark text-white border-0 mb-5">
        <img
          src="/assets/about.jpg"
          className="card-img img-about"
          alt="background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container mx-auto">
            <h5 className="card-title mb-0 text-center">About us</h5>
            <p className="card-text lead fs-2 fw-bold text-center">ABOUT US</p>
          </div>
        </div>
      </div>

      <section class="section about-page">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <h2 class="title-color title-about fw-bold">Have it your way</h2>
            </div>
            <div class="col-lg-8">
              <p className="title-about">
                CoolMake is a E-commerce project about a clothes shopping for
                men and women. This project is built by the members of 4th team.
              </p>
              <img src="images/about/sign.png" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section class="section team">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-title text-center">
                <h2 class="mb-4 fw-bold title-about">Our team</h2>
                <div class="divider mx-auto my-4"></div>
                <p className="title-about mb-3">
                  The following is 5 members in our team.
                </p>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-2 col-md-6 col-sm-6">
              <div class="team-block mb-5 mb-lg-0">
                <img src="/assets/person.png" alt="" class="img-fluid w-100" />

                <div class="content text-center">
                  <h4 class="mt-4 mb-0 fs-6 fw-bold">
                    <a href="doctor-single.html">Trần Trung Hiếu</a>
                  </h4>
                  <p>Front-end dev</p>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 col-sm-6">
              <div class="team-block mb-5 mb-lg-0">
                <img src="/assets/person.png" alt="" class="img-fluid w-100" />

                <div class="content text-center">
                  <h4 class="mt-4 mb-0 fs-6 fw-bold">
                    <a href="doctor-single.html">Trần Quang Vịnh</a>
                  </h4>
                  <p>Back-end dev</p>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 col-sm-6">
              <div class="team-block mb-5 mb-lg-0">
                <img src="/assets/person.png" alt="" class="img-fluid w-100" />

                <div class="content text-center">
                  <h4 class="mt-4 mb-0 fs-6 fw-bold">
                    <a href="doctor-single.html">Lê Đình Toản</a>
                  </h4>
                  <p>Back-end dev</p>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-6">
              <div class="team-block">
                <img src="/assets/person.png" alt="" class="img-fluid w-100" />

                <div class="content text-center">
                  <h4 class="mt-4 mb-0 fs-6 fw-bold">
                    <a href="doctor-single.html">Nguyễn Sỹ Đạt</a>
                  </h4>
                  <p>Back-end dev</p>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-6">
              <div class="team-block">
                <img src="/assets/person.png" alt="" class="img-fluid w-100" />

                <div class="content text-center">
                  <h4 class="mt-4 mb-0 fs-6 fw-bold">
                    <a href="doctor-single.html">Bùi Đình Quang</a>
                  </h4>
                  <p>Front-end dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
