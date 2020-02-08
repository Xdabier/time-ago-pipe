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
export { Translate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGltZS1hZ28tcGlwZS8iLCJzb3VyY2VzIjpbInRyYW5zbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUlJO1FBRlEsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFHOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRztZQUN0QixtQkFBbUIsRUFBRSxtQkFBbUI7WUFDeEMsYUFBYSxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUcsQ0FBQyxDQUFDLE9BQU8saUJBQWMsRUFBMUIsQ0FBMEI7WUFDaEQsY0FBYyxFQUFFLGNBQWM7WUFDOUIsYUFBYSxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUcsQ0FBQyxDQUFDLE9BQU8saUJBQWMsRUFBMUIsQ0FBMEI7WUFDaEQsYUFBYSxFQUFFLGFBQWE7WUFDNUIsV0FBVyxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUcsQ0FBQyxDQUFDLEtBQUssZUFBWSxFQUF0QixDQUFzQjtZQUMxQyxXQUFXLEVBQUUsV0FBVztZQUN4QixVQUFVLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBRyxDQUFDLENBQUMsSUFBSSxjQUFXLEVBQXBCLENBQW9CO1lBQ3ZDLGFBQWEsRUFBRSxhQUFhO1lBQzVCLFlBQVksRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFHLENBQUMsQ0FBQyxNQUFNLGdCQUFhLEVBQXhCLENBQXdCO1lBQzdDLFlBQVksRUFBRSxZQUFZO1lBQzFCLFdBQVcsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFHLENBQUMsQ0FBQyxLQUFLLGVBQVksRUFBdEIsQ0FBc0I7U0FDN0MsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDdEIsbUJBQW1CLEVBQUUsMEJBQTBCO1lBQy9DLGFBQWEsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLFlBQVUsQ0FBQyxDQUFDLE9BQU8sY0FBVyxFQUE5QixDQUE4QjtZQUNwRCxjQUFjLEVBQUUsbUJBQW1CO1lBQ25DLGFBQWEsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLFlBQVUsQ0FBQyxDQUFDLE9BQU8sYUFBVSxFQUE3QixDQUE2QjtZQUNuRCxhQUFhLEVBQUUsa0JBQWtCO1lBQ2pDLFdBQVcsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLFlBQVUsQ0FBQyxDQUFDLEtBQUssWUFBUyxFQUExQixDQUEwQjtZQUM5QyxXQUFXLEVBQUUsTUFBTTtZQUNuQixVQUFVLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxZQUFVLENBQUMsQ0FBQyxJQUFJLFdBQVEsRUFBeEIsQ0FBd0I7WUFDM0MsYUFBYSxFQUFFLGdCQUFnQjtZQUMvQixZQUFZLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxZQUFVLENBQUMsQ0FBQyxNQUFNLFVBQU8sRUFBekIsQ0FBeUI7WUFDOUMsWUFBWSxFQUFFLGNBQWM7WUFDNUIsV0FBVyxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsWUFBVSxDQUFDLENBQUMsS0FBSyxTQUFNLEVBQXZCLENBQXVCO1NBQzlDLENBQUM7SUFDTixDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUFVLE1BQWMsRUFBRSxVQUFrQixFQUFFLFVBQW1CO1FBRTdELElBQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV2RCxJQUFJLG9CQUFvQixFQUFFO1lBQ3RCLElBQU0sV0FBVyxHQUFHLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRXJELElBQUksV0FBVyxFQUFFO2dCQUNiLElBQUksT0FBTyxXQUFXLElBQUksVUFBVSxFQUFFO29CQUNsQyxPQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDbEM7Z0JBQ0QsT0FBTyxXQUFXLENBQUM7YUFDdEI7U0FDSjtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFTCxnQkFBQztBQUFELENBQUMsQUF0REQsSUFzREMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVHJhbnNsYXRlIHtcclxuXHJcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uczogT2JqZWN0ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnNbJ2VuJ10gPSB7XHJcbiAgICAgICAgICAgICdhIGZldyBzZWNvbmRzIGFnbyc6ICdhIGZldyBzZWNvbmRzIGFnbycsXHJcbiAgICAgICAgICAgICdzZWNvbmRzIGFnbyc6IChwKSA9PiBgJHtwLnNlY29uZHN9IHNlY29uZHMgYWdvYCxcclxuICAgICAgICAgICAgJ2EgbWludXRlIGFnbyc6ICdhIG1pbnV0ZSBhZ28nLFxyXG4gICAgICAgICAgICAnbWludXRlcyBhZ28nOiAocCkgPT4gYCR7cC5taW51dGVzfSBtaW51dGVzIGFnb2AsXHJcbiAgICAgICAgICAgICdhbiBob3VyIGFnbyc6ICdhbiBob3VyIGFnbycsXHJcbiAgICAgICAgICAgICdob3VycyBhZ28nOiAocCkgPT4gYCR7cC5ob3Vyc30gaG91cnMgYWdvYCxcclxuICAgICAgICAgICAgJ2EgZGF5IGFnbyc6ICdhIGRheSBhZ28nLFxyXG4gICAgICAgICAgICAnZGF5cyBhZ28nOiAocCkgPT4gYCR7cC5kYXlzfSBkYXlzIGFnb2AsXHJcbiAgICAgICAgICAgICdhIG1vbnRoIGFnbyc6ICdhIG1vbnRoIGFnbycsXHJcbiAgICAgICAgICAgICdtb250aHMgYWdvJzogKHApID0+IGAke3AubW9udGhzfSBtb250aHMgYWdvYCxcclxuICAgICAgICAgICAgJ2EgeWVhciBhZ28nOiAnYSB5ZWFyIGFnbycsXHJcbiAgICAgICAgICAgICd5ZWFycyBhZ28nOiAocCkgPT4gYCR7cC55ZWFyc30geWVhcnMgYWdvYFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNsYXRpb25zWydmciddID0ge1xyXG4gICAgICAgICAgICAnYSBmZXcgc2Vjb25kcyBhZ28nOiAnaWwgeSBhIHF1ZWxxdWVzIHNlY29uZGVzJyxcclxuICAgICAgICAgICAgJ3NlY29uZHMgYWdvJzogKHApID0+IGBpbCB5IGEgJHtwLnNlY29uZHN9IHNlY29uZGVzYCxcclxuICAgICAgICAgICAgJ2EgbWludXRlIGFnbyc6ICdpbCB5IGEgdW5lIG1pbnV0ZScsXHJcbiAgICAgICAgICAgICdtaW51dGVzIGFnbyc6IChwKSA9PiBgaWwgeSBhICR7cC5taW51dGVzfSBtaW51dGVzYCxcclxuICAgICAgICAgICAgJ2FuIGhvdXIgYWdvJzogJ2lsIHkgYSB1bmUgaGV1cmUnLFxyXG4gICAgICAgICAgICAnaG91cnMgYWdvJzogKHApID0+IGBpbCB5IGEgJHtwLmhvdXJzfSBoZXVyZXNgLFxyXG4gICAgICAgICAgICAnYSBkYXkgYWdvJzogJ2hpZXInLFxyXG4gICAgICAgICAgICAnZGF5cyBhZ28nOiAocCkgPT4gYGlsIHkgYSAke3AuZGF5c30gam91cnNgLFxyXG4gICAgICAgICAgICAnYSBtb250aCBhZ28nOiAnaWwgeSBhIHVuIG1vaXMnLFxyXG4gICAgICAgICAgICAnbW9udGhzIGFnbyc6IChwKSA9PiBgaWwgeSBhICR7cC5tb250aHN9IG1vaXNgLFxyXG4gICAgICAgICAgICAnYSB5ZWFyIGFnbyc6ICdpbCB5IGEgdW4gYW4nLFxyXG4gICAgICAgICAgICAneWVhcnMgYWdvJzogKHApID0+IGBpbCB5IGEgJHtwLnllYXJzfSBhbnNgXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2xhdGUobG9jYWxlOiBzdHJpbmcsIG1lc3NhZ2VLZXk6IHN0cmluZywgcGFyYW1ldGVycz86IE9iamVjdCk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uc0luTG9jYWxlID0gdGhpcy50cmFuc2xhdGlvbnNbbG9jYWxlXTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9uc0luTG9jYWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb25zSW5Mb2NhbGVbbWVzc2FnZUtleV07XHJcblxyXG4gICAgICAgICAgICBpZiAodHJhbnNsYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdHJhbnNsYXRpb24gPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvbihwYXJhbWV0ZXJzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VLZXk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==