import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loader from "../common/Loader/Loader";
import TournamentsPage from "../pages/TournamentsPage/TournamentsPage";
import PlayerPageLayout from "../layouts/PlayerPageLayout";
import {
    MAIN_ROUTE,
    NOTFOUND_ROUTE,
    PLAYER_ID_ROUTE,
    TOURNAMENTS_ROUTE
} from "../../data/routes";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const MainPage = lazy(() => import("../pages/MainPage/MainPage"));

const AppRoutes: React.FC = () => {
    return (
        <>
            <Switch>
                <Route
                    exact
                    path={MAIN_ROUTE}
                    render={() => (
                        <Suspense fallback={<Loader />}>
                            <MainPage />
                        </Suspense>
                    )}
                />

                <Route path={TOURNAMENTS_ROUTE} component={TournamentsPage} />

                <Route path={PLAYER_ID_ROUTE} component={PlayerPageLayout} />

                <Route path={NOTFOUND_ROUTE} component={NotFoundPage} />

                <Redirect to={MAIN_ROUTE} from="*" />
            </Switch>
        </>
    );
};

export default AppRoutes;
