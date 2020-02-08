(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('time-ago-pipe', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['time-ago-pipe'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var Translate = /** @class */ (function () {
        function Translate() {
            this.translations = {};
            this.translations['en'] = {
                'a few seconds ago': 'a few seconds ago',
                'seconds ago': function (p) { return p.seconds + " seconds ago"; },
                'a minute ago': 'a minute ago',
                'minutes ago': function (p) { return p.minutes + " minutes ago"; },
                'an hour ago': 'an hour ago',
                'hours ago': function (p) { return p.hours + " hours ago"; },
                'a day ago': 'a day ago',
                'days ago': function (p) { return p.days + " days ago"; },
                'a month ago': 'a month ago',
                'months ago': function (p) { return p.months + " months ago"; },
                'a year ago': 'a year ago',
                'years ago': function (p) { return p.years + " years ago"; }
            };
            this.translations['fr'] = {
                'a few seconds ago': 'il y a quelques secondes',
                'seconds ago': function (p) { return "il y a " + p.seconds + " secondes"; },
                'a minute ago': 'il y a une minute',
                'minutes ago': function (p) { return "il y a " + p.minutes + " minutes"; },
                'an hour ago': 'il y a une heure',
                'hours ago': function (p) { return "il y a " + p.hours + " heures"; },
                'a day ago': 'hier',
                'days ago': function (p) { return "il y a " + p.days + " jours"; },
                'a month ago': 'il y a un mois',
                'months ago': function (p) { return "il y a " + p.months + " mois"; },
                'a year ago': 'il y a un an',
                'years ago': function (p) { return "il y a " + p.years + " ans"; }
            };
        }
        Translate.prototype.translate = function (locale, messageKey, parameters) {
            var translationsInLocale = this.translations[locale];
            if (translationsInLocale) {
                var translation = translationsInLocale[messageKey];
                if (translation) {
                    if (typeof translation == 'function') {
                        return translation(parameters);
                    }
                    return translation;
                }
            }
            return messageKey;
        };
        return Translate;
    }());

    var TimeAgoPipe = /** @class */ (function () {
        function TimeAgoPipe(changeDetectorRef, ngZone) {
            this.changeDetectorRef = changeDetectorRef;
            this.ngZone = ngZone;
            this.translate = new Translate();
        }
        TimeAgoPipe.prototype.transform = function (value, locale) {
            var _this = this;
            this.removeTimer();
            var d = new Date(value);
            var now = new Date();
            var seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
            var timeToUpdate = this.getSecondsUntilUpdate(seconds) * 1000;
            this.timer = this.ngZone.runOutsideAngular(function () {
                if (typeof window !== 'undefined') {
                    return window.setTimeout(function () {
                        _this.ngZone.run(function () { return _this.changeDetectorRef.markForCheck(); });
                    }, timeToUpdate);
                }
                return null;
            });
            return this.getI18nMessage(seconds, locale || 'en');
        };
        TimeAgoPipe.prototype.getI18nMessage = function (seconds, locale) {
            var minutes = Math.round(Math.abs(seconds / 60));
            var hours = Math.round(Math.abs(minutes / 60));
            var days = Math.round(Math.abs(hours / 24));
            var months = Math.round(Math.abs(days / 30.416));
            var years = Math.round(Math.abs(days / 365));
            if (seconds <= 45) {
                return this.translate.translate(locale, 'a few seconds ago');
            }
            else if (seconds <= 90) {
                return this.translate.translate(locale, 'a minute ago');
            }
            else if (minutes <= 45) {
                return this.translate.translate(locale, 'minutes ago', { minutes: minutes });
            }
            else if (minutes <= 90) {
                return this.translate.translate(locale, 'an hour ago');
            }
            else if (hours <= 22) {
                return this.translate.translate(locale, 'hours ago', { hours: hours });
            }
            else if (hours <= 36) {
                return this.translate.translate(locale, 'a day ago');
            }
            else if (days <= 25) {
                return this.translate.translate(locale, 'days ago', { days: days });
            }
            else if (days <= 45) {
                return this.translate.translate(locale, 'a month ago');
            }
            else if (days <= 345) {
                return this.translate.translate(locale, 'months ago', { months: months });
            }
            else if (days <= 545) {
                return this.translate.translate(locale, 'a year ago');
            }
            else { // (days > 545)
                return this.translate.translate(locale, 'years ago', { years: years });
            }
        };
        TimeAgoPipe.prototype.ngOnDestroy = function () {
            this.removeTimer();
        };
        TimeAgoPipe.prototype.removeTimer = function () {
            if (this.timer) {
                window.clearTimeout(this.timer);
                this.timer = null;
            }
        };
        TimeAgoPipe.prototype.getSecondsUntilUpdate = function (seconds) {
            var min = 60;
            var hr = min * 60;
            var day = hr * 24;
            if (seconds < min) { // less than 1 min, update ever 2 secs
                return 2;
            }
            else if (seconds < hr) { // less than an hour, update every 30 secs
                return 30;
            }
            else if (seconds < day) { // less then a day, update every 5 mins
                return 300;
            }
            else { // update every hour
                return 3600;
            }
        };
        TimeAgoPipe.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.NgZone }
        ]; };
        TimeAgoPipe = __decorate([
            core.Pipe({
                name: 'timeAgo',
                pure: false
            })
        ], TimeAgoPipe);
        return TimeAgoPipe;
    }());

    var TimeAgoPipeModule = /** @class */ (function () {
        function TimeAgoPipeModule() {
        }
        TimeAgoPipeModule = __decorate([
            core.NgModule({
                declarations: [
                    TimeAgoPipe
                ],
                imports: [
                    common.CommonModule
                ],
                exports: [
                    TimeAgoPipe
                ]
            })
        ], TimeAgoPipeModule);
        return TimeAgoPipeModule;
    }());

    exports.TimeAgoPipeModule = TimeAgoPipeModule;
    exports.ɵa = TimeAgoPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=time-ago-pipe.umd.js.map
