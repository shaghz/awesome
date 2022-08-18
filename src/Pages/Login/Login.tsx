import { useState } from "react";
import { useNavigate } from "react-router-dom";

import profile from "../../assets/profile.gif";
import Loader from "../../components/Loader/loader";

import "./Login.css";

const Login = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit = () => {
    setLoading(true);

    let formdata = new FormData();
    formdata.append("email", "sh@email.com");
    formdata.append("password", "nilson");

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch("http://localhost:8000/auth/register", requestOptions)
      .then((response) => response.text())
      .then((result) =>
        setTimeout(() => {
          const { access_token: accessToken } = JSON.parse(result);
          login(accessToken);
        }, 2000)
      )
      .catch((error) => console.log("error", error));
  };

  const login = (accessToken: string) => {
    setLoading(false);
    localStorage.setItem("token", accessToken);
    navigate("/");
  };

  return (
    <div className="Login">
      <div>
        I am login page that helps you demonstrate what is going to happen when
        you login
      </div>
      <img src={profile} width={200} />
      <button
        className={`${isLoading && "loading"} Login-button`}
        onClick={onSubmit}
      >
        {isLoading ? <Loader /> : "login with bank id"}
      </button>
    </div>
  );
};

export default Login;
