import { Empty, KeyBtn } from "./KeyBtn";
import { KEYS } from "./Keys";

function KeyBtnboardDisplay() {
    return (
        <div className="w-min rounded-lg p-1 outline outline-1">
            <div className="flex flex-row gap-1">
                <div className="flex flex-col">
                    <div className="mb-1 flex flex-row justify-between">
                        <div className="flex flex-row">
                            <KeyBtn Okey={KEYS.esc} />
                        </div>
                        <div className="flex flex-row">
                            <KeyBtn Okey={KEYS.f1} />
                            <KeyBtn Okey={KEYS.f2} />
                            <KeyBtn Okey={KEYS.f3} />
                            <KeyBtn Okey={KEYS.f4} />
                        </div>
                        <div className="flex flex-row">
                            <KeyBtn Okey={KEYS.f5} />
                            <KeyBtn Okey={KEYS.f6} />
                            <KeyBtn Okey={KEYS.f7} />
                            <KeyBtn Okey={KEYS.f8} />
                        </div>
                        <div className="flex flex-row">
                            <KeyBtn Okey={KEYS.f9} />
                            <KeyBtn Okey={KEYS.f10} />
                            <KeyBtn Okey={KEYS.f11} />
                            <KeyBtn Okey={KEYS.f12} />
                        </div>
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn Okey={KEYS.tilde} />
                        <KeyBtn Okey={KEYS.k1} />
                        <KeyBtn Okey={KEYS.k2} />
                        <KeyBtn Okey={KEYS.k3} />
                        <KeyBtn Okey={KEYS.k4} />
                        <KeyBtn Okey={KEYS.k5} />
                        <KeyBtn Okey={KEYS.k6} />
                        <KeyBtn Okey={KEYS.k7} />
                        <KeyBtn Okey={KEYS.k8} />
                        <KeyBtn Okey={KEYS.k9} />
                        <KeyBtn Okey={KEYS.k0} />
                        <KeyBtn Okey={KEYS.minus} />
                        <KeyBtn Okey={KEYS.equal} />
                        <KeyBtn Okey={KEYS.backspace} width={2} />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn Okey={KEYS.tab} width={1.5} />
                        <KeyBtn Okey={KEYS.q} />
                        <KeyBtn Okey={KEYS.w} />
                        <KeyBtn Okey={KEYS.e} />
                        <KeyBtn Okey={KEYS.r} />
                        <KeyBtn Okey={KEYS.t} />
                        <KeyBtn Okey={KEYS.y} />
                        <KeyBtn Okey={KEYS.u} />
                        <KeyBtn Okey={KEYS.i} />
                        <KeyBtn Okey={KEYS.o} />
                        <KeyBtn Okey={KEYS.p} />
                        <KeyBtn Okey={KEYS.openbracket} />
                        <KeyBtn Okey={{ code: "closebracket", glyph: "]" }} />
                        <KeyBtn Okey={KEYS.backslash} width={1.5} />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn Okey={KEYS.caps} width={1.75} />
                        <KeyBtn Okey={KEYS.a} />
                        <KeyBtn Okey={KEYS.s} />
                        <KeyBtn Okey={KEYS.d} />
                        <KeyBtn Okey={KEYS.f} />
                        <KeyBtn Okey={KEYS.g} />
                        <KeyBtn Okey={KEYS.h} />
                        <KeyBtn Okey={KEYS.j} />
                        <KeyBtn Okey={KEYS.k} />
                        <KeyBtn Okey={KEYS.l} />
                        <KeyBtn Okey={KEYS.semicolon} />
                        <KeyBtn Okey={KEYS.singlequote} />
                        <KeyBtn Okey={KEYS.return} width={2.25} />{" "}
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn Okey={KEYS.lshift} width={2.25} modifier />
                        <KeyBtn Okey={KEYS.z} />
                        <KeyBtn Okey={KEYS.x} />
                        <KeyBtn Okey={KEYS.c} />
                        <KeyBtn Okey={KEYS.v} />
                        <KeyBtn Okey={KEYS.b} />
                        <KeyBtn Okey={KEYS.n} />
                        <KeyBtn Okey={KEYS.m} />
                        <KeyBtn Okey={KEYS.comma} />
                        <KeyBtn Okey={KEYS.dot} />
                        <KeyBtn Okey={KEYS.slash} />
                        <KeyBtn Okey={KEYS.rshift} width={2.75} modifier />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn Okey={KEYS.lctrl} width={1.25} modifier />
                        <KeyBtn Okey={KEYS.lsuper} width={1.25} modifier />
                        <KeyBtn Okey={KEYS.lalt} width={1.25} modifier />
                        <KeyBtn Okey={KEYS.space} width={6.25} />
                        <KeyBtn Okey={KEYS.ralt} width={1.25} modifier />
                        <KeyBtn Okey={KEYS.rsuper} width={1.25} modifier />
                        <KeyBtn Okey={KEYS.fn} width={1.25} modifier />
                        <KeyBtn Okey={KEYS.rctrl} width={1.25} modifier />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mb-1 flex flex-row items-start">
                        <KeyBtn Okey={KEYS.prt} />
                        <KeyBtn Okey={KEYS.slk} />
                        <KeyBtn Okey={KEYS.pause} />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn Okey={KEYS.ins} />
                        <KeyBtn Okey={KEYS.home} />
                        <KeyBtn Okey={KEYS.pgup} />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn Okey={KEYS.del} />
                        <KeyBtn Okey={KEYS.end} />
                        <KeyBtn Okey={KEYS.pgdn} />
                    </div>
                    <div className="flex flex-row items-start">
                        <Empty />
                    </div>
                    <div className="flex flex-row items-start">
                        <Empty />
                        <KeyBtn Okey={KEYS.uparr} />
                        <Empty />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn Okey={KEYS.larr} />
                        <KeyBtn Okey={KEYS.darr} />
                        <KeyBtn Okey={KEYS.rarr} />
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div className="mb-1 flex flex-row items-start">
                            <Empty />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn Okey={KEYS.nlk} />
                            <KeyBtn Okey={KEYS.ndiv} />
                            <KeyBtn Okey={KEYS.nmul} />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn Okey={KEYS.n7} />
                            <KeyBtn Okey={KEYS.n8} />
                            <KeyBtn Okey={KEYS.n9} />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn Okey={KEYS.n4} />
                            <KeyBtn Okey={KEYS.n5} />
                            <KeyBtn Okey={KEYS.n6} />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn Okey={KEYS.n1} />
                            <KeyBtn Okey={KEYS.n2} />
                            <KeyBtn Okey={KEYS.n3} />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn Okey={KEYS.n0} width={2} />
                            <KeyBtn Okey={KEYS.ndot} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-1 flex flex-row items-start">
                            <Empty />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn Okey={KEYS.nmin} />
                        </div>
                        <KeyBtn Okey={KEYS.nplus} height={2} />
                        <KeyBtn Okey={KEYS.nreturn} height={2} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KeyBtnboardDisplay;
