import { IKey } from "../types/keyboard";

export const KEYS: { [key: string]: IKey } = {
    a: { code: "a", glyph: "A" },
    b: { code: "b", glyph: "B" },
    c: { code: "c", glyph: "C" },
    d: { code: "d", glyph: "D" },
    e: { code: "e", glyph: "E" },
    f: { code: "f", glyph: "F" },
    g: { code: "g", glyph: "G" },
    h: { code: "h", glyph: "H" },
    i: { code: "i", glyph: "I" },
    j: { code: "j", glyph: "J" },
    k: { code: "k", glyph: "K" },
    l: { code: "l", glyph: "L" },
    m: { code: "m", glyph: "M" },
    n: { code: "n", glyph: "N" },
    o: { code: "o", glyph: "O" },
    p: { code: "p", glyph: "P" },
    q: { code: "q", glyph: "Q" },
    r: { code: "r", glyph: "R" },
    s: { code: "s", glyph: "S" },
    t: { code: "t", glyph: "T" },
    u: { code: "u", glyph: "U" },
    v: { code: "v", glyph: "V" },
    w: { code: "w", glyph: "W" },
    x: { code: "x", glyph: "X" },
    y: { code: "y", glyph: "Y" },
    z: { code: "z", glyph: "Z" },
    ct: { code: "ct", glyph: "Ç" },
    nn: { code: "nn", glyph: "Ñ" },
    k0: { code: "k0", glyph: "0" },
    k1: { code: "k1", glyph: "1" },
    k2: { code: "k2", glyph: "2" },
    k3: { code: "k3", glyph: "3" },
    k4: { code: "k4", glyph: "4" },
    k5: { code: "k5", glyph: "5" },
    k6: { code: "k6", glyph: "6" },
    k7: { code: "k7", glyph: "7" },
    k8: { code: "k8", glyph: "8" },
    k9: { code: "k9", glyph: "9" },
    n0: { code: "n0", glyph: "0", desc: "Numpad 0" },
    n1: { code: "n1", glyph: "1", desc: "Numpad 1" },
    n2: { code: "n2", glyph: "2", desc: "Numpad 2" },
    n3: { code: "n3", glyph: "3", desc: "Numpad 3" },
    n4: { code: "n4", glyph: "4", desc: "Numpad 4" },
    n5: { code: "n5", glyph: "5", desc: "Numpad 5" },
    n6: { code: "n6", glyph: "6", desc: "Numpad 6" },
    n7: { code: "n7", glyph: "7", desc: "Numpad 7" },
    n8: { code: "n8", glyph: "8", desc: "Numpad 8" },
    n9: { code: "n9", glyph: "9", desc: "Numpad 9" },
    f1: { code: "f1", glyph: "F1" },
    f2: { code: "f2", glyph: "F2" },
    f3: { code: "f3", glyph: "F3" },
    f4: { code: "f4", glyph: "F4" },
    f5: { code: "f5", glyph: "F5" },
    f6: { code: "f6", glyph: "F6" },
    f7: { code: "f7", glyph: "F7" },
    f8: { code: "f8", glyph: "F8" },
    f9: { code: "f9", glyph: "F9" },
    f10: { code: "f10", glyph: "F10" },
    f11: { code: "f11", glyph: "F11" },
    f12: { code: "f12", glyph: "F12" },
    esc: { code: "esc", glyph: "esc", desc: "Escape" },
    lsuper: { code: "lsuper", glyph: "⌘", desc: "Left Super" },
    rsuper: { code: "rsuper", glyph: "⌘" },
    lctrl: { code: "lctrl", glyph: "ctrl", desc: "Control" },
    rctrl: { code: "rctrl", glyph: "ctrl" },
    lalt: { code: "lalt", glyph: "alt", desc: "Left Alt" },
    ralt: { code: "ralt", glyph: "alt", desc: "Right Alt" },
    lshift: { code: "lshift", glyph: "⇧", desc: "Left Shift" },
    rshift: { code: "rshift", glyph: "⇧", desc: "Right Shift" },
    tilde: { code: "tilde", glyph: "~", desc: "Tilde" },
    minus: { code: "minus", glyph: "-", desc: "Minus" },
    equal: { code: "equal", glyph: "=", desc: "Equal" },
    backspace: { code: "backspace", glyph: "⌫", desc: "Backspace" },
    tab: { code: "tab", glyph: "⭾", desc: "Tab" },
    openbracket: { code: "openbracket", glyph: "[", desc: "Open Bracket" },
    closebracket: { code: "colsebracket", glyph: "]", desc: "Close Bracket" },
    backslash: { code: "backslash", glyph: "\\", desc: "Bachslash" },
    caps: { code: "caps", glyph: "⇪", desc: "Caps Lock" },
    semicolon: { code: "semicolon", glyph: ";", desc: "Semicolon" },
    singlequote: { code: "singlequote", glyph: "'", desc: "Single Quote" },
    return: { code: "return", glyph: "↩", desc: "Return" },
    comma: { code: "comma", glyph: "," },
    dot: { code: "dot", glyph: "." },
    slash: { code: "slash", glyph: "/", desc: "Forward Slash" },
    space: { code: "space", glyph: "␣", desc: "Space" },
    fn: { code: "fn", glyph: "fn", desc: "Function" },
    prt: { code: "prt", glyph: "pr", desc: "Print Screen" },
    slk: { code: "slk", glyph: "sk", desc: "Screen Lock" },
    pause: { code: "pause", glyph: "pa", desc: "Pause" },
    ins: { code: "ins", glyph: "in", desc: "Insert" },
    home: { code: "home", glyph: "hm", desc: "Home" },
    pgup: { code: "pgup", glyph: "pgup", desc: "Page Up" },
    pgdn: { code: "pgdn", glyph: "pgdn", desc: "Page Down" },
    del: { code: "del", glyph: "dl", desc: "Delete" },
    end: { code: "end", glyph: "en", desc: "End" },
    uparr: { code: "uparr", glyph: "↑", desc: "Up Arrow" },
    larr: { code: "larr", glyph: "←", desc: "Left Arrow" },
    darr: { code: "darr", glyph: "↓", desc: "Down Arrow" },
    rarr: { code: "rarr", glyph: "→", desc: "Right Arrow" },
    nlk: { code: "nlk", glyph: "nl", desc: "Num Lock" },
    ndiv: { code: "ndiv", glyph: "/", desc: "Numpad Divide" },
    nmul: { code: "nmul", glyph: "*", desc: "Asterix" },
    ndot: { code: "ndot", glyph: "." },
    nmin: { code: "nmin", glyph: "-" },
    nplus: { code: "nplus", glyph: "+" },
    nreturn: { code: "nreturn", glyph: "↵", desc: "Numpad Return" },
};