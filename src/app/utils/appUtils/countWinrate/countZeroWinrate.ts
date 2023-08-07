import { ITournamentDb } from "../../../ts/models/ITournamentDb";

const countZeroWinrate = (tournaments: ITournamentDb[]) => {
    return tournaments.reduce(
        (acc, tour) => (tour["Винрейт "] === 0 ? acc + 1 : acc),
        0
    );
};

export default countZeroWinrate;
