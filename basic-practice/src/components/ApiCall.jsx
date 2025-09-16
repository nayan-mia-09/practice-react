// import { useEffect, useState } from "react"

import { useEffect, useState } from "react"


// const ApiCall = () => {
//     const [data, setData] = useState();
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(response => response.json())
//         .then(json=> setData(json))
//     })
//   return (
//     <div>
//       {JSON.stringify(data)}
//     </div>
//   )
// }

// export default ApiCall



const ApiCall = () => {
  const [data, setData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
 
  useEffect(()=>{
    (async()=>{
      let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      let result = await res.json();
      setData(result)

    })()
  })
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default ApiCall
