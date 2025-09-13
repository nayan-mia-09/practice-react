import { useRef } from "react"


const HookInput = () => {

    const FirstName = useRef();
    const LastName = useRef();

    const Change = () =>{
        const fName = FirstName.current.value;
        const lName = LastName.current.value;

        alert(`Hello, ${fName} ${lName}. Good Morning!`)
    }

  return (
    <div>
      <input ref={FirstName} type="text" placeholder="FirstName" />
      <input ref={LastName} type="text" placeholder="LastName" />
      <button onClick={Change}>Submit</button>
    </div>
  )
}

export default HookInput
