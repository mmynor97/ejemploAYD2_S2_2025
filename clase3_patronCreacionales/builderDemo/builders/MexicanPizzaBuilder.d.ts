import { Pizza } from "../products/pizza";
import { IPizzaBuilder } from "./IPizzaBuilder";
export declare class MexicanPizzaBuilder implements IPizzaBuilder {
    private pizza;
    setMasa(): this;
    setSalsa(): this;
    setQueso(): this;
    addExtra(extra: string): this;
    getResult(): Pizza;
}
//# sourceMappingURL=MexicanPizzaBuilder.d.ts.map