import { useState } from "react";
import SideBar from "./components/Sidebar/SideBar";
import Layout from "./Layout";
export default function App() {

	return (
		<>

			<main className={`${sidebarOpen ? 'pl-52' : 'pl-20'} p-5 bg-background h-screen`}>
				<Layout />
			</main>
		</>
	)
}

