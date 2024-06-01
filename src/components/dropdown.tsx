import { ConfigProvider, Dropdown } from "antd";


interface DropdownProps  {
    Menu?: [],
    placements?: string | "top",
    icons? : JSX.Element
}


export const Dropdowns = ({Menu ,placements , icons}: DropdownProps) => {
    return <>
    <ConfigProvider>
    <Dropdown
    trigger={['click']}
    >
        {icons}
    </Dropdown>
    </ConfigProvider>
       
    </>
}