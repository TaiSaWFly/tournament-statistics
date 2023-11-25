import { PlayerStatsDataType } from "../../ts/types/PlayerTypes/PlayerStatsDataType";
import { SearchMemoryType } from "../../ts/types/LocalStorageDataTypes/SearchMemoryType";
import { BlockDimentionsType } from "../../ts/types/BlockDimentionsType";
import { AppMemoryType } from "../../ts/types/LocalStorageDataTypes/AppMemoryType";
import { RoleStatisticsType } from "../../ts/types/RoleTypes/RoleStatisticsType";

const pl = [1, 2, 3, 4];
const pageSize = 3;
const playerStatsInitialState: PlayerStatsDataType = {
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
const roleStatisticsInitialState: RoleStatisticsType = {
    tank: {
        averageWinrate: 0,
        tournamentsPlayed: 0,
        lastRate: ""
    },
    dps: {
        averageWinrate: 0,
        tournamentsPlayed: 0,
        lastRate: ""
    },
    support: {
        averageWinrate: 0,
        tournamentsPlayed: 0,
        lastRate: ""
    }
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
    roleStatisticsInitialState,
    searchMemoryInitialState,
    blockDimentionsInitialState,
    sidebarMinWidth,
    appMemoryInitialState
};
