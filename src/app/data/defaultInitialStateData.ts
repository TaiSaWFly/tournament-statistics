import { PlayerStats } from "../ts/types/PlayerTypes/PlayerStats";
import { SearchMemoryType } from "../ts/types/LocalStorageDataTypes/SearchMemoryType";
import { BlockDimentionsType } from "../ts/types/BlockDimentionsType";
import { AppMemoryType } from "../ts/types/LocalStorageDataTypes/AppMemoryType";

const pl = [1, 2, 3, 4];
const pageSize = 3;
const playerStatsInitialState: PlayerStats = {
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
const searchMemoryInitialState: SearchMemoryType = {
    tournamentNumberOption: null,
    playerOption: null
};
const appMemoryInitialState: AppMemoryType = {
    dashboard: { menu: { isOpen: false } },
    appTheme: { isDarkTheme: false }
};
const blockDimentionsInitialState: BlockDimentionsType = {
    clientHeight: 0,
    clientWidth: 0
};
const sidebarMinWidth = 240;

export {
    pl,
    pageSize,
    playerStatsInitialState,
    searchMemoryInitialState,
    blockDimentionsInitialState,
    sidebarMinWidth,
    appMemoryInitialState
};
