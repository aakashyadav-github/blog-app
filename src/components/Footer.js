import React from 'react'

function Footer() {
    return (
        <div >
            <footer class="text-center text-white" >
                <div class="container pt-9">
                    <div class="flex justify-center mb-9">
                        <a href="#!" class="mr-9 text-gray-800">
                        <i class="fa fa-facebook-f"></i>
                        </a>
                        <a href="#!" class="mr-9 text-gray-800">
                        <i class="fa fa-twitter"></i>
                        </a>
                        <a href="#!" class="mr-9 text-gray-800">
                        <i class="fa fa-google"></i>
                        </a>
                        <a href="#!" class="mr-9 text-gray-800">
                        <i class="fa fa-instagram"></i>
                        </a>
                        <a href="#!" class="mr-9 text-gray-800">
                        <i class="fa fa-linkedin"></i>
                        </a>
                        <a href="#!" class="text-gray-800">
                        <i class="fa fa-github"></i>
                        </a>
                    </div>
                </div>

                <div class="text-center bg-teal-500 text-gray-700 p-4" >
                    © 2022 Copyright :
                    <a class="text-gray-800" href="#"> Blog App</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer
