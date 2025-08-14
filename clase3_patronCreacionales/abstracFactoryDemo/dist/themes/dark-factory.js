"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkFactory = void 0;
const dark_controls_1 = require("./dark-controls");
const dark_controls_2 = require("./dark-controls");
class DarkFactory {
    createButton() {
        return new dark_controls_1.DarkButton();
    }
    createCheckbox() {
        return new dark_controls_2.DarkCheckbox();
    }
}
exports.DarkFactory = DarkFactory;
//# sourceMappingURL=dark-factory.js.map