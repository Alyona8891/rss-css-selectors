export interface ParamsElementCreator {
    tag: string;
    tagClases: string[];
    textContent: string;
    callback?: ((params?: Event) => void) | null;
}
