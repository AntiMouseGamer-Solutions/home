let mainClass = document.getElementById("main-class");
let alpha = 0.1;

setInterval(() => {
    if (alpha < 0.5)
        alpha += 0.001
    mainClass.style.color = 'rgba(206, 206, 206, ' + alpha + ')'
}, 1);
 
clearInterval(interval); 

function goToPage(page) {
    switch (page) {
        case 0:
            page = 'https://www.youtube.com/watch?v=-t5R5dLty58' // coming soon, fds
            break;
        case 1:
            break;
        case 2:
            page = 'https://discord.gg/5qQ5rE3eEN' // biggie
            break;
        case 3:
            page = 'https://github.com/viniciusroger/Raven-BFun' // bfun
            break
    }
    
    window.open(page)
} // que bgl estranho da porra, vtmnc, jaja eu me mato aqui.