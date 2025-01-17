let mainClass = document.getElementById("main-class");
let alpha = 0.1;

function onLoad() {
    console.log("sexo")
    interval
}

setInterval(() => {
    if (alpha < 0.5)
        alpha += 0.001
    mainClass.style.color = 'rgba(206, 206, 206, ' + alpha + ')'
  }, 1);
 
 clearInterval(interval); 