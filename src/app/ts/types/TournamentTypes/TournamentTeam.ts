import { ITournamentDb } from "../../models/ITournamentDb";

export type TournamentTeam = {
    _id: number;
    tournamentNumber: number;
    teamName: string;
    tournamentTeamsQty: number;
    teamTournament: ITournamentDb[];
};
