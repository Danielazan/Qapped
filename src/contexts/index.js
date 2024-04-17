import { createContext, useState } from 'react'

export const GlobalContext = createContext()

function GlobalState ({ children }) {
  const [State, setState] = useState('')
  const [Lga, setLga] = useState('')
  const [FullName,setFullName]= useState(null)
  

  return (
    <GlobalContext.Provider
      value={{
        State,
        setState,
        Lga,
        setLga,
        FullName,
        setFullName
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
