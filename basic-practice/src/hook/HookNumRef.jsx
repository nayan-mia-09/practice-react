import { useRef } from "react"


const HookNumRef = () => {
    const Number = useRef(0);
    const Change = () =>{
        Number.current++;
        console.log(Number.current)
    }
  return (
    <div>
        
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" onClick={Change}>Click</button>
    </div>
  )
}

export default HookNumRef
