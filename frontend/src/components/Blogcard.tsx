

interface BlogCardProps {
    username: string,
    title: string,
    content: string,
    publishedDate: string
}

export const Blogcard = ({ username, title, content, publishedDate }: BlogCardProps) => {
    return (
        <div className="border-b-[1px] border-slate-300 p-3 max-w-xl hover:cursor-pointer">
            <div className="flex items-center gap-3 font-semibold">
               <Avatar name={username}/> {username}
            </div>
            <div className="text-3xl font-extrabold mt-4">
                {title}
            </div>
            <div className="font-semibold text-slate-500">
                {content.slice(0,100)}...
            </div>
            <div className="py-5 font-bold text-slate-500">
                {publishedDate}
            </div>

        </div>
    )
}



export const Avatar=({name}:{name:string})=>{
    return(<div>
        <div className={`p-4 relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className="font-normal  text-white text-gray-600">{name[0]}</span>
        </div>
    </div>)
}
