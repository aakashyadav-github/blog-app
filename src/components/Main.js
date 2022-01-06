import React , {useState} from 'react'
import BlogCard from './BlogCard';
import Hero from './Hero';
import {gql, useQuery} from '@apollo/client' ;

const ALL_POST_QUERY = gql`
    query (
      $options: PageQueryOptions
      ) {
        posts(options: $options) {
          data {
            id
            title
            body
          }
          meta {
            totalCount
          }
        }
      }
     `;

function Main() {
    const {loading, data} = useQuery(ALL_POST_QUERY)  
    if (loading) return <p>Loading Blogs Data...Please Wait</p> 
    const userData = data.posts.data;
    return (
        <div>
            <Hero/>
            <div class="grid lg:grid-cols-4 md:grid-cols-3">
            {userData.map((d)=>{
                return (<BlogCard data={d}/>)
            })}
            </div>
        </div>
    )
}

export default Main
