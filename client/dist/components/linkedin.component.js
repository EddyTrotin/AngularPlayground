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
var linkedin_service_1 = require("../services/linkedin.service");
require("rxjs/add/operator/switchMap");
var LinkedinComponent = (function () {
    function LinkedinComponent(LinkedinService) {
        this.LinkedinService = LinkedinService;
        this.infos = null;
    }
    LinkedinComponent.prototype.ngOnInit = function () {
        var code = window.location.href.split('code=').slice(1).toString();
        if (code) {
            this.setLiAccessToken(code);
        }
    };
    LinkedinComponent.prototype.logLiUser = function () {
        this.LinkedinService.logLiUser();
    };
    LinkedinComponent.prototype.setLiAccessToken = function (code) {
        var _this = this;
        this.LinkedinService.setLiAccessToken(code).subscribe(function (res) {
            if (res.status === 200) {
                _this.getLiInfos();
            }
        }, function (error) { return console.log("Error: ", error); });
    };
    LinkedinComponent.prototype.getLiInfos = function () {
        var _this = this;
        this.LinkedinService.getLiInfos().subscribe(function (infos) {
            _this.infos = infos;
        });
    };
    return LinkedinComponent;
}());
LinkedinComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'linkedin',
        templateUrl: '../../app/views/linkedin.component.html'
    }),
    __metadata("design:paramtypes", [linkedin_service_1.LinkedinService])
], LinkedinComponent);
exports.LinkedinComponent = LinkedinComponent;
//# sourceMappingURL=linkedin.component.js.map