import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";

import { Link } from "react-router-dom";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            reiciendis excepturi praesentium eos sequi officia placeat nisi
            soluta, asperiores alias consequatur velit. Officia labore error, et
            atque ex distinctio ab.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login/Demo User
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
