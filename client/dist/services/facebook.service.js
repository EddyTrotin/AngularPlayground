"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var FacebookService = (function () {
    function FacebookService(http) {
        this.http = http;
        console.log('App Service Initialized...');
    }
    FacebookService.prototype.logFbUser = function () {
        window.location.href = "rainbowdata.api.facebook/getFbCode";
    };
    FacebookService.prototype.setFbAccessToken = function (code) {
        console.log("calling setFbAccessToken");
        return this.http.get('/rainbowdata.api.facebook/setFbAccessToken/' + code).map(function (res) { return res; });
    };
    FacebookService.prototype.getFbInfos = function () {
        return this.http.get('/rainbowdata.api.facebook/getFbInfos').map(function (res) { return res.json(); });
    };
    return FacebookService;
}());
FacebookService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FacebookService);
exports.FacebookService = FacebookService;
//# sourceMappingURL=facebook.service.js.map