App.info({
    id: 'com.example.scavengerapp',
    name: 'CCSH-2016',
    description: 'Cary Citizen 2016 Scavenger Hunt App',
    author: 'MattByron Development Group',
    email: 'carycitizenscavengerhunt@gmail.com',
    website: 'https://cc-scavenger-hunt.herokuapp.com'
});

App.accessRule('https://cc-scavenger-hunt.herokuapp.com/*');
App.accessRule('http://cc-scavenger-hunt.herokuapp.com/*');
App.accessRule('https://s3.amazonaws.com/scavengerhuntphotos/*');
App.accessRule('http://localhost:3010/*');

App.icons({'iphone_2x': 'public/images/mobile/icons/2016CSHlogo-iphone_2x.png',
            'iphone_3x': 'public/images/mobile/icons/2016CSHlogo-iphone_3x.png',
            'ios_settings': 'public/images/mobile/icons/2016CSHlogo-ios_settings.png',
            'ios_settings_2x': 'public/images/mobile/icons/2016CSHlogo-ios_settings_2x.png',
            'ios_settings_3x': 'public/images/mobile/icons/2016CSHlogo-ios_settings_3x.png',
            'ios_spotlight': 'public/images/mobile/icons/2016CSHlogo-ios_spotlight.png',
            'ios_spotlight_2x': 'public/images/mobile/icons/2016CSHlogo-ios_spotlight_2x.png',
            'android_mdpi': 'public/images/mobile/icons/2016CSHlogo-android_mdpi.png',
            'android_hdpi': 'public/images/mobile/icons/2016CSHlogo-android_hdpi.png',
            'android_xhdpi': 'public/images/mobile/icons/2016CSHlogo-android_xhdpi.png',
            'android_xxhdpi': 'public/images/mobile/icons/2016CSHlogo-android_xxhdpi.png'
            // 'android_xxxhdpi': 'public/images/mobile/icons/2016CSHlogo-android_xxxhdpi.png'
          });


App.launchScreens({'iphone_2x': 'public/images/mobile/splashes/2016CSHlogo-iphone_2x.png',
                    'iphone5': 'public/images/mobile/splashes/2016CSHlogo-iphone5.png',
                    'iphone6': 'public/images/mobile/splashes/2016CSHlogo-iphone6.png',
                    'iphone6p_portrait': 'public/images/mobile/splashes/2016CSHlogo-iphone6p_portrait.png',
                    'android_mdpi_portrait': 'public/images/mobile/splashes/2016CSHlogo-android_mdpi_portrait.png',
                    'android_hdpi_portrait': 'public/images/mobile/splashes/2016CSHlogo-android_hdpi_portrait.png',
                    'android_xhdpi_portrait': 'public/images/mobile/splashes/2016CSHlogo-android_xhdpi_portrait.png',
                    'android_xxhdpi_portrait': 'public/images/mobile/splashes/2016CSHlogo-android_xxhdpi_portrait.png'})

App.setPreference('Fullscreen', true);
App.setPreference('Orientation', 'portrait');
App.setPreference('BackgroundColor', '0xa1d7d9ff'); 
