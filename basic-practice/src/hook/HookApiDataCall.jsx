import { useRef } from "react"



const HookApiDataCall = () => {
    const ApiData = useRef(null);
    const Ptag = useRef(null);
    const CallApi =async () =>{
        const response = await fetch('https://dummyjson.com/products')
        ApiData.current = await response.json();
    }
    const ShowData = () =>{
        Ptag.current.innerHTML = JSON.stringify(ApiData.current)
    }
  return (
    <div>
        <p ref={Ptag}></p>
      <button onClick={CallApi}>Call Api</button>
      <br />
      <button onClick={ShowData}>Show Data</button>
    </div>
  )
}

export default HookApiDataCall
