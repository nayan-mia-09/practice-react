import { useRef } from "react"


const HookRef = () => {
    const HookRef = useRef()
    const Change = () =>{
        // HookRef.current.innerText="Hello, Everyone. I'm From innertext"
        HookRef.current.innerHTML = "<ul><li>Hello 1</li> <li>Hello 2</li></ul>"
        

    }
  return (
    <div>
      <h1 ref={HookRef}></h1>
      <button onClick={Change}>Click</button>
    </div>
  )
}

export default HookRef

