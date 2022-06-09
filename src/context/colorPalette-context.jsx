import { createContext,useContext,useState } from "react";

const colorpaletteContext=createContext();
const ColorsProvider=(({children})=>{
    const [toggelColors,setToggelColors]=useState(false)
    return(
        <colorpaletteContext.Provider value={{toggelColors,setToggelColors}}>
            {children}
        </colorpaletteContext.Provider>
    )
})

const usePaltte=()=>useContext(colorpaletteContext); 

export {ColorsProvider,usePaltte}