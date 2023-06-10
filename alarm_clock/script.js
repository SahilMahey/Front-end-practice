var audio = new Audio('Alarm.mp3');



let z = async () =>
{ 
    var hours,minutes,ampm;
    return new Promise((resolve,reject)=>{setInterval(() => 
    {
     let b = new Date();
     hours = b.getHours();
     
     ampm =  b.getHours() >= 12 ? 'PM' : 'AM';
     minutes = b.getMinutes() <=9 ? `0${b.getMinutes()}` : b.getMinutes();
     let seconds = b.getSeconds() <=9 ? `0${b.getSeconds()}` : b.getSeconds();
     let span = document.getElementsByTagName('span')[0]
     span.innerText = hours +" : " + minutes + " : " + seconds + "  " + ampm;
     resolve([hours,minutes,ampm])
    }, 1000);
})
    
}


let hours_val = document.getElementsByTagName('input')[0]
let minutes_val = document.getElementsByTagName('input')[1]
let ampm_val1 = document.getElementsByTagName('input')[2]


let add_alarm = () =>
{
   
    let ampm_val = ampm_val1.value.toUpperCase()
    
    console.log(hours_val.value, minutes_val.value, ampm_val)
    if (hours_val.value.length > 2 || minutes_val.value.length > 2 || ampm_val.length > 2)
    {
        alert('The input should be only 2 characters long')
    }

    else if (hours_val.value.length == 0  || minutes_val.value.length == 0 || ampm_val.length == 0)
    {
        alert ('enter the input')
    }

    else if (isNaN(hours_val.value) || isNaN(minutes_val.value))
    {
        alert('The input should be integer!!!')
    }
    else if (ampm_val=='AM' || ampm_val=='PM')
    {
        
        
         setInterval(async () => {
            
            let m = await z()
            if (parseInt(hours_val.value) == m[0] && parseInt(minutes_val.value) == m[1] && ampm_val == m[2])
            {
                audio.play();
            }
            
        }, 1000);
    }
    else
    {
        
        alert ('enter correct inputs (00, 00, AM/PM')
    }
}


z()
