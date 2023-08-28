import React from "react";
import AppLoader from "./components/hoc/AppLoader";
import PageLayout from "./components/layouts/PageLayout";
import Header from "./components/ui/HeaderComponent/Header";
import Navigation from "./components/ui/NavigationComponents/Navigation";
import AppStructure from "./components/hoc/AppStructure/AppStructure";
import withStoreRouterProviders from "./components/hoc/withStoreRouterProviders";
import withAnalitics from "./components/hoc/withAnalitics";
import AppRoutes from "./components/hoc/AppRoutes";
import Footer from "./components/ui/Footer/Footer";

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

const AppWithStoreRouterProvidersAndAnalitics = withStoreRouterProviders(
    withAnalitics(App)
);
export default AppWithStoreRouterProvidersAndAnalitics;
