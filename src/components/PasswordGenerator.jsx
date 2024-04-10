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
    <>
      <div >
        <h1 >Password Generator</h1>
      <div >
        <input type="text" 
        value = {Password}
        placeholder='password'
        readOnly
        ref={PasswordRef}
        />
        <button onClick={copypasswordtoClipboard} >Copy</button>
      </div>
      <div >
        <div>
          <input type="range" min={8} max={80} value={length} className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length:{length} </label>
        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id='charInput'
          onChange={() => {
            setcharAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="charInput">Character</label>
        </div>
       </div>
    </div>
    </>   
  )
}

export default App