import EmailValidation from "emailvalid";
import { useState } from "react";
import Result from "./Result";
export default function EValid() {
    const ev = new EmailValidation();
    const [ans, setAns] = useState({
        email: null,
        show: false,
        valid: null,
        freemail: null,
        disposable: null,
        typo: null
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        let email = e.target[0].value;
        const result = ev.check(email);
        let isValid = false;
        if (result.valid) {
            isValid = true;
        } else if (result.errors.length == 1) {
            if (result.errors.includes('freemail')) isValid = true;
        }
        setAns({
            email: result.email,
            show: true,
            valid: isValid,
            disposable: result.errors.includes('disposable'),
            freemail: result.errors.includes('freemail'),
            typo: result.typo !== null
        })
    }
    return (
        <div className="w-3/5">
            <form onSubmit={handleSubmit}>
                <div className="border border-orange-900 rounded-full bg-background min-w-[15rem] h-12 p-1 flex justify-between items-center text-primary">
                    <input maxLength='80' type="text" name="email" placeholder="example@xyz.com" className="bg-transparent focus:outline-none autofill:bg-background w-full mx-3 leading-4 placeholder:text-muted-foreground" />
                    <button type="submit" className="text-xs hover:text-sm h-full rounded-full w-24 bg-orange-700">Submit</button>
                </div>
            </form>
            <div className={`duration-500 ${ans.show ? 'opacity-100' : 'opacity-0'}`}>
                <Result
                    email={ans.email}
                    valid={ans.valid}
                    freemail={ans.freemail}
                    disposable={ans.disposable}
                    typo={ans.typo} />
            </div>
        </div>
    )
}