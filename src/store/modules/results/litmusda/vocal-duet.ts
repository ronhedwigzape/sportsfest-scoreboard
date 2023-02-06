import teams from '../../teams';
import { litmusda } from '../../events';
import { TeamOrderType } from '../../../../types/Team.type';
import { getScores } from '../../get-scores';

const state: TeamOrderType = {
    event: litmusda.vocalDuet,
    results: {
        first : teams.blue,
        second: teams.red,
        third : teams.green
    }
};

export default ({
    namespaced: true,
    state,
    getters: {
        scores: (state:TeamOrderType) => {
            return getScores(state);
        }
    }
});
