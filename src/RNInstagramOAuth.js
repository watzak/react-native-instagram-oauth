var React = require('react-native');
var shittyQs = require('shitty-qs');

var {
    LinkingIOS
    } = React;

function RNInstagramOAuth (client_id, redirect_url, callback) {

    LinkingIOS.addEventListener('url', handleUrl);

    function handleUrl (event) {
        var [, query_string] = event.url.match(/\#(.*)/);
        var query = shittyQs(query_string);
        if (query.access_token !== undefined) {
            callback(null, query.access_token);
        } else {
            callback(new Error('Oauth2 security error'));
        }
        LinkingIOS.removeEventListener('url', handleUrl);
    }

    LinkingIOS.openURL(
        'https://instagram.com/oauth/authorize/?client_id='+client_id+
        '&redirect_uri='+redirect_url+
        '&response_type=token'+
        '&state=${state}'
    );
}

module.exports = RNInstagramOAuth;