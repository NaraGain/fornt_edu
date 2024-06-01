

export const LoaderPostCard = () => {
    return <div className=" animate-pulse  w-full  py-3  2xl:max-w-[35rem] max-w-[30rem] 
         -z-0 dark:border-zinc-700
        shadow-gray-100/100 dark:shadow-slate-900/30 text-neutral-600
         justify-center">
            <div className="flex items-center gap-2">
            <div className="animate-pulse w-10 h-10 bg-neutral-100 rounded-full"></div>
            <div className="space-y-2">
            <div className="w-20 animate-pulse bg-slate-100 py-1.5 rounded-full"></div>
            <div className="w-24 animate-pulse bg-slate-100 py-1 rounded-full"></div>
            </div>
            </div>

            <div className="mt-5">
            <div className="w-full animate-pulse my-2 rounded-full bg-slate-100 py-1"></div>
            <div className="w-52 animate-pulse my-2 rounded-full bg-slate-100 py-1"></div>
            <div className="w-56 animate-pulse my-2 rounded-full bg-slate-100 py-1"></div>
            </div>

            <div className="h-[10rem] animate-pulse rounded-md w-full bg-neutral-100"></div>

            <div className="w-32 animate-pulse my-2 rounded-full bg-slate-100 py-1"></div>
            
            <div className="flex gap-2">
            <div className="animate-pulse w-6 h-4 bg-neutral-100 rounded-full"></div>
            <div className="animate-pulse w-5 h-4 bg-neutral-100 rounded-full"></div>
            <div className="animate-pulse w-4 h-4 bg-neutral-100 rounded-full"></div>
            </div>
    </div>
}