import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";



export interface Blog {
    "id": number,
    "title": string,
    "content": string,
    "author": {
        "name": string
    }
}




export const useBlog = ({id}:{id:string}) => {


    const [loading, Setloading] = useState(true);
    const [oneblog, SetOneblog] = useState<Blog>();
    const token = localStorage.getItem("token")


    useEffect(() => {

        async function request() {
            const blog = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                headers: {
                    'Authorization': `${token}`
                }

            })

   
            SetOneblog(blog.data)
            Setloading(false);
        }
        request();

      
        

    }, [])



    return {
        loading, oneblog
    }


}






interface Blogs {
    id:number,
    title: string,
    content: string,
    author:{
        name:string
    }
}
export const useBlogs = () => {


    const [loading, Setloading] = useState(true);
    const [blogs, SetBlogs] = useState<Blogs[]>([]);
    const token = localStorage.getItem("token")


    useEffect(() => {

        async function request() {
            const allblogs = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                headers: {
                    'Authorization': `${token}`
                }

            })


            SetBlogs(allblogs.data)
            Setloading(false);
        }
        request();

    }, [])



    return {
        loading, blogs
    }


}