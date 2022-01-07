import React , { useState}from 'react'
import InputBox from './Elements/InputBox'
import { gql, useMutation } from '@apollo/client'

function CreateBlog() {
    const [title, settitle] = useState('')
    const [body, setbody] = useState('')
    let input = {
        "title": title,
        "body" : body
    }
    const CREATE_POST = gql`
    mutation ($input: CreatePostInput!) {
        createPost(input: $input) {
          id
          title
          body
        }
      }
    `;
    const [addTodo, {loading, error }] = useMutation(CREATE_POST);
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    return (
        <div>
            <div className='text-4xl text-purple-600 font-semibold m-8 '>Create a Post</div>
            <form >
                <label className="block">
                <span class="block font-medium text-gray-700 mt-2">Title</span>
                <input type="text" class="mt-1 w-1/3 px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Enter Body" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
          <span class="block font-medium text-gray-700 mt-2">Description</span>
            <textarea type="text" class="resize mt-1 w-1/3 px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Enter Description" value={body} onChange={(e)=>{setbody(e.target.value)}}/> 
                </label>
            </form>
            <button className="mt-4 bg-teal-500 hover:bg-teal-600 rounded-full p-2 text-white" 
            onClick={e => {
                e.preventDefault();
                addTodo({ variables: {input} });
              }}>
                Save changes
            </button>
        </div>
    )
}

export default CreateBlog
