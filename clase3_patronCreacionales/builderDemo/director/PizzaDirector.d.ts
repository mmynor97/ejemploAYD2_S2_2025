import { IPizzaBuilder } from "../builders/IPizzaBuilder";
export declare class PizzaDirector {
    private builder;
    constructor(builder: IPizzaBuilder);
    setBuilder(builder: IPizzaBuilder): void;
    makePersonalizada(extras?: string[]): import("../products/pizza").Pizza;
}
//# sourceMappingURL=PizzaDirector.d.ts.map