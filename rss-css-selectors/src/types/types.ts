export interface ParamsElementCreator {
    tag: string;
    tagClases: string[];
    textContent: string;
    callback: ((params?: Event) => void) | null;
}

export interface ParamsBlockPlate {
    tag: string;
    class: string;
    child: null | ParamsBlockPlate;
}
