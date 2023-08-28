import { ITournamentDb } from "../../../ts/models/ITournamentDb";

const sortBestResult = (tournaments: ITournamentDb[]) => {
    const sortLastTour = tournaments.sort((a, b) => b._id - a._id);
    const bestResult = sortLastTour.sort((a, b) => a.Место - b.Место);
    return bestResult[0];
};

export default sortBestResult;
