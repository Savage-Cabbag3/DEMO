var i = ["2.Trees Provide Homes", "3.Trees Provide Fruit", "Trees Provide Natural Medicine"];
var a = ["https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "https://images.unsplash.com/photo-1462143338528-eca9936a4d09?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "https://images.unsplash.com/photo-1421790500381-fc9b5996f343?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"];
var slideshow = 0;

function Image() {
    document.getElementById("album").src = a[slideshow];
    document.getElementById("pre").innerHTML = i[slideshow];
    slideshow++;
    document.getElementById("audio").play();
}
