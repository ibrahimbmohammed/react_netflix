import React from "react";
// import { navItems } from "../data/navBarItem";
// import Routes from "../routes"
// import Header from "../components/header";
import Navbar from "../components/navbar";
import Featured from "../components/featured";
import List from "../components/list";
const Layout = () => {
    // const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className="flex w-screen flex-col">
            <Navbar />
            <Featured />
            <List />
            <List />
            <List />
            <List />
            {/* <Routes /> */}
        </div>
    );
}

export default Layout;



