import teams from '../../teams';
import { sports } from '../../events';
import { TeamOrderType } from '../../../../types/Team.type';
import { getScores } from '../../get-scores';

const state: TeamOrderType = {
    event: sports.volleyball,
    results: {
        first : teams.blue,
        second: teams.red,
        third : teams.yellow
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
