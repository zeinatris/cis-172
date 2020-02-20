let tweetCollection = [];

let idBtn = document.getElementById("id");
let messageBtn = document.getElementById("message");
let likeBtn = document.getElementById("likes");
let shareBtn = document.getElementById("shares");
let commentBtn = document.getElementById("comments");
let userNameBtn = document.getElementById("username");
let du = document.getElementById("dump");
function tweetBuilder() {
    let d = new Date();
    let tweet =
        {
            id: idBtn.value,
            message: messageBtn.value,
            likes: likeBtn.value,
            shares: shareBtn.value,
            comment: commentBtn.value,
            userName: userNameBtn.value,
        };

    tweetCollection.push(tweet);
    console.log("tweet", tweetCollection, d);


}

function dump() {
    console.log(tweetCollection);
}