import { useState } from 'react'
import { X } from 'lucide-react';
const App = () => {


  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [task, setTask] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();
    const copyTask = [...task];

    if (title != '' && text != '') {
      copyTask.push({ title: title, text: text })
      setTask(copyTask);
    }

    setTitle("");
    setText("");
    
  };


  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }


  return (

    <div className='min-h-screen p-4 sm:flex justify-between bg-black text-white sm:p-5'>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 sm:p-5 sm:w-1/2 '>
        <h1 className='text-center text-4xl font-extralight'>Add Notes</h1>

        {/* first input for heading */}
        <input
          className='border border-gray-300 rounded-md p-4 w-full outline-none text-2xl capitalize focus:border-2 '
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Note Title"
        />

        {/* Second input for content */}
        <textarea
          className='border border-gray-300 rounded-md p-5 w-full outline-none h-32 focus:border-2 '
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

        <div className="cards flex gap-5 flex-wrap justify-center items-start mt-5  overflow-auto flex-1 h-[90vh]  pr-4">
          {task.map((e, index) => {
            return <div key={index} className='relative w-65 rounded-2xl py-9.5 px-6 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] bg-cover text-black flex flex-col wrap-break-word h-80 overflow-auto '>
              <h2 onClick={() => {
                deleteNote(index)
              }} className='absolute top-8 right-6 bg-red-700 text-white p-1.5 rounded-full cursor-pointer'><X size={18} strokeWidth={2} /> </h2>
              <h3 className='text-2xl font-bold leading-tight capitalize'>{e.title}</h3>
              <p className='whitespace-pre-wrap font-medium  leading-7 text-gray-700'>{e.text}</p>
            </div>
          })}

        </div>

      </div>

    </div>
  )
}

export default App