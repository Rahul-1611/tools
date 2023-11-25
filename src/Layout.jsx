import { Outlet } from "react-router-dom";
import { useState } from "react";
import SideBar from "./components/Sidebar/SideBar";

export default function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    function handleClick() {
        setSidebarOpen((oldValue) => !oldValue);
    }
    return (
        <>
            <aside className="fixed">
                <SideBar sidebarOpen={sidebarOpen} handleClick={handleClick} />
            </aside>
            <main className={`${sidebarOpen ? 'pl-52' : 'pl-20'} p-5 bg-background h-screen`}>
                <div className="bg-secondary rounded-lg text-foreground h-3/4 flex justify-center items-center">
                    <Outlet />
                </div>
            </main>
        </>
    )
}