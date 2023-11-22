import EmailValidation from "emailvalid";
export default function EValid() {
    const ev = new EmailValidation({ allowFreemail: true });
    const handleSubmit = (e) => {
        e.preventDefault();
        let email = e.target[0].value;
        const result = ev.check(email);
        console.log(result);
    }
    return (
        <div className="w-3/5">
            <form onSubmit={handleSubmit}>
                <div className="border border-orange-900 rounded-full bg-background min-w-[15rem] h-12 p-1 flex justify-between align-center text-primary ">
                    <input type="email" name="email" placeholder="example@xyz.com" className="bg-transparent focus:outline-none autofill:bg-background w-full mx-3 leading-4 placeholder:text-muted-foreground" />
                    <button type="submit" className="text-xs hover:text-sm p-0 rounded-full w-20 bg-orange-700">Submit</button>
                </div>
            </form>
        </div>
    )
}