import teams from '../../teams';
import { litmusda } from '../../events';
import { TeamOrderType } from '../../../../types/Team.type';
import { getScores } from '../../get-scores';

const state: TeamOrderType = {
    event: litmusda.folkDance,
    results: {
        first : teams.red,
        second: teams.green,
        third : teams.blue
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
