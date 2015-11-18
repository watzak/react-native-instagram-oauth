# react-native-instagram-share
react-native interface to login to instagram (iOS)


## Getting started

1. `npm install react-native-instagram-oauth@latest --save`
2. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
3. Go to `node_modules/react-native/Libraries/LinkingIOS/RCTLinking.xcodeproj` ➜ and add `RCTLinking.xcodeproj`
4. In XCode, in the project navigator, select your project. Add `libRCTLinking.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
5. Click `RCTLinking.xcodeproj` in the project navigator and go the `Build Settings` tab. Make sure 'All' is toggled on (instead of 'Basic'). Look for `Header Search Paths` and make sure it contains both `$(SRCROOT)/../../react-native/React` and `$(SRCROOT)/../../../React` - mark both as `recursive`.
6. Run your project (`Cmd+R`)
7. Register a new client on instagram itself => https://instagram.com/developer/clients/manage/
![Alt Text](https://github.com/watzak/react-native-instagram-oauth/raw/master/demo.png)


## Usage

```javascript
 var RNInstagramOAuth = require('react-native-instagram-oauth');

 var instagram: {
     client_id: '<YOUR CLIENT ID>',
     redirect_url: '<YOUR REDIRECT URL>'  // e.g.: 'test://init'
 };

 function getInstagramByMyself (access_token) {
    fetch('https://api.instagram.com/v1/users/self/?access_token='+access_token)
        .then((response) => response.json()).then((responseData) => {
            console.log(responseData);
        });
 }

 RNInstagramOAuth(instagram.client_id, instagram.redirect_url, (err, access_token) => {
    if (err) { console.log(err) }
    if (access_token !== undefined) {
        console.log(access_token);

        getInstagramByMyself(access_token);

    }
 });
```

Can be easily used together with react-native-instagram-share (https://github.com/watzak/react-native-instagram-share)
