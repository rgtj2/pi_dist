webpackJsonp([1,4],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, ".grid {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.channel-section {\n    margin-top: 1rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, ".message {\n    color: white;\n    padding: .25rem .5rem;\n    margin: .5rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<app-malarium-mqtt></app-malarium-mqtt>"

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"publish()\">\n    <select [formControl]=\"channelControl\">\n        <option *ngFor=\"let channel of channels\" [ngValue]=\"channel\">{{channel}}</option>\n    </select>\n    <select [formControl]=\"colorControl\">\n        <option *ngFor=\"let color of colors\" [ngValue]=\"color\">{{color}}</option>\n    </select>\n    <input [formControl]=\"messageControl\" type=\"text\" />\n</form>\n\n\n<div *ngIf=\"errors.length\">Error</div>\n\n<div *ngFor=\"let error of errors\">\n    {{error | json}}\n    <div *ngIf=\"error.type==='websocketConnection'\">\n        Can't connect. <a (click)=\"reconnect()\">Retry</a>\n    </div>\n</div>\n<div>\n    <div class=\"channel-section\" *ngFor=\"let name of channelNames\">\n        <div>{{name}}</div>\n        <div class=\"grid channel-messages\">\n            <div *ngFor=\"let message of channelHash[name]\">\n                <app-mqtt-message [message]=\"message\"></app-mqtt-message>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

module.exports = "<div class=\"message\" [ngStyle]=\"{'background-color': message.color}\">\n    <div>{{message.value}}</div>\n</div>"

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WEBSOCKET_HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WEBSOCKET_PORT; });

// TODO: Use environment variables
var WEBSOCKET_HOST = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* InjectionToken */]('WEBSOCKET_HOST');
var WEBSOCKET_PORT = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* InjectionToken */]('WEBSOCKET_PORT');
//# sourceMappingURL=injection-tokens.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__injection_tokens__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_websocket_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServicesModule = (function () {
    function ServicesModule() {
    }
    return ServicesModule;
}());
ServicesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* CommonModule */]
        ],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3_app_services_websocket_service__["a" /* WebsocketService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__injection_tokens__["a" /* WEBSOCKET_HOST */], useValue: 'localhost' },
            { provide: __WEBPACK_IMPORTED_MODULE_0__injection_tokens__["b" /* WEBSOCKET_PORT */], useValue: 9000 }
        ]
    })
], ServicesModule);

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__injection_tokens__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var WebsocketService = (function () {
    function WebsocketService(host, port) {
        this.host = host;
        this.port = port;
    }
    WebsocketService.prototype.create = function () {
        return new WebSocket("ws://" + this.host + ":" + this.port);
    };
    return WebsocketService;
}());
WebsocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["h" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__injection_tokens__["a" /* WEBSOCKET_HOST */])),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["h" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__injection_tokens__["b" /* WEBSOCKET_PORT */])),
    __metadata("design:paramtypes", [Object, Object])
], WebsocketService);

//# sourceMappingURL=websocket.service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 73;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(85);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(142),
        styles: [__webpack_require__(139)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_services_module__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_shared_module__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6_app_shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_0__services_services_module__["a" /* ServicesModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MalariumMqttComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;
var MalariumMqttComponent = (function () {
    function MalariumMqttComponent(websocketService) {
        this.websocketService = websocketService;
        this.channelDisplayNames = {
            'test/stuff': 'Stuff',
            'test/things': 'Things',
            'test/hey': 'Automated',
            'general/welcome': 'General',
            'actions/movement': 'Sensors',
            'actionrequest/led1': 'Action Requests',
            'publishedaction/led1': 'Published Actions'
        };
    }
    MalariumMqttComponent.prototype.ngOnDestroy = function () {
        this.websocket.close();
    };
    MalariumMqttComponent.prototype.disconnectFromWebsocket = function () {
        this.websocket.close();
    };
    MalariumMqttComponent.prototype.ngOnInit = function () {
        this.setInitialState();
    };
    MalariumMqttComponent.prototype.setInitialState = function () {
        this.stream = [];
        this.errors = [];
        this.colors = ['#70af60', '#3f3f3f'];
        this.channels = ['test/stuff', 'test/things', 'actionrequest/led1'];
        this.messageControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null);
        this.colorControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.colors[0]);
        this.channelControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('test/stuff');
        this.initializeWebsocket();
    };
    MalariumMqttComponent.prototype.reconnect = function () {
        this.websocket.close();
        this.errors = [];
        this.initializeWebsocket();
    };
    MalariumMqttComponent.prototype.initializeWebsocket = function () {
        var _this = this;
        this.websocket = this.websocketService.create();
        this.websocket.onerror = function () {
            _this.errors.push({ type: 'websocketConnection' });
        };
        this.websocket.onmessage = function (m) {
            _this.stream.push(JSON.parse(m.data));
            _this.channelHash = null;
            var channelHash = _this.buildChannelHash();
            _this.channelNames = Object.keys(channelHash);
            _this.channelHash = channelHash;
        };
    };
    MalariumMqttComponent.prototype.publish = function () {
        if (this.messageControl.value) {
            this.websocket.send(this.serializeModel);
        }
    };
    Object.defineProperty(MalariumMqttComponent.prototype, "serializeModel", {
        get: function () {
            var model = { channel: this.channelControl.value, color: this.colorControl.value, value: this.messageControl.value };
            return JSON.stringify(model);
        },
        enumerable: true,
        configurable: true
    });
    MalariumMqttComponent.prototype.buildChannelHash = function () {
        var _this = this;
        var hash = {};
        this.stream.forEach(function (s) {
            var key = _this.channelDisplayNames[s.channel];
            if (!hash[key]) {
                hash[key] = [];
            }
            hash[key].push(s);
        });
        return hash;
    };
    return MalariumMqttComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* HostListener */])('window:beforeunload'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MalariumMqttComponent.prototype, "disconnectFromWebsocket", null);
MalariumMqttComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-malarium-mqtt',
        template: __webpack_require__(143),
        styles: [__webpack_require__(140)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__["a" /* WebsocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__["a" /* WebsocketService */]) === "function" && _a || Object])
], MalariumMqttComponent);

var _a;
//# sourceMappingURL=malarium-mqtt.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MqttMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MqttMessageComponent = (function () {
    function MqttMessageComponent() {
    }
    MqttMessageComponent.prototype.ngOnInit = function () {
        console.log(this);
    };
    return MqttMessageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Object)
], MqttMessageComponent.prototype, "message", void 0);
MqttMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-mqtt-message',
        template: __webpack_require__(144),
        styles: [__webpack_require__(141)]
    }),
    __metadata("design:paramtypes", [])
], MqttMessageComponent);

//# sourceMappingURL=mqtt-message.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__malarium_mqtt_malarium_mqtt_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_mqtt_message_mqtt_message_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_services_module__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5_app_services_services_module__["a" /* ServicesModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3_app_shared_mqtt_message_mqtt_message_component__["a" /* MqttMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_0__malarium_mqtt_malarium_mqtt_component__["a" /* MalariumMqttComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3_app_shared_mqtt_message_mqtt_message_component__["a" /* MqttMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_0__malarium_mqtt_malarium_mqtt_component__["a" /* MalariumMqttComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[169]);
//# sourceMappingURL=main.bundle.js.map