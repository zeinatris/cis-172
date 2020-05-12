let handNewButton = [];

let messageBtn = document.getElementById("message.txt");
let commentBtn = document.getElementById("comments");
function submitHandler () {
    let submit =
        {
            Message: messageBtn.value,
            Comment: commentBtn.value
        };
        handNewButton.push(submit);
    console.log("submit",handNewButton)
    Blueit.sendNewPostToApi()
}
