import React from 'react'
import { Link } from 'react-router-dom';

function BlogCard(props) {
    return (
        <div className='mb-auto'>
            <div
                className="relative h-48 bg-gray-900 block p-4 text-ellipsis overflow-hidden border border-gray-100 rounded-lg m-4">
                <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                <div className="justify-between sm:flex">
                    <div>
                        <h5 className="font-bold text-gray-100 capitalize">{props.data.title}</h5>
                        <Link  to={{pathname: `/blog/${props.data.id}`, query: {data:props.data}}} className="text-xs bg-teal-500 font-medium rounded-full p-1">Open Post</Link> 
                        <p className="mt-1 text-xs font-medium text-gray-400 capitalize">{props.data.body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
