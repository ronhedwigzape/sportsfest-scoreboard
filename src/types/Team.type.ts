import { EventType } from './Event.type';

export type TeamColorType = 'red' | 'yellow' | 'blue';

export type TeamType = {
    color: TeamColorType,
    name : string
}

export type TeamsType = {
    [key in TeamColorType]: TeamType
};

export type TeamOrderType = {
    event: EventType,
    results: {
        first : TeamType | null,
        second: TeamType | null,
        third : TeamType | null
    }
};

export type TeamScoreType = any | {
    [key in TeamColorType]: number
};
