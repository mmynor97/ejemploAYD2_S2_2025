import { Pizza } from "../products/pizza";
import { IPizzaBuilder } from "./IPizzaBuilder";
export declare class ClassicPizzaBuilder implements IPizzaBuilder {
    private pizza;
    setMasa(): this;
    setSalsa(): this;
    setQueso(): this;
    addExtra(extra: string): this;
    getResult(): Pizza;
}
//# sourceMappingURL=ClassicPizzaBuilder.d.ts.map