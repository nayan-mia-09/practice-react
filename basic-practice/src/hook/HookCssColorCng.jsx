import { useRef } from "react"


const HookCssColorCng = () => {
    const ColorRef = useRef();
    const Change = () =>{
        ColorRef.current.classList.remove("text-amber-600");
        ColorRef.current.classList.add("text-blue-600");
    }
    
  return (
    <div>
      <h1 ref={ColorRef} className="text-amber-600">Hello, This is Headline 1</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={Change}>Change Color</button>
    </div>
  )
}

export default HookCssColorCng
