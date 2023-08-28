import React, { ReactNode } from "react";

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return <main>{children}</main>;
};

export default PageLayout;
