import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {
// state for svaing the data
const [task, settask] = useState("")
const [description, setDescription] = useState("")
const [alldata, setalldata] = useState(() => {
    const savedData = localStorage.getItem("tasks")
    return savedData ? JSON.parse(savedData) : []
  })
  
  
  // form handler 
  function formHandler(e) {
    e.preventDefault()
    const allData = {
      id: Date.now(),
      task,
      description
    }
    
    setalldata((prev) => {
      return [...prev, allData]
    })
    console.log(alldata);
    settask("")
    setDescription("")
  }
  
  // delete karne ke liye
  function deleteTask(id) {
    setalldata(prev => prev.filter(item => item.id !== id))
  }
  
  // local me save
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(alldata))
  }, [alldata])
  
  // UI and input me save karne ke liye
  return (
    <div className='h-screen w-full ' style={{ background: "linear-gradient( to top,white,lightblue,crimson)" }}>
      <div className='main w-full h-screen flex justify-around' style={{ padding: "2rem" }}>
        <div className='left w-[40%] h-full bg-zinc-800 rounded' style={{ padding: "1.5rem" }}>
          <h1 className='font-semibold text-white'>Task Manager</h1>
          <br />
          <form
            onSubmit={(e) => {
              formHandler(e)
            }}
            className='flex flex-col items-start'>
            <div className='flex items-center gap-6'>
              <label htmlFor="" className='text-red-100 font-bold'>Add a task  :          </label>
              <input
                value={task}
                onChange={(e) => {
                  settask(e.target.value)
                }}
                type="text" className='border-2 border-red-200 rounded text-white font-semibold w-45' style={{ padding: "5px" }} />
            </div>
            <br /> <br />
            <div className='flex items-start gap-5'>
              <label htmlFor="" className='text-red-100 font-bold'>  Description     :          </label>
              <textarea
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
                name="" id="" className='border-2 w-43  border-red-200 rounded text-white font-semibold h-20'></textarea>
            </div>
            <br /> <br />
            <div className='flex items-center w-full justify-evenly'>
              <button className='active:scale-95   bg-zinc-400 rounded font-bold ' style={{ padding: "0.7rem 2.5rem" }}>Submit</button>
            </div>
          </form>
        </div>
        <div className='left w-[40%] h-full bg-zinc-400 rounded overflow-y-auto flex flex-wrap justify-evenly sh' style={{ paddingTop: "20px" }}>
          <div className='overflow-y-auto w-full flex justify-evenly gap-2 flex-wrap shrink-0'>
            {alldata.map((item, indx) => {
              return <Card key={indx} data={item} onDelete={deleteTask} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App