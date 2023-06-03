let z = setInterval(() => 
{
    let b = new Date();
    let ampm =  b.getHours() >= 12 ? 'PM' : 'AM';
    let minutes = b.getMinutes() <=9 ? `0${b.getMinutes()}` : b.getMinutes();
    let seconds = b.getSeconds() <=9 ? `0${b.getSeconds()}` : b.getSeconds();
    let span = document.getElementsByTagName('span')[0]
    return span.innerText = b.getHours() +" : " + minutes + " : " + seconds + "  " + ampm;
}, 1000);






