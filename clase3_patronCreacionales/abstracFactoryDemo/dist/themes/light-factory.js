"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightFactory = void 0;
const light_controls_1 = require("./light-controls");
const light_controls_2 = require("./light-controls");
class LightFactory {
    createButton() {
        return new light_controls_1.LightButton();
    }
    createCheckbox() {
        return new light_controls_2.LightCheckbox();
    }
}
exports.LightFactory = LightFactory;
//# sourceMappingURL=light-factory.js.map