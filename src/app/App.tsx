import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import PlayerPage from "./components/pages/PlayerPage/PlayerPage";
import withStore from "./components/hoc/withStore";
import AppLoader from "./components/hoc/AppLoader";
import withRouter from "./components/hoc/withRouter";
import PageLayout from "./components/layouts/PageLayout";
import MainPage from "./components/pages/MainPage/MainPage";
import Header from "./components/ui/HeaderComponents/Header";
import TournamentsPage from "./components/pages/TournamentsPage/TournamentsPage";
import NotFound from "./components/pages/NotFound/NotFound";
import Footer from "./components/ui/Footer/Footer";

const App: React.FC = () => {
    return (
        <AppLoader>
            <Header />

            <PageLayout>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/tournaments" component={TournamentsPage} />
                    <Route path="/player/:playerId?" component={PlayerPage} />
                    <Route path="/404" component={NotFound} />
                    <Redirect to="/" from="*" />
                </Switch>
            </PageLayout>

            <Footer />
        </AppLoader>
    );
};

const AppWithStoreAndRoutes = withStore(withRouter(App));
export default AppWithStoreAndRoutes;
