import React from 'react'
import { Blogcard } from '../components/Blogcard'
import { Appbar } from '../components/Appbar'

export const Blogs = () => {
    return (
        <div>

            <Appbar/>
            <div className='flex justify-center'>
               <div className='py-4'>
                <Blogcard
                    title="Words and Phrases that Make it Obvious You Used ChatGPT"
                    username='Vishal Rpr'
                    publishedDate='May 21'
                    content='A Financial Review article asked, “Is this one word the shortcut to detecting AI-written work?”'
                />
                <Blogcard
                    title="Words and Phrases that Make it Obvious You Used ChatGPT"
                    username='Vishal Rpr'
                    publishedDate='May 21'
                    content='A Financial Review article asked, “Is this one word the shortcut to detecting AI-written work?”'
                />
                </div>


            </div>
        </div>
    )
}
