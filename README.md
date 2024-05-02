## To Replicate issue
1. Update config values in `src/App.js` and change the `GA_MEASUREMENT_ID` to the exact value of the measurement ID in the `public/index.html` for the gtag initialization.
2. Run the `npm i` to install all dependencies.
3. Run `npm run start` to start the dev instance.
4. Go to https://tagassistant.google.com/ and connect the localhost for debugging.

not working code:

```
gtag('consent', 'update', {
        'ad_personalization': 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'analytics_storage': 'granted',
        'functionality_storage': 'granted',
        'personalization_storage': 'denied',
        'security_storage': 'granted',
      });
```

working code snippet:

```
gtag('consent', {
        'ad_personalization': 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'analytics_storage': 'granted',
        'functionality_storage': 'granted',
        'personalization_storage': 'denied',
        'security_storage': 'granted',
      });
```

5. Update the `consentGrantedAdStorage()` function in the `public/index.html` accordingly to see the behavior.
