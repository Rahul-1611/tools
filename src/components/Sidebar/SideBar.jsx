import { MdMarkEmailRead } from "react-icons/md";
import { MdQrCode2 } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function SideBar({ sidebarOpen, handleClick }) {
    return (
        <nav className={`bg-background h-screen ${sidebarOpen ? 'w-48' : 'w-16'} flex flex-col justify-between items-center transition-all cursor-pointer`}>
            <div>
                <GiHamburgerMenu size={36} className="mt-3 text-foreground" onClick={() => handleClick()} />
            </div>
            <div className="bg-secondary rounded-lg text-secondary-foreground">
                <Link to='emailValidator'>
                    <div className={`transition-all overflow-hidden h-16 ${sidebarOpen ? 'w-48' : 'w-16'}`}>
                        <MdMarkEmailRead size={36} className="m-3 text-foreground inline" />
                        <span className="align-middle">Email validator</span>
                    </div>
                </Link>
                <Link to='qrGenerator'>
                    <div className={`transition-all overflow-hidden h-16 ${sidebarOpen ? 'w-48' : 'w-16'}`}>
                        <MdQrCode2 size={36} className="m-3 text-foreground inline" />
                        <span className="align-middle">QR Generator</span>
                    </div>
                </Link>
            </div>
            <div className={`text-red-500 ${sidebarOpen ? 'visible' : 'invisible'}`}>Footer</div>
        </nav >
    )
}