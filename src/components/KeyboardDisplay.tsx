import { Empty, KeyBtn } from "./KeyBtn";
import { KEYS } from "./Keys";

function KeyboardDisplay(p: { scale: number }) {
    return (
        <div className="w-min rounded-lg p-1 outline outline-1">
            <div className="flex flex-row gap-1">
                <div className="flex flex-col">
                    <div className="mb-1 flex flex-row justify-between">
                        <div className="flex flex-row">
                            <KeyBtn scale={p.scale} keyD={KEYS.esc} />
                        </div>
                        <div className="flex flex-row">
                            <KeyBtn scale={p.scale} keyD={KEYS.f1} />
                            <KeyBtn scale={p.scale} keyD={KEYS.f2} />
                            <KeyBtn scale={p.scale} keyD={KEYS.f3} />
                            <KeyBtn scale={p.scale} keyD={KEYS.f4} />
                        </div>
                        <div className="flex flex-row">
                            <KeyBtn scale={p.scale} keyD={KEYS.f5} />
                            <KeyBtn scale={p.scale} keyD={KEYS.f6} />
                            <KeyBtn scale={p.scale} keyD={KEYS.f7} />
                            <KeyBtn scale={p.scale} keyD={KEYS.f8} />
                        </div>
                        <div className="flex flex-row">
                            <KeyBtn scale={p.scale} keyD={KEYS.f9} />
                            <KeyBtn scale={p.scale} keyD={KEYS.f10} />
                            <KeyBtn scale={p.scale} keyD={KEYS.f11} />
                            <KeyBtn scale={p.scale} keyD={KEYS.f12} />
                        </div>
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn scale={p.scale} keyD={KEYS.tilde} />
                        <KeyBtn scale={p.scale} keyD={KEYS.k1} />
                        <KeyBtn scale={p.scale} keyD={KEYS.k2} />
                        <KeyBtn scale={p.scale} keyD={KEYS.k3} />
                        <KeyBtn scale={p.scale} keyD={KEYS.k4} />
                        <KeyBtn scale={p.scale} keyD={KEYS.k5} />
                        <KeyBtn scale={p.scale} keyD={KEYS.k6} />
                        <KeyBtn scale={p.scale} keyD={KEYS.k7} />
                        <KeyBtn scale={p.scale} keyD={KEYS.k8} />
                        <KeyBtn scale={p.scale} keyD={KEYS.k9} />
                        <KeyBtn scale={p.scale} keyD={KEYS.k0} />
                        <KeyBtn scale={p.scale} keyD={KEYS.minus} />
                        <KeyBtn scale={p.scale} keyD={KEYS.equal} />
                        <KeyBtn
                            scale={p.scale}
                            keyD={KEYS.backspace}
                            width={2}
                        />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn scale={p.scale} keyD={KEYS.tab} width={1.5} />
                        <KeyBtn scale={p.scale} keyD={KEYS.q} />
                        <KeyBtn scale={p.scale} keyD={KEYS.w} />
                        <KeyBtn scale={p.scale} keyD={KEYS.e} />
                        <KeyBtn scale={p.scale} keyD={KEYS.r} />
                        <KeyBtn scale={p.scale} keyD={KEYS.t} />
                        <KeyBtn scale={p.scale} keyD={KEYS.y} />
                        <KeyBtn scale={p.scale} keyD={KEYS.u} />
                        <KeyBtn scale={p.scale} keyD={KEYS.i} />
                        <KeyBtn scale={p.scale} keyD={KEYS.o} />
                        <KeyBtn scale={p.scale} keyD={KEYS.p} />
                        <KeyBtn scale={p.scale} keyD={KEYS.openbracket} />
                        <KeyBtn
                            scale={p.scale}
                            keyD={{ code: "closebracket", glyph: "]" }}
                        />
                        <KeyBtn
                            scale={p.scale}
                            keyD={KEYS.backslash}
                            width={1.5}
                        />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn scale={p.scale} keyD={KEYS.caps} width={1.75} />
                        <KeyBtn scale={p.scale} keyD={KEYS.a} />
                        <KeyBtn scale={p.scale} keyD={KEYS.s} />
                        <KeyBtn scale={p.scale} keyD={KEYS.d} />
                        <KeyBtn scale={p.scale} keyD={KEYS.f} />
                        <KeyBtn scale={p.scale} keyD={KEYS.g} />
                        <KeyBtn scale={p.scale} keyD={KEYS.h} />
                        <KeyBtn scale={p.scale} keyD={KEYS.j} />
                        <KeyBtn scale={p.scale} keyD={KEYS.k} />
                        <KeyBtn scale={p.scale} keyD={KEYS.l} />
                        <KeyBtn scale={p.scale} keyD={KEYS.semicolon} />
                        <KeyBtn scale={p.scale} keyD={KEYS.singlequote} />
                        <KeyBtn
                            scale={p.scale}
                            keyD={KEYS.return}
                            width={2.25}
                        />{" "}
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn
                            scale={p.scale}
                            keyD={KEYS.lshift}
                            width={2.25}
                            modifier
                        />
                        <KeyBtn scale={p.scale} keyD={KEYS.z} />
                        <KeyBtn scale={p.scale} keyD={KEYS.x} />
                        <KeyBtn scale={p.scale} keyD={KEYS.c} />
                        <KeyBtn scale={p.scale} keyD={KEYS.v} />
                        <KeyBtn scale={p.scale} keyD={KEYS.b} />
                        <KeyBtn scale={p.scale} keyD={KEYS.n} />
                        <KeyBtn scale={p.scale} keyD={KEYS.m} />
                        <KeyBtn scale={p.scale} keyD={KEYS.comma} />
                        <KeyBtn scale={p.scale} keyD={KEYS.dot} />
                        <KeyBtn scale={p.scale} keyD={KEYS.slash} />
                        <KeyBtn
                            scale={p.scale}
                            keyD={KEYS.rshift}
                            width={2.75}
                            modifier
                        />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn
                            scale={p.scale}
                            keyD={KEYS.lctrl}
                            width={1.25}
                            modifier
                        />
                        <KeyBtn
                            scale={p.scale}
                            keyD={KEYS.lsuper}
                            width={1.25}
                            modifier
                        />
                        <KeyBtn
                            scale={p.scale}
                            keyD={KEYS.lalt}
                            width={1.25}
                            modifier
                        />
                        <KeyBtn
                            scale={p.scale}
                            keyD={KEYS.space}
                            width={6.25}
                        />
                        <KeyBtn
                            scale={p.scale}
                            keyD={KEYS.ralt}
                            width={1.25}
                            modifier
                        />
                        <KeyBtn
                            scale={p.scale}
                            keyD={KEYS.rsuper}
                            width={1.25}
                            modifier
                        />
                        <KeyBtn
                            scale={p.scale}
                            keyD={KEYS.fn}
                            width={1.25}
                            modifier
                        />
                        <KeyBtn
                            scale={p.scale}
                            keyD={KEYS.rctrl}
                            width={1.25}
                            modifier
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mb-1 flex flex-row items-start">
                        <KeyBtn scale={p.scale} keyD={KEYS.prt} />
                        <KeyBtn scale={p.scale} keyD={KEYS.slk} />
                        <KeyBtn scale={p.scale} keyD={KEYS.pause} />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn scale={p.scale} keyD={KEYS.ins} />
                        <KeyBtn scale={p.scale} keyD={KEYS.home} />
                        <KeyBtn scale={p.scale} keyD={KEYS.pgup} />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn scale={p.scale} keyD={KEYS.del} />
                        <KeyBtn scale={p.scale} keyD={KEYS.end} />
                        <KeyBtn scale={p.scale} keyD={KEYS.pgdn} />
                    </div>
                    <div className="flex flex-row items-start">
                        <Empty />
                    </div>
                    <div className="flex flex-row items-start">
                        <Empty />
                        <KeyBtn scale={p.scale} keyD={KEYS.uparr} />
                        <Empty />
                    </div>
                    <div className="flex flex-row items-start">
                        <KeyBtn scale={p.scale} keyD={KEYS.larr} />
                        <KeyBtn scale={p.scale} keyD={KEYS.darr} />
                        <KeyBtn scale={p.scale} keyD={KEYS.rarr} />
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div className="mb-1 flex flex-row items-start">
                            <Empty />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn scale={p.scale} keyD={KEYS.nlk} />
                            <KeyBtn scale={p.scale} keyD={KEYS.ndiv} />
                            <KeyBtn scale={p.scale} keyD={KEYS.nmul} />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn scale={p.scale} keyD={KEYS.n7} />
                            <KeyBtn scale={p.scale} keyD={KEYS.n8} />
                            <KeyBtn scale={p.scale} keyD={KEYS.n9} />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn scale={p.scale} keyD={KEYS.n4} />
                            <KeyBtn scale={p.scale} keyD={KEYS.n5} />
                            <KeyBtn scale={p.scale} keyD={KEYS.n6} />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn scale={p.scale} keyD={KEYS.n1} />
                            <KeyBtn scale={p.scale} keyD={KEYS.n2} />
                            <KeyBtn scale={p.scale} keyD={KEYS.n3} />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn scale={p.scale} keyD={KEYS.n0} width={2} />
                            <KeyBtn scale={p.scale} keyD={KEYS.ndot} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-1 flex flex-row items-start">
                            <Empty />
                        </div>
                        <div className="flex flex-row items-start">
                            <KeyBtn scale={p.scale} keyD={KEYS.nmin} />
                        </div>
                        <KeyBtn scale={p.scale} keyD={KEYS.nplus} height={2} />
                        <KeyBtn
                            scale={p.scale}
                            keyD={KEYS.nreturn}
                            height={2}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KeyboardDisplay;
