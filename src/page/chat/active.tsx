import { FilterOutlined, InfoCircleOutlined} from "@ant-design/icons"



export const Active = () => {
    return <div className="px-2">
    <header className="p-2 py-2.5 dark:borde-b-[1px]  dark:border-zinc-500
border-gray-300 flex justify-between items-center ">
  <h1 className="font-bold text-[18px]">
    Active
  </h1>
<div className="relative flex gap-2">
    <button className="flex shadow-md shadow-gray-200/55 bg-[#7469B6] text-white  
    rounded-md py-1 px-2 gap-2 text-[12px] items-center">
    <FilterOutlined/>
    Filter
        </button>
</div>
</header>

<div className="w-full my-2 px-2">
<input placeholder="search" className="w-full 
px-2 py-1.5 rounded-lg
text-[14px] border-neutral-200
dark:placeholder:text-neutral-100 text-neutral-300 bg-neutral-100"/>
</div>

<div className="py-2 px-2  text-neutral-400">
    <div className="flex flex-col gap-2 items-center justify-center">
    <InfoCircleOutlined className="text-[20px]"/>
    <div className="bg-neutral-100 px-2 rounded-lg gap-2">
    <p className="text-[12px] tracking-wide font-thin">No Activity show</p>
    </div>
    </div>
   
    
</div>

</div>
}