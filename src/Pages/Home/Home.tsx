import { useState } from "react";
import Loader from "../../components/Loader/loader";

import sunny from "../../assets/sunny.gif";
import "./Home.css";


const Home = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const signout = () => {
    setLoading(true);

    setTimeout(() => {
      localStorage.removeItem("token");
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="Home">
      <img src={sunny} width={200} />
      welcome
      <div onClick={signout} className="Link-button">
        {isLoading ? <Loader /> : " sign out"}
      </div>
    </div>
  );
};

export default Home;
