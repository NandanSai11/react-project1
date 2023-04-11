import React, { useState } from "react";
import Home from "./Home";
//import styles from "../styles/loginpage.module.css";
//import Home from "../pages/Home";
//import { useRouter } from "next/router";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  // const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "test" && password == "12345") {
      setLoggedIn(true);
      // router.push("/Home");
    }
    // if (loggedIn) {
    // }
  };

  return (
    <div>
      {loggedIn ? (
        <Home />
      ) : (
        <>
          <h1 style={{ textAlign: "center " }} className="mt-5">
            LogIn
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="container">
              <div className="row mt-3 ">
                <div className="col-4"></div>
                <div className="col-4">
                  <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label ">
                      <h6>UserName</h6>
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="form-control"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3 ">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      <h6> Password</h6>
                    </label>
                    <input
                      className="form-control "
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-dark w-100">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default LoginPage;
