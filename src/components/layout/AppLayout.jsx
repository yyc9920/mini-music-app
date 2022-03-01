import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import PlayBar from "../playbar/PlayBar";

const AppLayout = () => {
    return <div style={{
            padding: '50px 0px 0px 370px',
            minHeight: "100%",
            position: "relative",
        }}
        className="applayout"
    >
        <Sidebar />
        <Outlet />
        <PlayBar />
    </div>;
};

export default AppLayout;
