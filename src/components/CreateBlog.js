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
    mutation (
        $input: CreatePostInput!
      ) {
        createPost(input: $input) {
          id
          title
          body
        }
      }
    `;
    const [addTodo, { data, loading, error }] = useMutation(CREATE_POST);
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    return (
        <div>
            <div className='text-4xl text-purple-600 font-semibold m-8 '>Create a Post</div>
            <form >
                <label class="block">
                    <InputBox lableText="Title" placeHolder="Enter Title" ref={node=> {settitle(node)}}/>
                    <InputBox lableText="Description" placeHolder="Enter Description" ref={node=> {setbody(node)}}/>
                </label>
            </form>

            <button class="mt-4 bg-teal-500 hover:bg-teal-600 rounded-full p-2 text-white" 
            onClick={e => {
                e.preventDefault();
                addTodo({ variables: { title: input.title , body: input.body} });
                input.title = '';
              }}>
                Save changes
            </button>
        </div>
    )
}

export default CreateBlog
