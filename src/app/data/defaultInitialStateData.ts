import { PlayerStats } from "../ts/types/PlayerTypes/PlayerStats";
import { SearchMemoryType } from "../ts/types/LocalStorageDataTypes/SearchMemoryType";
import { DashboardMemoryType } from "../ts/types/LocalStorageDataTypes/DashboardMemoryType";

export const pl = [1, 2, 3, 4];
export const pageSize = 3;
export const playerStatsInitialState: PlayerStats = {
    tournamentsPlayed: 0,
    tournamentsWon: 0,
    winrateZero: 0,
    winrateByMaps: 0,
    bestResult: null,
    averageProximity: 0,
    mapsWon: 0,
    mapsAll: 0,
    averagePlace: 0,
    roleStatisticsData: null
};
export const searchMemoryInitialState: SearchMemoryType = {
    tournamentNumberOption: null,
    playerOption: null
};
export const dashboardMemoryInitialState: DashboardMemoryType = {
    menu: { isOpen: false }
};
