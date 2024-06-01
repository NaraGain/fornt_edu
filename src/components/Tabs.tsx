import { ConfigProvider, Tabs } from "antd"
import TabPane from "antd/es/tabs/TabPane";


export type TabPropsItem = 
{ key: string; label: string | React.ReactNode; children: React.ReactNode , disable : boolean }

interface TabProps  {
    defaultActiveKey? : string,
    tabs: TabPropsItem[];
}




export const Tab:React.FC<TabProps> = ({defaultActiveKey , tabs}) => {

    // Tabs:{
    //     itemActiveColor : "#7469B6",
    //     itemHoverColor: "#7469B6",
    //     inkBarColor: "#7469B6",
    //     itemSelectedColor: "#7469B6"
    //   },


    return <ConfigProvider>
    <Tabs
     defaultActiveKey={defaultActiveKey}>
       {tabs.map(({ key, label, disable, children }) => (
                <TabPane disabled={disable} tab={label} key={key}>
                    {children}
                </TabPane>
            ))}
        </Tabs>
    </ConfigProvider>
}