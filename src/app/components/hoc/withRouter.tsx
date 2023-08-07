import React, { ComponentType } from "react";
import { Router } from "react-router-dom";
import history from "../../utils/general/history";

const withRouter =
    (Component: ComponentType): React.FC =>
    ({ ...props }) => {
        return (
            <Router history={history}>
                <Component {...props} />
            </Router>
        );
    };

export default withRouter;
