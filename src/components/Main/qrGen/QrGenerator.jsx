import { useState } from "react";
import { FiDownload } from "react-icons/fi";
export default function QrGenerator() {
    const [qr, setQR] = useState(null);
    function handleSubmit(e) {
        e.preventDefault();
        const d = e.target[0].value;
        fetch(`https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${d}`)
            .then(response => response.blob())
            .then(blob => setQR(URL.createObjectURL(blob)))
            .catch(e => console.error('Fetched error:', e));
    }
    return (
        <div className="border-2 border-orange-800 p-6 rounded-xl bg-primary-foreground">
            <p>Paste a url or enter text to create QR code</p>
            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="relative box-border">
                    <input maxLength='2000' type="text" placeholder="Url" className="text-primary bg-background w-full effect" />
                    <span className="focus-border"></span>
                </div>
                <button className="block bg-orange-600 w-full rounded-full text-xl py-1 my-3">Generate</button>
            </form>
            <hr className="mt-4" />
            <div className="border-2 border-secondary mt-5 w-full h-56 grid place-content-center">{qr ? <img src={qr} alt="Fetched Image" /> : "QR will appear here"}</div>
            <a href={qr} className="text-center mx-auto h-10 block bg-secondary border w-4/5 text-xl py-1 my-3 hover:bg-muted-foreground hover:text-black hover:border-none" download="QR.png">Download<FiDownload size={22} className="inline align-text-top mx-2" /></a>
        </div >
    )
}