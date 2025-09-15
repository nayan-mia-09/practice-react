import { useEffect, useState } from "react"


const ApiCall = () => {
    const [data, setData] = useState();
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json=> setData(json))
    })
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default ApiCall
