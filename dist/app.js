"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 5));
app.get("/", (req, res) => {
    console.log(add(5, 5));
    res.send("hello");
});
app.listen(5000, () => {
    console.log("app is active");
});
