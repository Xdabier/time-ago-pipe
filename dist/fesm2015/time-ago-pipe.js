import { __decorate } from 'tslib';
import { ChangeDetectorRef, NgZone, Pipe, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class Translate {
    constructor() {
        this.translations = {};
        this.translations['en'] = {
            'a few seconds ago': 'a few seconds ago',
            'seconds ago': (p) => `${p.seconds} seconds ago`,
            'a minute ago': 'a minute ago',
            'minutes ago': (p) => `${p.minutes} minutes ago`,
            'an hour ago': 'an hour ago',
            'hours ago': (p) => `${p.hours} hours ago`,
            'a day ago': 'a day ago',
            'days ago': (p) => `${p.days} days ago`,
            'a month ago': 'a month ago',
            'months ago': (p) => `${p.months} months ago`,
            'a year ago': 'a year ago',
            'years ago': (p) => `${p.years} years ago`
        };
        this.translations['fr'] = {
            'a few seconds ago': 'il y a quelques secondes',
            'seconds ago': (p) => `il y a ${p.seconds} secondes`,
            'a minute ago': 'il y a une minute',
            'minutes ago': (p) => `il y a ${p.minutes} minutes`,
            'an hour ago': 'il y a une heure',
            'hours ago': (p) => `il y a ${p.hours} heures`,
            'a day ago': 'hier',
            'days ago': (p) => `il y a ${p.days} jours`,
            'a month ago': 'il y a un mois',
            'months ago': (p) => `il y a ${p.months} mois`,
            'a year ago': 'il y a un an',
            'years ago': (p) => `il y a ${p.years} ans`
        };
    }
    translate(locale, messageKey, parameters) {
        const translationsInLocale = this.translations[locale];
        if (translationsInLocale) {
            const translation = translationsInLocale[messageKey];
            if (translation) {
                if (typeof translation == 'function') {
                    return translation(parameters);
                }
                return translation;
            }
        }
        return messageKey;
    }
}

let TimeAgoPipe = class TimeAgoPipe {
    constructor(changeDetectorRef, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.translate = new Translate();
    }
    transform(value, locale) {
        this.removeTimer();
        let d = new Date(value);
        let now = new Date();
        let seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        let timeToUpdate = this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(() => {
            if (typeof window !== 'undefined') {
                return window.setTimeout(() => {
                    this.ngZone.run(() => this.changeDetectorRef.markForCheck());
                }, timeToUpdate);
            }
            return null;
        });
        return this.getI18nMessage(seconds, locale || 'en');
    }
    getI18nMessage(seconds, locale) {
        let minutes = Math.round(Math.abs(seconds / 60));
        let hours = Math.round(Math.abs(minutes / 60));
        let days = Math.round(Math.abs(hours / 24));
        let months = Math.round(Math.abs(days / 30.416));
        let years = Math.round(Math.abs(days / 365));
        if (seconds <= 45) {
            return this.translate.translate(locale, 'a few seconds ago');
        }
        else if (seconds <= 90) {
            return this.translate.translate(locale, 'a minute ago');
        }
        else if (minutes <= 45) {
            return this.translate.translate(locale, 'minutes ago', { minutes });
        }
        else if (minutes <= 90) {
            return this.translate.translate(locale, 'an hour ago');
        }
        else if (hours <= 22) {
            return this.translate.translate(locale, 'hours ago', { hours });
        }
        else if (hours <= 36) {
            return this.translate.translate(locale, 'a day ago');
        }
        else if (days <= 25) {
            return this.translate.translate(locale, 'days ago', { days });
        }
        else if (days <= 45) {
            return this.translate.translate(locale, 'a month ago');
        }
        else if (days <= 345) {
            return this.translate.translate(locale, 'months ago', { months });
        }
        else if (days <= 545) {
            return this.translate.translate(locale, 'a year ago');
        }
        else { // (days > 545)
            return this.translate.translate(locale, 'years ago', { years });
        }
    }
    ngOnDestroy() {
        this.removeTimer();
    }
    removeTimer() {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }
    getSecondsUntilUpdate(seconds) {
        let min = 60;
        let hr = min * 60;
        let day = hr * 24;
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
    }
};
TimeAgoPipe.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone }
];
TimeAgoPipe = __decorate([
    Pipe({
        name: 'timeAgo',
        pure: false
    })
], TimeAgoPipe);

let TimeAgoPipeModule = class TimeAgoPipeModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { TimeAgoPipeModule, TimeAgoPipe as ɵa };
//# sourceMappingURL=time-ago-pipe.js.map
