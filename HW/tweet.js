var tweetCollection = [tweet];

let idbtn = document.getElementById("id");
let messagebtn = document.getElementById("message");
let likebtn = document.getElementById("likes");
let sharebtn = document.getElementById("shares");
let commentbtn = document.getElementById("comments");
let userNamebtn = document.getElementById("username");

function tweetBuilder(){
    let d = new Date();
    let tweet =
    {
    id:         idbtn.value,
    message:    messagebtn.value,
    likes:       likebtn.value,
    shares:      sharebtn.value,
    comment:    commentbtn.value,
    userName:   userNamebtn.value,
    };

    tweetCollection.push(tweet);
    console.log("tweet", tweetCollection,d);

}

