export interface KeybindData {
    actions: Map<string, ActionInfo>;
    combos: KeyCombo[];
}

export interface KeyCombo {
    action_id: string;
    modifiers: IKey[];
    keys: IKey[];
}

export interface ActionInfo {
    name?: string;
    desc?: string;
}

export interface IKey {
    code: string;
    glyph: string;
    desc?: string;
}
