import { useState } from "react"


const TodoApp = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState(" ");

    const AddItem =()=>{
        list.push(item);
        setList([...list])
    }

    const RemoveItem = (index) =>{
        list.splice(index, 1)
        setList([...list])
    }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Todo List</h1>

        <div className="flex gap-4 mb-6 w-full max-w-xl">
            <input className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e)=>setItem(e.target.value)} type="text" placeholder="Add Your List"/>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" onClick={AddItem}>Add</button>

        </div>
      

<div className="w-full max-w-xl">
 <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
  <thead className="bg-blue-600 text-white">
    <tr>
      <th className="px-4 py-2 text-left">Sl</th>
      <th className="px-4 py-2 text-left">Item</th>
      <th className="px-4 py-2 text-left">Action</th>
    </tr>
  </thead>
  <tbody>
    {list.length !== 0 ? (
      list.map((element, index) => (
        <tr key={index.toString()} className="border-t hover:bg-gray-50 transition">
          <td className="px-4 py-2 font-medium text-gray-700">{index + 1}.</td>
          <td className="px-4 py-2 text-gray-800">{element}</td>
          <td className="px-4 py-2">
            <button
              onClick={() => RemoveItem(index)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Remove
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="3" className="px-4 py-4 text-center text-gray-500 italic">
          No items in the list
        </td>
      </tr>
    )}
  </tbody>
</table>
</div>
 


    </div>
  )
}

export default TodoApp
