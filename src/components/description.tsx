
export const Description:React.FC<{desc:string}> = ({desc}) => {
    const createMarkup = (desc:string) => ({__html:desc})
    return <div className="space-y-1 text-[14px]"  
    dangerouslySetInnerHTML={createMarkup(desc)} />
}