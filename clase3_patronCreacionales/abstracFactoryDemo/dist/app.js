"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const light_factory_1 = require("./themes/light-factory");
const dark_factory_1 = require("./themes/dark-factory");
function detectUserTheme() {
    return Math.random() > 0.5 ? 'light' : 'dark';
}
/** Devuelve la fábrica adecuada según el tema */
function getFactory(theme) {
    return theme === 'light' ? new light_factory_1.LightFactory() : new dark_factory_1.DarkFactory();
}
const userTheme = detectUserTheme();
const uiFactory = getFactory(userTheme);
const btn = uiFactory.createButton();
const chk = uiFactory.createCheckbox();
btn.render();
chk.render();
//# sourceMappingURL=app.js.map