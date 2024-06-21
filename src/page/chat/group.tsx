import { PlusOutlined } from "@ant-design/icons"


export const Group = () => {
    return <div className="px-2">
          <header className="p-2 py-2.5 dark:borde-b-[1px]  dark:border-zinc-500
      border-gray-300 flex justify-between items-center ">
        <h1 className="font-bold text-[18px]">
          Group
        </h1>
      <div className="relative flex gap-2">
          <button className="flex shadow-md shadow-gray-200/55 bg-[#7469B6] text-white  
          rounded-md py-1 px-2 gap-2 text-[12px] items-center">
          <PlusOutlined/>
         Create Group
              </button>
      </div>
    </header>

    <div className="w-full my-2 px-2">
<input placeholder="search" className="w-full 
px-2 py-1.5 rounded-lg
text-[14px] border-neutral-200
dark:placeholder:text-neutral-100 text-neutral-300 bg-neutral-100"/>
  
</div>
    </div>
}