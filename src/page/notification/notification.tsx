import React from "react";
import { InofBanner } from "../../components/infoBanner";

export const NotificationPage:React.FC = () => {
    return <div className="max-w-4xl mx-auto">
        <InofBanner
        image="https://storage.ko-fi.com/cdn/useruploads/post/f3a7c679-71ef-4bc1-800a-f34284f6d9e6_chimkennuggetrestgif.gif"
        title="Notification"
        description="Special Thanks to for granting the permission to make the song 🙏"
        children="No notication avilable"
        ></InofBanner>

    </div>
}