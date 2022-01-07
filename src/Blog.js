import React from 'react'
import {gql, useQuery} from '@apollo/client' ;
import {useParams} from 'react-router-dom';


function Blog(props) {
    const params = useParams();
    const GET_POST = gql`
query {
    post(id: ${params.id}) {
      id
      title
      body
    }
  }
`;
    const {loading, data} = useQuery(GET_POST)  
    if (loading) return <p>Loading Blog Data...Please Wait</p> 
    return (
        <div>
            <div className='text-4xl text-purple-600 font-semibold m-8 capitalize'>{data.post.title}</div>
            <div >{data.post.body}</div>
        </div>
    )
}

export default Blog
