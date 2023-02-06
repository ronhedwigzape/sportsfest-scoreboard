import { createStore } from 'vuex';
import teams from './modules/teams';
import { sports } from './modules/events';
import { litmusda } from './modules/events';


// results (sports)
import basketball from './modules/results/sports/basketball';
import volleyball from './modules/results/sports/volleyball';


// results (litmusda)
import oration from './modules/results/litmusda/oration';
import extempoSpeaking from './modules/results/litmusda/extempo-speaking';
import balagtasan from './modules/results/litmusda/balagtasan';
import tigsik from './modules/results/litmusda/tigsik';
import jazzChant from './modules/results/litmusda/jazz-chant';
import vocalSolo from './modules/results/litmusda/vocal-solo';
import vocalDuet from './modules/results/litmusda/vocal-duet';
import acousticBand from './modules/results/litmusda/acoustic-band';
import jazz from './modules/results/litmusda/jazz';
import folkDance from './modules/results/litmusda/folk-dance';
import hiphop from './modules/results/litmusda/hiphop';


// results (skills)




export default createStore({

    state: {
        teams: teams,
        events: {
            sports,
            litmusda
        }
    },

    getters: {

    },

    mutations: {

    },

    modules: {
        basketball,
        volleyball,
        oration,
        vocalSolo,
        vocalDuet,
        acousticBand
    }

});
