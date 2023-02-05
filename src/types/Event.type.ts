export type EventType = {
    key : string,
    name: string,
    points: {
        first : number,
        second: number,
        third : number
    }
};

export type EventsType = {
    [key: string]: EventType
};
