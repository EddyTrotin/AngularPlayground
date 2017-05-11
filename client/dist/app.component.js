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
var app_service_1 = require("./services/app.service");
require("rxjs/add/operator/switchMap");
var AppComponent = (function () {
    function AppComponent(AppService) {
        this.AppService = AppService;
        this.flag = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var code = window.location.href.split('code=').slice(1).toString();
        console.log(code);
        if (code) {
            this.setFbAccessToken(code);
        }
    };
    AppComponent.prototype.logFbUser = function () {
        this.AppService.logFbUser();
    };
    AppComponent.prototype.setFbAccessToken = function (code) {
        var _this = this;
        this.AppService.setFbAccessToken(code).subscribe(function (res) {
            console.log(res);
        }, function (error) { return console.log("Error: ", error); }, function () {
            _this.flag = true;
            _this.displayInfos();
        });
    };
    AppComponent.prototype.displayInfos = function () {
        console.log(this.flag);
        //TODO : display data
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: '../app/app.component.html'
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map