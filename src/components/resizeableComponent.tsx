import React, { useRef, useEffect, useState } from 'react';


interface ResizableComponentProps {
    children : JSX.Element
}


const ResizableComponent = ({ children }:ResizableComponentProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState<number | null>(null);
    const [contentHeight, setContentHeight] = useState<number | null>(null);
  
    useEffect(() => {
      if (contentRef.current) {
        // Get the width and height of the content
        const width = contentRef.current.scrollWidth;
        const height = contentRef.current.scrollHeight;
  
        // Set the state with the width and height
        setContentWidth(width);
        setContentHeight(height);
      }
    }, []);
  
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          ref={contentRef}
          className="bg-gray-200 p-4 border border-gray-400"
          style={{
            width: contentWidth ? `${contentWidth}px` : 'auto',
            height: contentHeight ? `${contentHeight}px` : 'auto',
          }}
        >
         {children}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat tortor eget risus sodales, in rutrum felis aliquet. Ut vehicula tristique nisl, id fringilla nisl pretium sed. Nulla facilisi. Vivamus fermentum consectetur neque, vel fermentum massa eleifend id. Nam auctor odio in arcu tempus, vel efficitur velit ultricies. Donec eleifend a magna nec dictum. Cras malesuada malesuada convallis. Suspendisse potenti. Mauris a libero sit amet tortor dignissim viverra. Vestibulum vehicula nulla nisi, in tempor ipsum sollicitudin in. Nulla facilisi. Fusce id justo ut ante tempus elementum nec in magna. Nullam fermentum libero a sem consectetur aliquet. Phasellus nec risus velit. Duis at nisi ut urna tempus fermentum.
        </div>
      </div>
    );
};

export default ResizableComponent;
