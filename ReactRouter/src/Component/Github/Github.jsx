import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [ data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/vatsal-2002')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
  return (
    <div className='text-center text-white bg-gray-600 m-4 p-4 text-3xl'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Git-Picture" width={300} />
    </div>
  )
}

export default Github

export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vatsal-2002')
    return response.json();
}
