import { createStore } from 'vuex';
import teams from './modules/teams';
import { sports } from './modules/events';
import { litmusda } from './modules/events';


// results (sports)
import basketball from './modules/results/sports/basketball';
import volleyball from './modules/results/sports/volleyball';


// results (litmusda)
import oration from './modules/results/litmusda/oration';
import extemporaneousSpeaking from './modules/results/litmusda/extemporaneous-speaking';
import balagtasan from './modules/results/litmusda/balagtasan';
import tigsik from './modules/results/litmusda/tigsik';
import jazzChant from './modules/results/litmusda/jazz-chant';
import vocalSoloMale from './modules/results/litmusda/vocal-solo-male';
import vocalSoloFemale from './modules/results/litmusda/vocal-solo-female';
import vocalDuet from './modules/results/litmusda/vocal-duet';
import acousticBand from './modules/results/litmusda/acoustic-band';
import jazz from './modules/results/litmusda/jazz';
import folkDance from './modules/results/litmusda/folk-dance';
import hiphop from './modules/results/litmusda/hiphop';
import cheerDance from './modules/results/litmusda/cheer-dance';


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
        teams   : state => state.teams,
        sports  : state => state.events.sports,
        litmusda: state => state.events.litmusda
    },

    mutations: {

    },

    modules: {
        basketball,
        volleyball,
        oration,
        extemporaneousSpeaking,
        balagtasan,
        tigsik,
        jazzChant,
        vocalSoloMale,
        vocalSoloFemale,
        vocalDuet,
        acousticBand,
        jazz,
        folkDance,
        hiphop,
        cheerDance
    }

});
