import { ITournamentDb } from "../../../../ts/models/ITournamentDb";
import { RoleStatisticsType } from "../../../../ts/types/RoleStatisticsType";
import countRoleStatistics from "./countRoleStatistics";

const returnRoleStatistics = (tournaments: ITournamentDb[]) => {
    const {
        tournamentsPlayed: tournamentsPlayedTANK,
        averageWinrate: averageWinrateTANK,
        lastRate: lastRateTANK
    } = countRoleStatistics(tournaments, "tank");

    const {
        tournamentsPlayed: tournamentsPlayedDPS,
        averageWinrate: averageWinrateDPS,
        lastRate: lastRateDPS
    } = countRoleStatistics(tournaments, "dps");

    const {
        tournamentsPlayed: tournamentsPlayedSUPPORT,
        averageWinrate: averageWinrateSUPPORT,
        lastRate: lastRateSUPPORT
    } = countRoleStatistics(tournaments, "support");

    const roleStatisticsData: RoleStatisticsType = {
        tank: {
            tournamentsPlayed: tournamentsPlayedTANK,
            averageWinrate: averageWinrateTANK,
            lastRate: lastRateTANK
        },
        dps: {
            tournamentsPlayed: tournamentsPlayedDPS,
            averageWinrate: averageWinrateDPS,
            lastRate: lastRateDPS
        },
        support: {
            tournamentsPlayed: tournamentsPlayedSUPPORT,
            averageWinrate: averageWinrateSUPPORT,
            lastRate: lastRateSUPPORT
        }
    };

    return roleStatisticsData;
};

export default returnRoleStatistics;
