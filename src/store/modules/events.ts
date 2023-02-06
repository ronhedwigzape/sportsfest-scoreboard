import { EventsType } from '../../types/Event.type';

export const sports:EventsType = {
    basketball: {
        key   : 'basketball',
        name  : 'Basketball',
        points: {
            first : 20,
            second: 10,
            third : 5
        }
    },
    volleyball: {
        key   : 'volleyball',
        name  : 'Volleyball',
        points: {
            first : 20,
            second: 10,
            third : 5
        }
    },
};

export const litmusda:EventsType = {
    oration: {
        key   : 'oration',
        name  : 'Oration',
        points: {
            first : 10,
            second: 5,
            third : 2
        }
    },
    vocalSolo: {
        key   : 'vocalSolo',
        name  : 'Vocal Solo',
        points: {
            first : 10,
            second: 5,
            third : 2
        }
    },
    vocalDuet: {
        key   : 'vocalDuet',
        name  : 'Vocal Duet',
        points: {
            first : 5,
            second: 3,
            third : 2
        }
    },
    acousticBand: {
        key   : 'acousticBand',
        name  : 'Acoustic Band',
        points: {
            first : 8,
            second: 6,
            third : 4
        }
    },
};
