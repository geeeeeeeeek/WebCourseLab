text = document.getElementById("text");

submit = document.getElementById("submit");
submit.addEventListener("click", function () {
    if (text.value.length > 140) {
        alert("字数超出限制!");
        return;
    }
    var display = document.getElementById("display");

    var date = new Date();
    var time = date.getYear() + "/" + date.getMonth() + "/" + date.getDate() + "/&nbsp;";
    time += (date.getHours() < 12) ? "上午" + date.getHours() : "下午" + (date.getHours() - 12);
    time += ":" + date.getMinutes() + ":" + date.getSeconds() + "&nbsp;&nbsp;&nbsp;&nbsp;来自网页";

    var temple = "<div class='entry'>" +
        "<div class ='avatar'></div>" +
        "<div class='right'><div class ='text'><span class ='name'>囧囧先生</span> ： <span class ='message'>" + parse(text.value) + "</span></div>" +
        "<div class ='side'><span class ='time'>" + time + "</span><span class ='forward'>转发</span></div></div>" +
        "</div>";

    display.innerHTML += temple;
});

facediv = document.getElementById("faceDiv");
face = document.getElementById("face");
var inited = false;
face.addEventListener("click", function () {

    if (facediv.style.display == "block") {
        facediv.style.display = "none";
        return;
    }
    if (!inited) {
        for (var i = 1; i < 40; i++) {
            facediv.innerHTML += "<div class='face-item' onclick='fiClick(" + i + ")' id='fis" + i + "'style='background-image:url(\"img\/faces\/F_" + i + ".gif\")'></div>";
            var fi = document.getElementById("fis" + i);
            fi.addEventListener("click", function () {

            });
        }
        inited = true;
    }

    facediv.style.display = "block";
});

function fiClick(i) {
    text.value += "(F_" + i + ".gif)";
    facediv.style.display = "none";
}

function parse(text) {
    while (text.indexOf("(F_") != -1) {
        text = text.replace("(F_", "<div class='face-item' style='background-image:url(\"img\/faces\/F_").replace(".gif)", ".gif\")'></div>");
    }
    return text;
}

text.addEventListener("keyup", function () {
    var count = document.getElementById("promote");
    count.innerHTML = 140 - text.value.length;
}, false);