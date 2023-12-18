"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send("Express on Vercel");
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Running on port ".concat(port, "."));
});
exports.default = app;
