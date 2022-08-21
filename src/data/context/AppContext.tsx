import { createContext, useEffect, useState } from "react";

//type Tema = 'dark' | '' 

interface AppContextProps {
    tema?: string
    //função que faz a mudança de estado
    alternarTema?: () =>void

}

const AppContext = createContext<AppContextProps>({})

interface ConteudoProps {
    children:any
  }

export function AppProvider(props:ConteudoProps ){

    const [tema, setTema] = useState('dark')

    function alternarTema(){
       const novoTema = tema === '' ? 'dark' : ''
       setTema(novoTema)
       localStorage.setItem('tema',novoTema)
    }

    useEffect(()=>{
        const temaSalvo = localStorage.getItem('tema')
        setTema(temaSalvo)
    },[])

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
