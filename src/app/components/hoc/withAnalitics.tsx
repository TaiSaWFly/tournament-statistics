import React, { ComponentType } from "react";
import history from "../../utils/general/history";
import ReactGA from "react-ga4";
import config from "../../config";

config.analiticKey && ReactGA.initialize(config.analiticKey);

const withAnalitics =
    (Component: ComponentType): React.FC =>
    ({ ...props }) => {
        history.listen((location) => {
            ReactGA.send({
                hitType: "pageview",
                page: location.pathname,
                title: location.pathname
            });
        });

        return <Component {...props} />;
    };

export default withAnalitics;
