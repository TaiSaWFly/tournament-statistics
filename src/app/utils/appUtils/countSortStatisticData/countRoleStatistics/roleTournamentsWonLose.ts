import {
    ITournamentDb,
    ITournamentDbRole
} from "../../../../ts/models/ITournamentDb";

const roleTournamentsWonLose = (tournaments: ITournamentDb[]) => {
    const roleTournamentsWonSet = new Set<ITournamentDbRole>();
    const roleTournamentsLoseSet = new Set<ITournamentDbRole>();

    for (let i = 0; i < tournaments.length; i++) {
        if (tournaments[i].Чемпионство !== 0) {
            const role = tournaments[i].Роль;

            if (!roleTournamentsWonSet.has(role)) {
                roleTournamentsWonSet.add(tournaments[i].Роль);
            }
        }

        if (tournaments[i]["Винрейт "] === 0) {
            const role = tournaments[i].Роль;
            if (!roleTournamentsLoseSet.has(role)) {
                roleTournamentsLoseSet.add(tournaments[i].Роль);
            }
        }
    }

    return {
        roleTournamentsWon: Array.from(roleTournamentsWonSet),
        roleTournamentsLose: Array.from(roleTournamentsLoseSet)
    };
};

export default roleTournamentsWonLose;
