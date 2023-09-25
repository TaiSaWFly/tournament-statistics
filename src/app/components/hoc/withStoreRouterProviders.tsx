import React, { ComponentType } from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { AppStructureProvider } from "../../hooks/appHooks/appContexts/useAppStructure";
import store from "../../store/createStore";
import history from "../../utils/general/history";
import localStorageService from "../../services/app.services/localStorage.service";
import { AppThemesProvider } from "../../hooks/appHooks/appContexts/useAppThemes";

localStorageService.initialStorage();

const withStoreRouterProviders =
    (Component: ComponentType): React.FC =>
    ({ ...props }) => {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <AppThemesProvider>
                        <AppStructureProvider>
                            <Component {...props} />
                        </AppStructureProvider>
                    </AppThemesProvider>
                </Router>
            </Provider>
        );
    };

export default withStoreRouterProviders;
