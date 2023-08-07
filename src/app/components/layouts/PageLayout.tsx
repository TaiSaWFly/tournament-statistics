import React, { ReactNode } from "react";
import ComponentContainer from "../common/ComponentContainer/ComponentContainer";

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <main>
            <ComponentContainer>{children}</ComponentContainer>
        </main>
    );
};

export default PageLayout;
