export interface ParamsElementCreator {
    tag: string;
    tagClases: string[];
    textContent: string;
    callback: CallbackObject | null;
}

export interface ParamsBlockPlate {
    tag: string;
    class: string;
    child: null | ParamsBlockPlate;
}

export type CallbackObject = {
    [key: string]: (event: Event) => void;
};
type Obj = {
    tag: string;
    selector?: string;
    inner: Obj[] | string;
};

export interface Screenplay {
    [key: string]: {
        help: string;
        title: string;
        paramsBlockPlates: {
            tag: string;
            class: string;
            child: null | ParamsBlockPlate;
        }[];
        paramsBlockHtml: Obj[];
    };
}
export interface ParamsBlockHtmlElem {
    tag: string;
    selector?: string;
    inner: Obj[] | string;
}
export interface State {
    1: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentTask: boolean };
    2: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentTask: boolean };
    3: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentTask: boolean };
    4: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentTask: boolean };
    5: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentTask: boolean };
    6: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentTask: boolean };
    7: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentTask: boolean };
    8: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentTask: boolean };
    9: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentTask: boolean };
    10: { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentTask: boolean };
}

export type NewArr = Array<[string, { isFinished: boolean; isFinishedWithHelp: boolean; isCurrentTask: boolean }]>;
