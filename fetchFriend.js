var friendsGetUrl = 'https://api.vk.com/method/friends.get?user_id=';

function getFriends(userid){

fetch(friendsGetUrl + userid.value)
    .then(function(result) {
        return result.json();
    })
    .then(function(resultJson) {
        console.log("result=" + JSON.stringify(resultJson));
        return JSON.stringify(resultJson);
    })
    .catch(function(err) {
        console.log("err_backend" + err);
    });
}

module.exports = {
    getFriends: getFriends

};
