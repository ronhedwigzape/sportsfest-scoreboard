import { createStore } from 'vuex';
import teams from './modules/teams';
import { sports } from './modules/events';
import { litmusda } from './modules/events';


// results (sports)
import basketball from './modules/results/sports/basketball';
import volleyball from './modules/results/sports/volleyball';


// results (litmusda)
import vocalSolo from './modules/results/litmusda/vocal-solo';
import vocalDuet from './modules/results/litmusda/vocal-duet';


export default createStore({

    state: {
        teams: teams,
        events: {
            sports,
            litmusda
        }
    },

    getters: {
        teams   : state => state.teams,
        sports  : state => state.events.sports,
        litmusda: state => state.events.litmusda
    },

    mutations: {

    },

    modules: {
        basketball,
        volleyball,
        vocalSolo,
        vocalDuet
    }

});
