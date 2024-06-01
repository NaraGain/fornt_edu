import { useMemo } from "react"

 const useFormatContent = (content:string) => {
    return useMemo(()=> {
        const withLineBreaks = content.replace(/\n/g, '<br>');
        const withLineParagraphs = `<p>${withLineBreaks}</p>`;
        return withLineParagraphs;
    
    }, [content])
}

export default useFormatContent