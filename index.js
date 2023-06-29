"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// const express = require('express')
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    res.status(401).json({
        ok: false,
        msg: "No hay token en la petición"
    });
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
