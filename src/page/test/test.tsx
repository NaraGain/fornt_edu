import { useEffect, useState } from "react"


export const Test:React.FC = () =>{
    
    const [theme ,setTheme] = useState(localStorage.theme);
    const element = window.document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    console.log(darkQuery ,"DARK QUERY")

    const onWindowMatch = () =>{
        if(localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)){
            element.classList.add('dark');
        }else{
            element.classList.remove("dark")
        }
    }

    useEffect(()=>{
        switch(theme){
            case "dark":
                element.classList.add("dark")
                localStorage.setItem("theme", "dark")
                break;
            case "light":
                element.classList.remove("dark")
                localStorage.setItem("theme", "light")
                break;
            default:
                localStorage.removeItem("theme")
                onWindowMatch()
                break
        }

    }, [theme])

    return <section className="min-h-screen pt-8 dark:text-gray-500 dark:bg-slate-700  duration-100">
        <button onClick={()=> setTheme('light')} >light</button>
        <button onClick={()=> setTheme('dark')}>dark</button>
        <button onClick={()=> setTheme('system')}>system</button>
        <h1 className="dark:text-white">hello world</h1>
    </section>
}