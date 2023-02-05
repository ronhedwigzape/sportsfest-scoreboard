import teams from './teams';
import { sports } from './events';
import { litmusda } from './events';
import { TeamOrderType, TeamScoreType } from '../../types/Team.type';

// combine sports and litmusda
const events = {
    ...sports,
    ...litmusda
}

const getScores = (state: TeamOrderType) => {
    let scores: TeamScoreType = {};
    const teamsArray = Object.values(teams);
    for(let i=0; i<teamsArray.length; i++) {
        const team = teamsArray[i];
        if(state.results.first) {
            if(team.color == state.results.first.color)
                scores[team.color] = events[state.event.key].points.first;
        }
        if(state.results.second) {
            if(team.color == state.results.second.color)
                scores[team.color] = events[state.event.key].points.second;
        }
        if(state.results.third) {
            if(team.color == state.results.third.color)
                scores[team.color] = events[state.event.key].points.third;
        }
    }
    return scores;
};

export default getScores;
