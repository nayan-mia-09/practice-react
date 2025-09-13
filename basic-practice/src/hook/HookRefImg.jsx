import { useRef } from "react"


const HookRefImg = () => {
    const ImgRef = useRef();
    const Change = () => {
        ImgRef.current.src = "https://placehold.co/600x400@2x.png"
        ImgRef.current.setAttribute('height' , '300px')
        ImgRef.current.setAttribute('width', '400px')

    }
  return (
    <div>
      <img ref={ImgRef} src="https://placehold.co/600x400?text=Hello+World" alt="Img" />
      <button onClick={Change}>Change Img</button>
    </div>
  )
}

export default HookRefImg
