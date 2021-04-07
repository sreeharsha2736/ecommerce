import React from "react";

const Register = () => {
  return (
    <>
      <div class="container pt-5">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div class="card">
              <h2 class="card-title text-center">Sign in Form</h2>
              <div class="card-body py-md-4">
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      id="confirm-password"
                      placeholder="confirm-password"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="phone"
                      class="form-control"
                      id="phone"
                      name="phone"
                      placeholder="phone"
                    />
                  </div>
                  <div class="d-flex flex-row align-items-center justify-content-between">
                    <button class="btn btn-primary" type="submit" name="submit">
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
