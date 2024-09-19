import { Link, Outlet } from "react-router-dom";

// TODO WILL DELETE
const randomSessionId = () => Math.floor(Math.random() * 1000);

const Layout = () => {
  return (
    <div>
      <h1>Interview Layout</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="result">result</Link>
        <Link to="bookmark">Boomark</Link>
        <Link to={`${randomSessionId()}`}>session</Link>
        <Link to="setup">setup</Link>
        <Link to="result">result</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
