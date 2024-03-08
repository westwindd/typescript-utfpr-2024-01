"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
class Cao extends Animal_1.default {
    constructor(name) {
        super(name);
    }
    corre() {
        console.log("Dog named " + super.getName() + " is running");
    }
}
exports.default = Cao;
