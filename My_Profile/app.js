let adDot = document.getElementById("name")
let old = document.getElementById("old")
let job = document.getElementById("job")
let send = document.getElementById("send")
let test = document.getElementById("test")
let educationText = document.getElementById("educationText");
let certificateText = document.getElementById("certificateText");
let con_profileText = document.getElementById("con-profileText");
let pagragraf = document.getElementById("test1")



send.onclick = function (e) {
    console.log("calisiyor")
    let boxPost = document.createElement("div")
    boxPost.value = adDot.value + old.value + job.value + educationText.value + certificateText.value + con_profileText.value
    boxPost.innerHTML = adDot.value + "<br>" + old.value + "<br>" + job.value + "" + educationText.value + "" + certificateText.value + "" + "" + con_profileText.value
    test.appendChild(boxPost)
}
adDot.value + old.value + job.value + educationText.value + certificateText.value + con_profileText.value