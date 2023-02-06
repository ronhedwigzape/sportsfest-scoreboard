import teams from './teams';
import { sports } from './events';
import { litmusda } from './events';
import { TeamOrderType, TeamScoreType } from '../../types/Team.type';

// combine sports and litmusda
const events = {
    ...sports,
    ...litmusda
}

export const getScores = (state: TeamOrderType) => {
    let scores: TeamScoreType = {};

    // initialize score keys
    for(const teamColor in teams) {
        scores[teamColor] = 0;
    }

    // assign teams scores
    for(const teamColor in teams) {
        if(state.results.first) {
            if(teamColor == state.results.first.color)
                scores[teamColor] = events[state.event.key].points.first;
        }
        if(state.results.second) {
            if(teamColor == state.results.second.color)
                scores[teamColor] = events[state.event.key].points.second;
        }
        if(state.results.third) {
            if(teamColor == state.results.third.color)
                scores[teamColor] = events[state.event.key].points.third;
        }
    }
    return scores;
};
