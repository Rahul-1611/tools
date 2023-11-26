import { PiXCircle } from "react-icons/pi";
import { LiaCheckCircle } from "react-icons/lia";
export const Result = ({ email, valid, freemail, disposable, typo }) => {
    return (
        <div className="text-primary border-4 border-orange-700 rounded-2xl mt-5">
            <p className="text-center py-3 border-b-4 border-orange-700"> '{email}' is a
                {valid ? <span className="text-green-900 bg-green-500 px-2 py-1 rounded-md mx-1">Valid</span>
                    : <span className="text-red-700 bg-red-300 px-2 py-1 rounded-md mx-1">Invalid</span>}
                email.
            </p>
            <div className="grid grid-flow-col justify-stretch">
                <div className="flex flex-col items-center py-3"><Icon input={freemail} />Freemail</div>
                <div className="flex flex-col border-x-4 border-orange-700 items-center py-3"><Icon input={disposable} />Disposable</div>
                <div className="flex flex-col items-center py-3"><Icon input={typo} />Typo</div>
            </div>
        </div>
    )
}
const Icon = ({ input }) => {
    return (
        <>
            {input ? <LiaCheckCircle size={80} className="text-green-600" /> :
                <PiXCircle size={80} className="text-red-700" />}
        </>
    )
}
export default Result;