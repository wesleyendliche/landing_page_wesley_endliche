var myStoryBtn = document.getElementById('expand');
var myStoryDiv = document.getElementById('myStory');


addEventListener("resize", (size) => {
    var width = window.innerWidth;
    if(width < 900) {
        document.getElementById('logo').classList.add('remove-logo')
    } else document.getElementById('logo').classList.remove('remove-logo');
});

function expandText() {    
    if (myStoryDiv.style.display = "none") {
        myStoryDiv.style.display = "block";
    } else {
        myStoryDiv.style.display = "none";
    }
}

function openMyStory() {
    myStoryDiv.classList.add('my-story--enabled');
}

function closeMyStory() {
    myStoryDiv.classList.remove('my-story--enabled');
}
