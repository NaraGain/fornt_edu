import { useState ,useEffect } from "react";



export default function useDarkSise() {
    const [theme ,setTheme] = useState(localStorage.theme)
    const colorTheme = theme === 'dark' ? "light" : "dark";
    localStorage.setItem("theme", theme);

    useEffect(()=> {
        const element = window.document.documentElement
        element.classList.remove(colorTheme)
        element.classList.add(colorTheme)
        if(localStorage.getItem('theme') === "dark"){
            localStorage.removeItem("theme")
        }else{
            localStorage.setItem('theme', theme)
        }
    }, [theme,colorTheme])

    return [colorTheme ,theme]
}