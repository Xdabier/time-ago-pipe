import { PipeTransform, NgZone, ChangeDetectorRef, OnDestroy } from "@angular/core";
export declare class TimeAgoPipe implements PipeTransform, OnDestroy {
    private changeDetectorRef;
    private ngZone;
    private timer;
    private translate;
    constructor(changeDetectorRef: ChangeDetectorRef, ngZone: NgZone);
    transform(value: string, locale?: string): string;
    getI18nMessage(seconds: number, locale: string): string;
    ngOnDestroy(): void;
    private removeTimer;
    private getSecondsUntilUpdate;
}
