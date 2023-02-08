import teams from '../../teams';
import { litmusda } from '../../events';
import { TeamOrderType } from '../../../../types/Team.type';
import { getScores } from '../../get-scores';

const state: TeamOrderType = {
    event: litmusda.jazzChant,
    results: {
        first : null,
        second: null,
        third : null
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
