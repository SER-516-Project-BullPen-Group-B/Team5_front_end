import { Link } from "react-router-dom";
import Home from "./Home";

function Microservice() {
    return (
        <div>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to="/">Home</Link>
          </nav>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to="/barchart">Bar Chart</Link> |{" "}
          </nav>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to="/PolarChart">Polar area chart</Link> |{" "}
          </nav>
          <Home />
        </div>
      );
}

export default Microservice;