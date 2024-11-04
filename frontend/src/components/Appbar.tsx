import { TfiWrite } from "react-icons/tfi"
import { Avatar } from "./Blogcard"
import { GrNotification } from "react-icons/gr"


export const Appbar = () => {
    return (
        <div className="px-5 py-3 flex border-b-[1px] border-slate-300 justify-between">
            <div className="text-3xl font-extrabold">
                Medium
            </div>
            <div className="flex justify-between text-xl   gap-10  font-extralight items-center">

                <button className=" flex gap-2 items-center text-slate-600 hover:text-slate-900">
                    <TfiWrite />
                    <div className="text-lg font-medium">
                        Write
                    </div>
                </button>
                <div className=" text-slate-600 hover:text-slate-900 hover:cursor-pointer">
                    <GrNotification />
                </div>
                <div className="hover:cursor-pointer">
                    <Avatar username="vishal" />
                </div>

            </div>

        </div>
    )
}
