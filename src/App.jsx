import { useState } from "react";
import SideBar from "./components/Sidebar/SideBar";
import Main from "./components/Main/Main";
export default function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	function handleClick() {
		setSidebarOpen((oldValue) => !oldValue);
	}
	return (
		<div>
			<aside className="fixed">
				<SideBar sidebarOpen={sidebarOpen} handleClick={handleClick} />
			</aside>
			<main className={`${sidebarOpen ? 'pl-52' : 'pl-20'} p-5 bg-background h-screen`}>
				<Main />
			</main>
		</div>
	)
}

