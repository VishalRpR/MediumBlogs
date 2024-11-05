
import { Blogcard } from '../components/Blogcard'
import { Appbar } from '../components/Appbar'
import { useBlogs } from '../hooks'

import { Link } from 'react-router-dom'
import { BlogSkeleton } from '../components/BlogSkeleton'



export const Blogs = () => {

    const { loading, blogs } = useBlogs();
   

    if (loading) {
        return <div>
            <Appbar username='vishal' />
            <div className="flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }
    return (
        <div>

            <Appbar username='vishal' />

            <div className='flex justify-center'>
                <div className='py-4'>
                    {blogs.map(blog => (
                        <Link to={`/blogs/${blog.id}`} key={blog.id}>
                            <Blogcard
                                title={blog.title}
                                username={blog.author.name ? blog.author.name : ""}
                                publishedDate='May 21'
                                content={blog.content}
                            />
                        </Link>)

                    )}

                </div>



            </div>
        </div >
    )
}
