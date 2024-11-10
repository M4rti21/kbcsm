export type KeyCombo = {
    mods: IKey[];
    keys: IKey[];
    desc?: string;
    group?: string;
};

export type IKey = {
    code: string;
    glyph: string;
    desc?: string;
};
