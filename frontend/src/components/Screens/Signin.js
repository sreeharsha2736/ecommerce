import React, { useState } from "react";
import Register from "./Register";

const Signin = () => {
  const [signin, setSignin] = useState("false");
  return (
    <>
      <div className="pt-5">
        {signin == "false" ? (
          <div>
            <Register />
            <div className="row  justify-content-center">
              Already have an account,
              <a href="#" onClick={() => setSignin("true")}>
                Log in
              </a>
            </div>
          </div>
        ) : (
          <div class=" pt-5 ">
            <div class="row justify-content-center">
              <div class=" col-5 border">
                <div class=" p-4 ">
                  <h2 class=" text-center">Sign in Form</h2>
                  <div class=" py-md-4">
                    <form>
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
                    </form>
                  </div>
                  <p>
                    {" "}
                    Don't have an account,{" "}
                    <a href="#" onClick={() => setSignin("false")}>
                      sign in
                    </a>
                  </p>
                  <div class="mx-auto">
                    <button class="btn btn-primary" type="submit" name="submit">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Signin;
