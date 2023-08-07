import { ReactComponent as Tank } from "../../../assets/svg-icons/role/tank.svg";
import { ReactComponent as Dps } from "../../../assets/svg-icons/role/dps.svg";
import { ReactComponent as Support } from "../../../assets/svg-icons/role/support.svg";
import { ReactComponent as NotCheck } from "../../../../node_modules/bootstrap-icons/icons/x-lg.svg";
import { ReactComponent as Check } from "../../../../node_modules/bootstrap-icons/icons/check-circle.svg";
import { ReactComponent as ArrowRight } from "../../../../node_modules/bootstrap-icons/icons/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../../../node_modules/bootstrap-icons/icons/arrow-left.svg";
import { ReactComponent as MainStats } from "../../../../node_modules/bootstrap-icons/icons/bar-chart-line-fill.svg";
import { ReactComponent as Crown } from "../../../assets/svg-icons/crown.svg";

const useSvgIcon = () => {
    return {
        Tank,
        Dps,
        Support,
        Check,
        NotCheck,
        ArrowRight,
        ArrowLeft,
        MainStats,
        Crown
    };
};

export default useSvgIcon;
