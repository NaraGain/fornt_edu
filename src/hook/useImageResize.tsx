import { useState, useCallback } from 'react';

// Define the type for the resized file
type ResizedFile = {
  file: File;
  preview: string;
};

// Define the custom hook
const useFileResizer = (maxWidth: number, maxHeight: number) => {
  const [resizedFile, setResizedFile] = useState<ResizedFile | null>(null);

  // Function to handle file resizing
  const resizeFile = useCallback(async (file: File) => {
    return new Promise<ResizedFile>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const width = img.width;
          const height = img.height;
          let newWidth = width;
          let newHeight = height;

          // Check if resizing is necessary
          if (width > maxWidth) {
            newWidth = maxWidth;
            newHeight = (height * maxWidth) / width;
          }
          if (newHeight > maxHeight) {
            newHeight = maxHeight;
            newWidth = (width * maxHeight) / height;
          }

          // Create a canvas element for resizing
          const canvas = document.createElement('canvas');
          canvas.width = newWidth;
          canvas.height = newHeight;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, newWidth, newHeight);
            canvas.toBlob((blob) => {
              if (blob) {
                const resizedFile: ResizedFile = {
                  file: new File([blob], file.name, { type: file.type }),
                  preview: URL.createObjectURL(blob),
                };
                resolve(resizedFile);
              } else {
                reject(new Error('Error creating blob'));
              }
            }, file.type ,0.9);
          } else {
            reject(new Error('Canvas context is null'));
          }
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  }, [maxWidth, maxHeight]);

  // Return the resize function and the resized file
  return { resizeFile, resizedFile };
};

export default useFileResizer;
