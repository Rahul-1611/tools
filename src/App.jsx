import { useState } from "react";
import SideBar from "./components/Sidebar/SideBar"
export default function App() {
	const [sidebarOpen, setSidebarOpen] = useState(true);
	function handleClick() {
		setSidebarOpen((oldValue) => !oldValue);
	}
	return (
		<div>
			<aside className="fixed">
				<SideBar sidebarOpen={sidebarOpen} handleClick={handleClick} />
			</aside>
			<main>
				{/* <Main /> */}
			</main>
		</div>
	)
}

