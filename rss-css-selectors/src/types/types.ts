export interface ParametersElementCreator {
    tag: string;
    tagClases: string[] | null;
    textContent: string;
    callback: CallbackObject | FunctionObject | null;
}

export interface ParamsBlockPlate {
    tag: string;
    class: string[] | null;
    id: string | null;
    child: null | ParamsBlockPlate[];
}

export type CallbackObject = {
    [key: string]: (event: Event | KeyboardEvent) => void;
};
type FunctionType = {
    [key: string]: (event: Event | KeyboardEvent) => void;
};
export type FunctionObject = {
    [key: string]: FunctionType;
};
type Obj = {
    tag: string;
    selector?: string;
    innerElement: Obj[] | string;
};

export interface Screenplay {
    [key: string]: {
        help: string;
        title: string;
        parametersElements: {
            tag: string;
            class: string[] | null;
            id: string | null;
            child: null | ParamsBlockPlate[];
        }[];
        parametersHtmlLines: Obj[];
    };
}
export interface ParametersHtmlLines {
    tag: string;
    selector?: string;
    innerElement: Obj[] | string;
}
export interface State {
    1: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentLevel: boolean };
    2: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentLevel: boolean };
    3: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentLevel: boolean };
    4: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentLevel: boolean };
    5: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentLevel: boolean };
    6: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentLevel: boolean };
    7: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentLevel: boolean };
    8: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentLevel: boolean };
    9: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentLevel: boolean };
    10: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentLevel: boolean };
}

export type StateArray = Array<[string, { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentLevel: boolean }]>;
