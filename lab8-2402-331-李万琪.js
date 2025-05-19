		var call = document.getElementById("call");
        var start = document.getElementById("btn1");
        var stop = document.getElementById("btn2");
        var li = document.getElementsByTagName("li");
        var timer = null;
        start.onclick = function () {
            clearInterval(timer);
            timer = setInterval(function () {
                let i = Math.floor(Math.random() * li.length);
                for (let j = 0; j < li.length; j++) {
                    li[j].removeAttribute("class");
                }
                li[i].className = "pitch";
            }, 300);
        };
        stop.onclick = function () {
            clearInterval(timer);
            var choose = document.getElementsByClassName("pitch")[0];
            var name = choose.innerText;
            var nameSpan = document.getElementsByClassName("name")[0];
            nameSpan.innerText = name;
        }