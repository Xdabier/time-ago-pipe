export class Translate {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGltZS1hZ28tcGlwZS8iLCJzb3VyY2VzIjpbInRyYW5zbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sU0FBUztJQUlsQjtRQUZRLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzlCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDdEIsbUJBQW1CLEVBQUUsbUJBQW1CO1lBQ3hDLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxjQUFjO1lBQ2hELGNBQWMsRUFBRSxjQUFjO1lBQzlCLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxjQUFjO1lBQ2hELGFBQWEsRUFBRSxhQUFhO1lBQzVCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZO1lBQzFDLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxXQUFXO1lBQ3ZDLGFBQWEsRUFBRSxhQUFhO1lBQzVCLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxhQUFhO1lBQzdDLFlBQVksRUFBRSxZQUFZO1lBQzFCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZO1NBQzdDLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ3RCLG1CQUFtQixFQUFFLDBCQUEwQjtZQUMvQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sV0FBVztZQUNwRCxjQUFjLEVBQUUsbUJBQW1CO1lBQ25DLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxVQUFVO1lBQ25ELGFBQWEsRUFBRSxrQkFBa0I7WUFDakMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLFNBQVM7WUFDOUMsV0FBVyxFQUFFLE1BQU07WUFDbkIsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLFFBQVE7WUFDM0MsYUFBYSxFQUFFLGdCQUFnQjtZQUMvQixZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sT0FBTztZQUM5QyxZQUFZLEVBQUUsY0FBYztZQUM1QixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssTUFBTTtTQUM5QyxDQUFDO0lBQ04sQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFjLEVBQUUsVUFBa0IsRUFBRSxVQUFtQjtRQUU3RCxNQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdkQsSUFBSSxvQkFBb0IsRUFBRTtZQUN0QixNQUFNLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVyRCxJQUFJLFdBQVcsRUFBRTtnQkFDYixJQUFJLE9BQU8sV0FBVyxJQUFJLFVBQVUsRUFBRTtvQkFDbEMsT0FBTyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ2xDO2dCQUNELE9BQU8sV0FBVyxDQUFDO2FBQ3RCO1NBQ0o7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVHJhbnNsYXRlIHtcclxuXHJcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uczogT2JqZWN0ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnNbJ2VuJ10gPSB7XHJcbiAgICAgICAgICAgICdhIGZldyBzZWNvbmRzIGFnbyc6ICdhIGZldyBzZWNvbmRzIGFnbycsXHJcbiAgICAgICAgICAgICdzZWNvbmRzIGFnbyc6IChwKSA9PiBgJHtwLnNlY29uZHN9IHNlY29uZHMgYWdvYCxcclxuICAgICAgICAgICAgJ2EgbWludXRlIGFnbyc6ICdhIG1pbnV0ZSBhZ28nLFxyXG4gICAgICAgICAgICAnbWludXRlcyBhZ28nOiAocCkgPT4gYCR7cC5taW51dGVzfSBtaW51dGVzIGFnb2AsXHJcbiAgICAgICAgICAgICdhbiBob3VyIGFnbyc6ICdhbiBob3VyIGFnbycsXHJcbiAgICAgICAgICAgICdob3VycyBhZ28nOiAocCkgPT4gYCR7cC5ob3Vyc30gaG91cnMgYWdvYCxcclxuICAgICAgICAgICAgJ2EgZGF5IGFnbyc6ICdhIGRheSBhZ28nLFxyXG4gICAgICAgICAgICAnZGF5cyBhZ28nOiAocCkgPT4gYCR7cC5kYXlzfSBkYXlzIGFnb2AsXHJcbiAgICAgICAgICAgICdhIG1vbnRoIGFnbyc6ICdhIG1vbnRoIGFnbycsXHJcbiAgICAgICAgICAgICdtb250aHMgYWdvJzogKHApID0+IGAke3AubW9udGhzfSBtb250aHMgYWdvYCxcclxuICAgICAgICAgICAgJ2EgeWVhciBhZ28nOiAnYSB5ZWFyIGFnbycsXHJcbiAgICAgICAgICAgICd5ZWFycyBhZ28nOiAocCkgPT4gYCR7cC55ZWFyc30geWVhcnMgYWdvYFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNsYXRpb25zWydmciddID0ge1xyXG4gICAgICAgICAgICAnYSBmZXcgc2Vjb25kcyBhZ28nOiAnaWwgeSBhIHF1ZWxxdWVzIHNlY29uZGVzJyxcclxuICAgICAgICAgICAgJ3NlY29uZHMgYWdvJzogKHApID0+IGBpbCB5IGEgJHtwLnNlY29uZHN9IHNlY29uZGVzYCxcclxuICAgICAgICAgICAgJ2EgbWludXRlIGFnbyc6ICdpbCB5IGEgdW5lIG1pbnV0ZScsXHJcbiAgICAgICAgICAgICdtaW51dGVzIGFnbyc6IChwKSA9PiBgaWwgeSBhICR7cC5taW51dGVzfSBtaW51dGVzYCxcclxuICAgICAgICAgICAgJ2FuIGhvdXIgYWdvJzogJ2lsIHkgYSB1bmUgaGV1cmUnLFxyXG4gICAgICAgICAgICAnaG91cnMgYWdvJzogKHApID0+IGBpbCB5IGEgJHtwLmhvdXJzfSBoZXVyZXNgLFxyXG4gICAgICAgICAgICAnYSBkYXkgYWdvJzogJ2hpZXInLFxyXG4gICAgICAgICAgICAnZGF5cyBhZ28nOiAocCkgPT4gYGlsIHkgYSAke3AuZGF5c30gam91cnNgLFxyXG4gICAgICAgICAgICAnYSBtb250aCBhZ28nOiAnaWwgeSBhIHVuIG1vaXMnLFxyXG4gICAgICAgICAgICAnbW9udGhzIGFnbyc6IChwKSA9PiBgaWwgeSBhICR7cC5tb250aHN9IG1vaXNgLFxyXG4gICAgICAgICAgICAnYSB5ZWFyIGFnbyc6ICdpbCB5IGEgdW4gYW4nLFxyXG4gICAgICAgICAgICAneWVhcnMgYWdvJzogKHApID0+IGBpbCB5IGEgJHtwLnllYXJzfSBhbnNgXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2xhdGUobG9jYWxlOiBzdHJpbmcsIG1lc3NhZ2VLZXk6IHN0cmluZywgcGFyYW1ldGVycz86IE9iamVjdCk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uc0luTG9jYWxlID0gdGhpcy50cmFuc2xhdGlvbnNbbG9jYWxlXTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9uc0luTG9jYWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb25zSW5Mb2NhbGVbbWVzc2FnZUtleV07XHJcblxyXG4gICAgICAgICAgICBpZiAodHJhbnNsYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdHJhbnNsYXRpb24gPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvbihwYXJhbWV0ZXJzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VLZXk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==