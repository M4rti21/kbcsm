export type IKey = {
    code: string;
    glyph: string;
    desc?: string;
};

export type KeyCombo = {
    id: string;
    mods: IKey[];
    keys: IKey[];
    desc: string;
};

export type Collection = {
    name: string;
    groups: { [key: string]: { [key: string]: KeyCombo } };
};
