import React, { ComponentType } from "react";
import { Provider } from "react-redux";
import store from "../../store/createStore";
import localStorageService from "../../services/app.services/localStorage.service";

localStorageService.initialStorage();

const withStore =
    (Component: ComponentType): React.FC =>
    ({ ...props }) => {
        return (
            <Provider store={store}>
                <Component {...props} />
            </Provider>
        );
    };

export default withStore;
