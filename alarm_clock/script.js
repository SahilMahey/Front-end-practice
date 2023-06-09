let z = setInterval(() => 
{
    let b = new Date();
    let ampm =  b.getHours() >= 12 ? 'PM' : 'AM';
    let minutes = b.getMinutes() <=9 ? `0${b.getMinutes()}` : b.getMinutes();
    let seconds = b.getSeconds() <=9 ? `0${b.getSeconds()}` : b.getSeconds();
    let span = document.getElementsByTagName('span')[0]
    return span.innerText = b.getHours() +" : " + minutes + " : " + seconds + "  " + ampm;
}, 1000);


let hours_val = document.getElementsByTagName('input')[0]
let minutes_val = document.getElementsByTagName('input')[1]
let seconds_val = document.getElementsByTagName('input')[2]

let add_alarm = () =>
{
    if (hours_val.value.length > 2 || minutes_val.value.length > 2 || seconds_val.value.length > 2)
    {
        alert('The integer should be only 2 characters long')
    }

    else if (isNaN(hours_val.value) || isNaN(minutes_val.value) || isNaN(seconds_val.value))
    {
        alert('The input should be integer!!!')
    }

    else
    {
      
        let array = [ hours_val.value =="" ? parseInt("00") : parseInt(hours_val.value), minutes_val.value =="" ? parseInt("00") : parseInt(minutes_val.value),  seconds_val.value =="" ? parseInt("00") : parseInt(seconds_val.value)]
        let set_timout_seconds = convert_into_seconds(...array)
       
        setTimeout(()=>
        {
            var audio = new Audio('audio_file.mp3');
            audio.play();
        }, set_timout_seconds * 1000)
    }
}

let convert_into_seconds = (hrs = 0,min= 0,sec = 0) =>
{
    let totalSeconds = (hrs * 3600) + (min * 60) + sec;
    return totalSeconds;
}

