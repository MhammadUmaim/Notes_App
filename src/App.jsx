import React, { useState } from 'react'
import { X } from 'lucide-react';
const App = () => {


  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [task, setTask] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title: title, text: text })
    setTask(copyTask);
    console.log('copytask',copyTask)

    console.log(title);
    console.log(text);
    setTitle("");
    setText("");
    // Add note submission logic here
  };


  const deleteNote = ()=>{
    console.log('hiiiiiiiiii');
    
  }


  return (

    <div className='sm:h-screen sm:flex justify-between bg-black text-white p-5'>


      <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-5 sm:w-1/2 '>
        <h1 className='text-center text-4xl font-extralight'>Add Notes</h1>

        {/* first input for heading */}
        <input
          className='border border-gray-300 rounded-md p-4 w-full outline-none text-2xl capitalize'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Note Title"
        />

        <textarea
          className='border border-gray-300 rounded-md p-5 w-full outline-none h-32'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Note Content">
        </textarea>

        <button
          type="submit"
          className='bg-white text-black p-2 rounded font-medium text-sm w-full active:scale-95 transition-transform'
        >
          Add Note
        </button>
      </form>

      <div className=' sm:w-1/2 p-5 rounded-sm mt-5 sm:mt-0 flex flex-col  h-100 sm:h-auto'>

        <h1 className='text-center text-4xl font-extralight'>Recent Notes</h1>

        <div className="cards flex gap-y-5 gap-x-2 sm:gap-5 flex-wrap justify-center items-start mt-5  overflow-auto flex-1 max-h-105 sm:max-h-none pr-4">
         {task.map((e,index)=>{
          return <div key={index} className='relative w-40 rounded-2xl py-7 px-4 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] bg-cover text-black flex flex-col wrap-break-word h-50 overflow-auto'>
            <h2 onClick={deleteNote} className='absolute top-4 right-5 bg-red-700 text-white p-0.5 rounded-full cursor-pointer'><X size={18} strokeWidth={2} /> </h2>
            <h3 className='text-2xl font-bold leading-tight'>{e.title}</h3>
            <p className='whitespace-pre-wrap text-sm'>{e.text}</p>
          </div>
         })}

        </div>

      </div>

    </div>
  )
}

export default App