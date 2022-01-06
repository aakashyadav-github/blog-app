import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
   
    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link to={'/'} ><i className="fa fa-blog"></i>
                    <span className="font-semibold text-xl tracking-tight">Blog App</span>
                    </Link>
                </div>
                <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
                    <div className="text-sm md:flex-grow">
                    </div>
                    <div>
                        <Link to={'/'} className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
                            Home
                        </Link>
                        <Link to={'/create'} className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
                            Create a Post
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
