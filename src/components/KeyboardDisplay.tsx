import { Empty, KeyBtn } from "./KeyBtn";
import { KEYS } from "./Keys";

function KeyboardDisplay() {
    return (
        <div className="w-min rounded-lg p-1 outline outline-1">
            <div className="flex flex-row gap-1">
                <div className="flex flex-col">
                    <div className="mb-1 flex flex-row justify-between">
                        <div className="flex flex-row">
                            <KeyBtn keyD={KEYS.esc} />
                        </div>
                        <div className="flex flex-row">
                            <KeyBtn keyD={KEYS.f1} />
                            <KeyBtn keyD={KEYS.f2} />
                            <KeyBtn keyD={KEYS.f3} />
                            <KeyBtn keyD={KEYS.f4} />
                        </div>
                        <div className="flex flex-row">
                            <KeyBtn keyD={KEYS.f5} />
                            <KeyBtn keyD={KEYS.f6} />
                            <KeyBtn keyD={KEYS.f7} />
                            <KeyBtn keyD={KEYS.f8} />
                        </div>
                        <div className="flex flex-row">
                            <KeyBtn keyD={KEYS.f9} />
                            <KeyBtn keyD={KEYS.f10} />
                            <KeyBtn keyD={KEYS.f11} />
                            <KeyBtn keyD={KEYS.f12} />
                        </div>
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn keyD={KEYS.tilde} />
                        <KeyBtn keyD={KEYS.k1} />
                        <KeyBtn keyD={KEYS.k2} />
                        <KeyBtn keyD={KEYS.k3} />
                        <KeyBtn keyD={KEYS.k4} />
                        <KeyBtn keyD={KEYS.k5} />
                        <KeyBtn keyD={KEYS.k6} />
                        <KeyBtn keyD={KEYS.k7} />
                        <KeyBtn keyD={KEYS.k8} />
                        <KeyBtn keyD={KEYS.k9} />
                        <KeyBtn keyD={KEYS.k0} />
                        <KeyBtn keyD={KEYS.minus} />
                        <KeyBtn keyD={KEYS.equal} />
                        <KeyBtn keyD={KEYS.backspace} width={2} />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn keyD={KEYS.tab} width={1.5} />
                        <KeyBtn keyD={KEYS.q} />
                        <KeyBtn keyD={KEYS.w} />
                        <KeyBtn keyD={KEYS.e} />
                        <KeyBtn keyD={KEYS.r} />
                        <KeyBtn keyD={KEYS.t} />
                        <KeyBtn keyD={KEYS.y} />
                        <KeyBtn keyD={KEYS.u} />
                        <KeyBtn keyD={KEYS.i} />
                        <KeyBtn keyD={KEYS.o} />
                        <KeyBtn keyD={KEYS.p} />
                        <KeyBtn keyD={KEYS.openbracket} />
                        <KeyBtn keyD={{ code: "closebracket", glyph: "]" }} />
                        <KeyBtn keyD={KEYS.backslash} width={1.5} />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn keyD={KEYS.caps} width={1.75} />
                        <KeyBtn keyD={KEYS.a} />
                        <KeyBtn keyD={KEYS.s} />
                        <KeyBtn keyD={KEYS.d} />
                        <KeyBtn keyD={KEYS.f} />
                        <KeyBtn keyD={KEYS.g} />
                        <KeyBtn keyD={KEYS.h} />
                        <KeyBtn keyD={KEYS.j} />
                        <KeyBtn keyD={KEYS.k} />
                        <KeyBtn keyD={KEYS.l} />
                        <KeyBtn keyD={KEYS.semicolon} />
                        <KeyBtn keyD={KEYS.singlequote} />
                        <KeyBtn keyD={KEYS.return} width={2.25} />{" "}
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn keyD={KEYS.lshift} width={2.25} modifier />
                        <KeyBtn keyD={KEYS.z} />
                        <KeyBtn keyD={KEYS.x} />
                        <KeyBtn keyD={KEYS.c} />
                        <KeyBtn keyD={KEYS.v} />
                        <KeyBtn keyD={KEYS.b} />
                        <KeyBtn keyD={KEYS.n} />
                        <KeyBtn keyD={KEYS.m} />
                        <KeyBtn keyD={KEYS.comma} />
                        <KeyBtn keyD={KEYS.dot} />
                        <KeyBtn keyD={KEYS.slash} />
                        <KeyBtn keyD={KEYS.rshift} width={2.75} modifier />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn keyD={KEYS.lctrl} width={1.25} modifier />
                        <KeyBtn keyD={KEYS.lsuper} width={1.25} modifier />
                        <KeyBtn keyD={KEYS.lalt} width={1.25} modifier />
                        <KeyBtn keyD={KEYS.space} width={6.25} />
                        <KeyBtn keyD={KEYS.ralt} width={1.25} modifier />
                        <KeyBtn keyD={KEYS.rsuper} width={1.25} modifier />
                        <KeyBtn keyD={KEYS.fn} width={1.25} modifier />
                        <KeyBtn keyD={KEYS.rctrl} width={1.25} modifier />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mb-1 flex flex-row items-start">
                        <KeyBtn keyD={KEYS.prt} />
                        <KeyBtn keyD={KEYS.slk} />
                        <KeyBtn keyD={KEYS.pause} />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn keyD={KEYS.ins} />
                        <KeyBtn keyD={KEYS.home} />
                        <KeyBtn keyD={KEYS.pgup} />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn keyD={KEYS.del} />
                        <KeyBtn keyD={KEYS.end} />
                        <KeyBtn keyD={KEYS.pgdn} />
                    </div>
                    <div className="flex flex-row items-start">
                        <Empty />
                    </div>
                    <div className="flex flex-row items-start">
                        <Empty />
                        <KeyBtn keyD={KEYS.uparr} />
                        <Empty />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn keyD={KEYS.larr} />
                        <KeyBtn keyD={KEYS.darr} />
                        <KeyBtn keyD={KEYS.rarr} />
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div className="mb-1 flex flex-row items-start">
                            <Empty />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn keyD={KEYS.nlk} />
                            <KeyBtn keyD={KEYS.ndiv} />
                            <KeyBtn keyD={KEYS.nmul} />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn keyD={KEYS.n7} />
                            <KeyBtn keyD={KEYS.n8} />
                            <KeyBtn keyD={KEYS.n9} />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn keyD={KEYS.n4} />
                            <KeyBtn keyD={KEYS.n5} />
                            <KeyBtn keyD={KEYS.n6} />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn keyD={KEYS.n1} />
                            <KeyBtn keyD={KEYS.n2} />
                            <KeyBtn keyD={KEYS.n3} />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn keyD={KEYS.n0} width={2} />
                            <KeyBtn keyD={KEYS.ndot} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-1 flex flex-row items-start">
                            <Empty />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn keyD={KEYS.nmin} />
                        </div>
                        <KeyBtn keyD={KEYS.nplus} height={2} />
                        <KeyBtn keyD={KEYS.nreturn} height={2} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KeyboardDisplay;
