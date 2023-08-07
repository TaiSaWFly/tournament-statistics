import { PlayerStats } from "../ts/types/PlayerStats";
import { SearchMemoryType } from "../ts/types/SearchMemoryType";

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
export const tournamentStatisticDataInitialState = {
    tournamentNumber: 0,
    tournamentTeamsQty: 0,
    tournamentPlayersQty: 0,
    tournamentMatchesQty: 0,
    tournamentMapsQty: 0,
    tournamentNewPlayersQty: 0
};
export const searchMemoryInitialState: SearchMemoryType = {
    tournamentNumberOption: null,
    playerOption: null
};
