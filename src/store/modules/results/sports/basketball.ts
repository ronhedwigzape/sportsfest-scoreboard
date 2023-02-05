import teams from '../../teams';
import { sports } from '../../events';
import { TeamOrderType } from '../../../../types/Team.type';
import { getScores } from '../../get-scores';

const state: TeamOrderType = {
    event: sports.basketball,
    results: {
        first : teams.yellow,
        second: teams.blue,
        third : teams.red
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
