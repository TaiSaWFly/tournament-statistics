import React from "react";
import AppLoader from "./components/hoc/AppLoader";
import PageLayout from "./components/layouts/PageLayout";
import Header from "./components/ui/HeaderComponents/Header/Header";
import Navigation from "./components/ui/NavigationComponents/Navigation/Navigation";
import AppStructure from "./components/hoc/AppStructure/AppStructure";
import AppRoutes from "./components/hoc/AppRoutes";
import Footer from "./components/ui/FooterComponents/Footer";
import withStoreRouterProviders from "./components/hoc/withStoreRouterProviders";
import withAnalitics from "./components/hoc/withAnalitics";
import withAppTheme from "./components/hoc/withAppTheme";

const App: React.FC = () => {
    return (
        <AppLoader>
            <AppStructure>
                <Navigation />

                <div className="app_page">
                    <Header />

                    <PageLayout>
                        <AppRoutes />
                    </PageLayout>

                    <Footer />
                </div>
            </AppStructure>
        </AppLoader>
    );
};

const AppWithAppHOCs = withStoreRouterProviders(
    withAnalitics(withAppTheme(App))
);
export default AppWithAppHOCs;
