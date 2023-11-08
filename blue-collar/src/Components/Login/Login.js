import React from "react";

export default function Login() {
  const gradientStyle = {
    background: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
    height: "100vh",
  };
  return (
    

    <>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button> */}



      {/* Login Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ width: 400 }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Login
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form className="py-3 px-3">
                {/* Email input */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example1">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form2Example1"
                    className="form-control"
                    style={{border: "solid #d4d4d4 1px"}}
                  />
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form2Example2"
                    className="form-control"
                    style={{border: "solid #d4d4d4 1px"}}
                  />
                </div>
                {/* 2 column grid layout for inline styling */}
                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                    {/* Checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example31"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example31"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    {/* Simple link */}
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>
                {/* Submit button */}
                <button
                  type="button"
                  className="btn btn-dark px-5"
                  style={{ width: "100%" }}
                >
                  Sign in
                </button>
                {/* Register buttons */}
                <div className="text-center mt-3">
                  <p>
                    Not a member?{" "}
                    <a
                      href="#!"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                    >
                      Register
                    </a>
                  </p>
                  <p>or sign up with:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-3"
                  >
                    <i className="fab fa-facebook-f fa-2x" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-3"
                  >
                    <i className="fab fa-google fa-2x" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-3"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-3"
                  >
                    <i className="fab fa-github fa-2x" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Register Modal */}
      {/* Login Modal */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ width: 500, height: 600 }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title text-center fs-5"
                id="exampleModalLabel"
              >
                Register
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form className="px-3">
                {/* <form> */}
                <div className="text-center mb-1">
                  <p>Sign up with:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-3"
                  >
                    <i className="fab fa-facebook-f fa-2x" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-3"
                  >
                    <i className="fab fa-google fa-2x" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-3"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-3"
                  >
                    <i className="fab fa-github fa-2x" />
                  </button>
                </div>
                <p className="text-center mb-1">or:</p>
                {/* Name input */}
                <div className="form-outline ">
                  <label className="form-label" htmlFor="registerName">
                    Name
                  </label>
                  <input
                    type="text"
                    id="registerName"
                    className="form-control"
                    style={{border: "solid #d4d4d4 1px"}}
                  />
                </div>
                {/* Username input */}
                <div className="form-outline ">
                  <label className="form-label" htmlFor="registerUsername">
                    Username
                  </label>
                  <input
                    type="text"
                    id="registerUsername"
                    className="form-control"
                    style={{border: "solid #d4d4d4 1px"}}
                  />
                </div>
                {/* Email input */}
                <div className="form-outline ">
                  <label className="form-label" htmlFor="registerEmail">
                    Email
                  </label>
                  <input
                    type="email"
                    id="registerEmail"
                    className="form-control"
                    style={{border: "solid #d4d4d4 1px"}}
                  />
                </div>
                {/* Password input */}
                <div className="form-outline ">
                  <label className="form-label" htmlFor="registerPassword">
                    Password
                  </label>
                  <input
                    type="password"
                    id="registerPassword"
                    className="form-control"
                    style={{border: "solid #d4d4d4 1px"}}
                  />
                </div>
                {/* Repeat Password input */}
                <div className="form-outline mb-2">
                  <label
                    className="form-label"
                    htmlFor="registerRepeatPassword"
                  >
                    Repeat password
                  </label>
                  <input
                    type="password"
                    id="registerRepeatPassword"
                    className="form-control form-floating"
                    style={{border: "solid #d4d4d4 1px"}}
                  />
                </div>
                {/* Checkbox */}
                <div className="form-check d-flex justify-content-center mb-2">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="registerCheck"
                    defaultChecked=""
                    aria-describedby="registerCheckHelpText"
                  />
                  <label
                    className="form-check-label mb-1"
                    htmlFor="registerCheck"
                  >
                    I have read and agree to the terms
                  </label>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-1"
                  style={{ backgroundColor: "black", width: "100%" }}
                >
                  Sign in
                </button>
                {/* </form> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
