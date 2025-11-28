import { useState, useEffect } from 'react'
import { X } from 'lucide-react';
import Toast from './components/Toast.jsx';
import ErrorToast from './components/ErrorToast.jsx'
import DeleteToast from './components/DeleteToast.jsx'
import WarningToast from './components/WarningToast.jsx'

const App = () => {

  // notes states
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [task, setTask] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('note') || '[]')
    } catch (e) {
      console.error('Failed to parse saved notes:', e)
      return []
    }
  })

  // All Toasts
  const [toastVisibility, setToastVisibility] = useState(false);
  const [errorToastVisibility, setErrorToastVisibility] = useState(false);
  const [deleteToastVisibility, setDeleteToastVisibility] = useState(false);
  const [warningToastVisibility, setWarningToastVisibility] = useState(false);

  // Date & Time 
  let date = new Date();
  let month = date.getMonth() + 1;
  let Name = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"][date.getDay()];
  let year = date.getFullYear();
  let hours = date.getHours()
  let mins = date.getMinutes()
  if (hours > 12) { mins = mins + ' pm'}
  let time = `${hours}:${mins}`
  let currentDate = `${month}/${Name}/${year} -${time}`;

  // Save notes to localStorage whenever task state changes
  useEffect(() => {
    localStorage.setItem('note', JSON.stringify(task))
  }, [task])

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs first
    if (title == '' || text == '') {
      setErrorToastVisibility(true);
      setTitle("");
      setText("");
      setTimeout(() => {
        setErrorToastVisibility(false);
      }, 3000);
      return;
    }

    if (title.length > 10 || title.length < 3 || text.length > 50 || text.length < 5) {
      setWarningToastVisibility(true);
      setTitle("");
      setText("");
      setTimeout(() => {
        setWarningToastVisibility(false);
      }, 3000);
      return;
    }

    // If validation passes, add the note
    const copyTask = [...task];
    copyTask.push({ title: title, text: text })
    setTask(copyTask);

    setToastVisibility(true);
    setTitle("");
    setText("");
    setTimeout(() => {
      setToastVisibility(false);
    }, 3000);
  };


  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)
    // localStorage is updated automatically by the useEffect watching task
  }


  return (
  
    <div className='min-h-screen p-4 sm:flex justify-between bg-black text-white sm:p-5'>
      {/* Toasts */}
      <Toast visibility={toastVisibility} />
      <ErrorToast visibility={errorToastVisibility} />
      <WarningToast visibility={warningToastVisibility} />
      <DeleteToast visibility={deleteToastVisibility} />

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 sm:p-5 sm:w-1/2 '>
        <h1 className='text-center text-4xl font-extralight'>Add Notes</h1>

        {/* first input for heading */}
        <input
          className='border border-gray-300 rounded-md p-4 w-full outline-none text-2xl capitalize focus:border-2 '
          type="text"
          value={title}
          onChange={(e) => {
            if (e.target.value.length < 1) {
              e.target.style.border = "2px solid red";
            }
            else if (e.target.value.length > 10) {
              e.target.style.border = "2px solid orange";
            }
            else {
              e.target.style.border = "2px solid white";
            }
            setTitle(e.target.value)
          }}
          placeholder="Enter Note Title"
        />

        {/* Second input for content */}
        <textarea
          className='border border-gray-300 rounded-md p-5 w-full outline-none h-32 focus:border-2 '
          value={text}
          onChange={(e) => {
            if (e.target.value.length < 1) {
              e.target.style.border = "2px solid red";
            }
            else if (e.target.value.length > 50) {
              e.target.style.border = "2px solid orange";
            }
            else {
              e.target.style.border = "2px solid white";
            }
            setText(e.target.value)
          }}

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
            return <div key={index} className='relative w-65 rounded-2xl py-9.5 px-6 
            bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]
            bg-cover text-black flex flex-col wrap-break-word h-80 overflow-auto '>

              <h2 onClick={() => {
                let confirmation = confirm('Are you sure you want to delete this note?');
                if (confirmation === true) {
                  deleteNote(index)
                  setDeleteToastVisibility(true);
                  setTimeout(() => {
                    setDeleteToastVisibility(false);
                  }, 3000);
                  return;
                }
                return;

              }}
                className='absolute top-8 right-6 bg-red-700 text-white p-1.5 rounded-full cursor-pointer'><X size={18} strokeWidth={2} /></h2>
              <p>{currentDate}</p>
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
