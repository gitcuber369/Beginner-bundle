import React, { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false); 
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password, setPassword] = useState("");

  const PasswordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  
    if(numberAllowed) {
      str += "0123456789"
    }
    if(charAllowed) {
      str += "!@#$%^&*()_+~`"
    }
    
    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, charAllowed, numberAllowed, setPassword])
   
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  
  const copypasswordtoClipboard = useCallback(() => {
    PasswordRef.current?.select()
    PasswordRef.current?.setSelectionRange(0);  
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-500/30 rounded-lg shadow-lg text-white">
    <h1 className="text-2xl text-center mb-4">Password Generator</h1>
    <div className="mb-4">
      <input
        type="text"
        value={Password}
        placeholder="password"
        readOnly
        ref={PasswordRef}
        className="w-full p-2 border border-gray-300 text-black rounded"
      />

      <div className='flex justify-center'>
      <button
        onClick={copypasswordtoClipboard}
        className="mt-2 py-1 px-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
        Copy
      </button>
        </div>
    </div>
    <div className="mb-4">
      <div className="flex items-center">
        <input
          type="range"
          min={8}
          max={80}
          value={length}
          className="cursor-pointer flex-grow"
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label className="ml-2">Length: {length}</label>
      </div>
    </div>
    <div className="mb-4">
      <div className="flex items-center justify-center gap-10 ">
        <button
          className={`mr-2 px-4 py-2 rounded ${numberAllowed ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
          onClick={() => {
            setNumberAllowed((prev) => !prev);
          }}
        >
          Numbers
        </button>
        <button
          className={`px-4 py-2 rounded ${charAllowed ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
          onClick={() => {
            setcharAllowed((prev) => !prev);
          }}
        >
          Character
        </button>
      </div>
    </div>
  </div>
  
  )
}

export default App
