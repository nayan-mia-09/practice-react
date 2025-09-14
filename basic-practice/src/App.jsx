import TodoApp from "./components/TodoApp";
import HookApiDataCall from "./hook/HookApiDataCall";
import HookCssColorCng from "./hook/HookCssColorCng";
import HookInput from "./hook/HookInput";
import HookNumRef from "./hook/HookNumRef";
import HookRef from "./hook/HookRef";
import HookRefImg from "./hook/HookRefImg";
import Page1 from "./pages/Page1";


const LoginStatusBtn = (status) =>{

  if(status){
    return <button>Logout</button>
  } else{
    return <button>Login</button>
  }
}

const App = () => {
  let result = 70;
  let marks = 50;

  
  let city = ["Dhaka","Delhi", "London", "New Work"]
  return (
    
    <div>
      <h1 style={{color:"red"}}>Hello</h1>
      <button onClick={()=> alert("Hello , Good Evening!")}>Submit</button>
<hr />
      {marks>80? <h1>Brilliant Student</h1>: <h1>Weak Student</h1>}
<hr />
      {(()=>{
        if(result>=60 && result < 70){
          return <h1>A-</h1>
        }
        else if(result >= 70 && result < 80){
          return <h1>A</h1>
        }
        else if(result >= 80 && result < 90){
          return <h1>A+</h1>
        } else{
          return <h1>Golden A+</h1>
        }
      })()}
<hr />
      <ol>
        {
          city.map((items, i)=>{
            return <li key={i.toString()}>{items}</li>
          })
        }
      </ol>
      <hr />

<h1>Login Status</h1>
{LoginStatusBtn(false)}
<hr />
<h1>Login Status</h1>
<Page1/>

<hr />

<HookRef/>
<hr />
<HookRefImg/>
<hr />
<HookInput/>
<hr />
<HookCssColorCng/>
<hr />
<HookNumRef/>
<hr />
<br /><br />
<HookApiDataCall/>

<hr />
<br />
<TodoApp/>




      

    


    


    </div>
  )
}

export default App
