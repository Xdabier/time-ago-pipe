import { __decorate } from 'tslib';
import { ChangeDetectorRef, NgZone, Pipe, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    TimeAgoPipe = __decorate([
        Pipe({
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
        NgModule({
            declarations: [
                TimeAgoPipe
            ],
            imports: [
                CommonModule
            ],
            exports: [
                TimeAgoPipe
            ]
        })
    ], TimeAgoPipeModule);
    return TimeAgoPipeModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { TimeAgoPipeModule, TimeAgoPipe as ɵa };
//# sourceMappingURL=time-ago-pipe.js.map
