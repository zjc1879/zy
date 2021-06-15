window.onload=function(){
	focusRun.init();
	var content = document.getElementById("content")
     var ul = content.getElementsByTagName("ul")[0]
     var li = ul.getElementsByTagName("li")
     var speed = 2;

     ul.innerHTML += ul.innerHTML
     ul.style.width = li.length * li[0].offsetWidth + "px"

     function run() {
         if (ul.offsetLeft < -ul.offsetWidth / 2) {
             ul.style.left = 0
         } else if (ul.offsetLeft > 0) {
             ul.style.left = -ul.offsetWidth / 2 + "px"
         }

         ul.style.left = ul.offsetLeft + speed + "px"
     }
     timer = setInterval(run, 30)

     content.onmouseover = function() {
         clearInterval(timer)
     }

     content.onmouseout = function() {
         timer = setInterval(run, 30)
     }
};
