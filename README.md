# react-native-instagram-share
react-native interface to login to instagram (iOS)


## Getting started

1. `npm install react-native-instagram-oauth@latest --save`
2. Run your project (`Cmd+R`)
3. Register a new client on instagram itself => https://instagram.com/developer/clients/manage/
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


## Demo

![Alt Text](https://github.com/watzak/react-native-instagram-oauth/raw/master/demo.gif)
