export interface ParametersElementCreator {
    tag: string;
    tagClasses: string[] | null;
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

type StateUnit = {
    [key: string]: boolean;
};

export interface State {
    [key: string]: StateUnit;
}

export type StateArray = Array<[string, { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentLevel: boolean }]>;
