import { useEffect, useState } from "react"
import { useQueryParams } from "../../hook/useQueryParams";
import SSEtest  from "./sseTest";
import { Modal } from "./Modal";




export const Test:React.FC = () =>{
    
    const [theme ,setTheme] = useState(localStorage.theme);
    const [file ,setFile] = useState()
    const element = window.document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const {queryParams , getQueryParams,setQueryParamsTwoParams 
      ,setQueryParamsOneParams, removeQueryParams} = useQueryParams()
   

    const onWindowMatch = () =>{
        if(localStorage.theme === 'dark' || 
        (!("theme" in localStorage) && darkQuery.matches)){
            element.classList.add('dark');
        }else{
            element.classList.remove("dark")
        }
    }

    const handleImageLoad = (e:any) => {
        const { naturalWidth, naturalHeight } = e.target;
        setDimensions({ width: naturalWidth, height: naturalHeight });
      };

    const handleFileChange = (event:any) => {
        const file = event.target.files[0];
        console.log(file)
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) =>{
                const img:any = new Image()
                img.src = event.target?.result
                img.onload = handleImageLoad


            };
            reader.readAsDataURL(file)
          setFile(file);
        }
      };

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

    const handleButtonClick = () => {
      // Example: Set a query parameter when a button is clicked
     
     setQueryParamsTwoParams('username', 'bun', 'tab', 'feed')
    };

    const [files, setFiles] = useState<any | null | []>([]);

    const Change = (e:any) => {
      const fileList = e.target.files;
  
      // Loop through each file
      Array.from(fileList).forEach((file:any) => {
        // Check if the file is an image
        if (file.type.match(/^image\//)) {
          const reader = new FileReader();
  
          reader.onload = (event) => {
            const img:any = new Image();
            img.src = event.target?.result;
  
            img.onload = () => {
              // Create a canvas element
              const canvas = document.createElement('canvas');
              const ctx:any = canvas.getContext('2d');
  
              // Calculate new dimensions
              const maxWidth = 300; // Change this to your desired width
              const maxHeight = 300; // Change this to your desired height
              let width = img.width;
              let height = img.height;
  
              if (width > height) {
                if (width > maxWidth) {
                  height *= maxWidth / width;
                  width = maxWidth;
                }
              } else {
                if (height > maxHeight) {
                  width *= maxHeight / height;
                  height = maxHeight;
                }
              }
  
              // Set canvas dimensions
              canvas.width = width;
              canvas.height = height;
  
              // Draw image on canvas
              ctx.drawImage(img, 0, 0, width, height);
  
              // Convert canvas to Blob
              canvas.toBlob((blob:any) => {
                // Create a new File object with the resized image
                const resizedFile = new File([blob], file.name, {
                  type: 'image/jpeg', // Change this to the desired file type
                  lastModified: Date.now(),
                });
  
                // Update state with resized file
                setFiles((prevFiles:any) => [...prevFiles, resizedFile]);
              }, 'image/jpeg');
            };
          };
  
          reader.readAsDataURL(file);
        }
      });
    };

    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };
  



    return <section className="min-h-screen pt-8
     dark:text-gray-500 dark:bg-slate-700  duration-100">
        {/* <button onClick={()=> setTheme('light')} >light</button>
        <button onClick={()=> setTheme('dark')}>dark</button>
        <button onClick={()=> setTheme('system')}>system</button>
        <h1 className="dark:text-white">hello world</h1>

        {dimensions.width > 0 && (
        <p>Image dimensions: {dimensions.width} x {dimensions.height}</p>
       )}
        <input onChange={handleFileChange} type="file"/>
        <button onClick={handleButtonClick}>Set Query Parameter</button>
      <button onClick={() => removeQueryParams('username')}>Remove Query Parameter</button>
       


    */}
      {/* <SSEtest/> */}
      <div className="App">
      <button onClick={handleOpenModal} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="My Modal">
        <p>This is a reusable modal component!</p>
      </Modal>




      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-2xl">
        <div className="md:flex">
            <div className="md:flex-shrink-0">
                <img className="h-[20rem] w-full object-cover md:w-48" src="http://localhost:3000/uploads/p-1715355152493-977.png" alt="Card image"/>
            </div>
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Brand Name</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Card Title</a>
                <p className="mt-2 text-gray-500">Description text goes here. This is a sample description to demonstrate the card layout using Tailwind CSS.</p>
            </div>
        </div>
    </div>
    </div>

<div className="bg-gray-100 flex items-center justify-center min-h-screen">
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm md:max-w-lg lg:max-w-xl">
        <div className="bg-indigo-900 text-white text-center py-4">
            <h2 className="text-xl font-bold">#អបអរសាទរខួប5ឆ្នាំហាយណូ</h2>
        </div>
        <div className="p-4 md:flex">
            <div className="md:w-1/2">
                <img  src="http://localhost:3000/uploads/p-1715355152493-977.png"  alt="Singer Image" className="w-full rounded-lg md:rounded-none md:rounded-l-lg"/>
            </div>
            <div className="md:w-1/2 p-4">
                <h3 className="text-lg font-bold text-yellow-600">សូមចូលរួម</h3>
                <p className="mt-2 text-gray-600">
                    សុន សារ៉ាន់ និង ស្រីនាង ចេញបទថ្មី ជាមួយការសង្ឃឹមថ្មី...
                </p>
                <p className="mt-2 text-gray-600">
                    អាស័យដ្ឋាន៖ ផ្សារទួលទំពូង អាគារលេខ៣
                </p>
                <div className="mt-4 text-sm text-gray-500">
                    <p>បញ្ចូលកម្មវិធីផ្សេងៗ៖ ច្រៀងតន្រ្តី ការស្វាគមន៍កម្រិតកំពូល...</p>
                </div>
            </div>
        </div>
        <div className="bg-gray-200 text-center py-2">
            <p className="text-xs text-gray-600">© 2024 ហាយណូ</p>
        </div>
    </div>
</div>

    </section>
}