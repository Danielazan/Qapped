import { createContext, useState } from 'react'

export const GlobalContext = createContext()

function GlobalState ({ children }) {
  const [State, setState] = useState('')
  const [Lga, setLga] = useState('')

  

  return (
    <GlobalContext.Provider
      value={{
        State,
        setState,
        Lga,
        setLga,
        
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
