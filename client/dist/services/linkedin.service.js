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
var LinkedinService = (function () {
    function LinkedinService(http) {
        this.http = http;
        this.api = "rainbowdata.api.linkedin";
    }
    LinkedinService.prototype.logLiUser = function () {
        window.location.href = this.api + "/getLiCode";
    };
    LinkedinService.prototype.setLiAccessToken = function (code) {
        return this.http.get(this.api + '/setLiAccessToken/' + code).map(function (res) { return res; });
    };
    LinkedinService.prototype.getLiInfos = function () {
        return this.http.get(this.api + '/getLiInfos').map(function (res) { return res.json(); });
    };
    return LinkedinService;
}());
LinkedinService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LinkedinService);
exports.LinkedinService = LinkedinService;
//# sourceMappingURL=linkedin.service.js.map