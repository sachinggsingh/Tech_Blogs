import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <footer className="custom-footer text-center">
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline btn-floating m-1 social"
              href="https://www.facebook.com"
              role="button"
            >
              <i className="icons fa-brands fa-facebook-f fa-lg"></i>
            </a>

            <a
              className="btn btn-outline btn-floating m-1 social"
              href="https://www.twitter.com"
              role="button"
            >
              <i className="icons fa-brands fa-twitter fa-lg"></i>
            </a>

            <a
              className="btn btn-outline btn-floating m-1 social"
              href="https://www.instagram.com"
              role="button"
            >
              <i className="icons fa-brands fa-instagram fa-lg"></i>
            </a>

            <a
              className="btn btn-outline btn-floating m-1 social"
              href="https://www.linkedin.com/in/sachin-g-singh/"
              role="button"
            >
              <i className="icons fa-brands fa-linkedin-in fa-lg"></i>
            </a>

            <a
              className="btn btn-outline btn-floating m-1 social"
              href="https://github.com/sachinggsingh"
              role="button"
            >
              <i className="icons fa-brands fa-github fa-lg"></i>
            </a>
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      id="form5Example24"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form5Example24">
                      Email address
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <button className="button" type="submit  ">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
          <section className="mb-4">
            <p>
              TechTalesIndia is a dynamic blog dedicated to the latest trends
              and innovations in the world of technology. Covering a wide range
              of topics such as gadgets, software, AI, cybersecurity, and tech
              news, TechTalesIndia provides insightful articles, reviews, and
              analysis to keep readers informed and engaged. Whether you're a
              tech enthusiast, professional, or casual user, TechTalesIndia
              delivers valuable content to help you stay ahead in the
              ever-evolving tech landscape.
            </p>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <p className="text-reset fw-bold">© 2024 Copyright: TechTalesIndia</p>
        </div>
      </footer>
    </div>
  );
}
