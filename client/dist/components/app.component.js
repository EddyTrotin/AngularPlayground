"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/switchMap");
var facebook_component_1 = require("./facebook.component");
var facebook_service_1 = require("../services/facebook.service");
var linkedin_component_1 = require("./linkedin.component");
var linkedin_service_1 = require("../services/linkedin.service");
var AppComponent = (function () {
    function AppComponent() {
        this.fbService = new facebook_service_1.FacebookService(this.http);
        this.fbComponent = new facebook_component_1.FacebookComponent(this.fbService);
        this.liService = new linkedin_service_1.LinkedinService(this.http);
        this.liComponent = new linkedin_component_1.LinkedinComponent(this.liService);
        this.confirmFlag = false;
        this.authorizeIsActive = false;
    }
    AppComponent.prototype.logFbUser = function () {
        this.fbComponent.logFbUser();
    };
    AppComponent.prototype.logLiUser = function () {
        this.liComponent.logLiUser();
    };
    AppComponent.prototype.displayConfirmation = function () {
        if (this.authorizeIsActive) {
            this.confirmFlag = true;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: '../../app/views/app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map