import { createContext,useState } from "react";

export const ModeContext = createContext();


export const Temas = {
    light:{
        font:"black",
        background : "blue",
        backgroundHome : "white",
        backgroundNav : "#949ec7", 
        backgroundFoo : "#949ec7"  
  
      },
      dark:{
        font:"white",
        background : "black",
        backgroundHome : "black",
        backgroundNav : "#87848494", 
        backgroundFoo : "#87848494"  
      },
}

export function ModeContextProvider(props){
    

    const Temas = {
        light:{
          font:"black",
          background : "blue",
          backgroundHome : "white",
          backgroundNav : "#949ec7", 
          backgroundFoo : "#949ec7"  
    
        },
        dark:{
          font:"white",
          background : "black",
          backgroundHome : "black",
          backgroundNav : "#87848494", 
          backgroundFoo : "#87848494"  
        },
    }

    const [tema,setTema] = useState(Temas.light);

    const valor = {tema,setTema}; 

    return(
        <ModeContext.Provider value={valor}>
            {props.children}
        </ModeContext.Provider>
    )
}

