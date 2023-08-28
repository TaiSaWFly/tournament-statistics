import { PlayerRoles } from "../PlayerTypes/PlayerRoles";
import { RoleStatsType } from "./RoleStatsType";

type RoleStatisticsInRoleKeys = {
    [key in PlayerRoles]: RoleStatsType;
};
export type RoleStatisticsType = Omit<RoleStatisticsInRoleKeys, "Flex">;
