import { ITournamentDb } from "../../../../ts/models/ITournamentDb";

const countAverageProximity = (tournaments: ITournamentDb[]) => {
    let result = 0;

    const proximityFiltered = tournaments.filter(
        (tour) => tour["Средняя близость матчей"] !== 0
    );

    if (proximityFiltered.length !== 0) {
        const roundProximity = proximityFiltered.map((tour) =>
            tour["Средняя близость матчей"] !== 0
                ? {
                      ...tour,
                      "Средняя близость матчей":
                          tour["Средняя близость матчей"].toFixed(2)
                  }
                : tour
        );

        result =
            roundProximity.reduce(
                (acc, value) => acc + Number(value["Средняя близость матчей"]),
                0
            ) / roundProximity.length;

        result = Number(result.toFixed(2));
    }

    return result;
};

export default countAverageProximity;
