let buttons = document.getElementsByTagName('button')
var state = true
console.log(buttons)




document.getElementsByClassName('container1')[0].addEventListener('click',(event)=>
{
    event.preventDefault()
    if (state)
    {
        document.getElementsByClassName('container1')[0].innerHTML = "X";
        state = false
    }
    else
    {
        document.getElementsByClassName('container1')[0].innerHTML = "0";
        state = true
       
    }

    document.getElementsByClassName('container1')[0].removeEventListener("click", event ,false);
})

document.getElementsByClassName('container2')[0].addEventListener('click',(event)=>
{
    event.preventDefault()
    if (state)
    {
        document.getElementsByClassName('container2')[0].innerHTML = "X";
        state = false
    }
    else
    {
        document.getElementsByClassName('container2')[0].innerHTML = "0";
        state = true
    }
})

document.getElementsByClassName('container3')[0].addEventListener('click',(event)=>
{
    event.preventDefault()
    if (state)
    {
        document.getElementsByClassName('container3')[0].innerHTML = "X";
        state = false
    }
    else
    {
        document.getElementsByClassName('container3')[0].innerHTML = "0";
        state = true
    }
})

document.getElementsByClassName('container4')[0].addEventListener('click',(event)=>
{
    event.preventDefault()
    if (state)
    {
        document.getElementsByClassName('container4')[0].innerHTML = "X";
        state = false
    }
    else
    {
        document.getElementsByClassName('container4')[0].innerHTML = "0";
        state = true
    }
})

document.getElementsByClassName('container5')[0].addEventListener('click',(event)=>
{
    event.preventDefault()
    if (state)
    {
        document.getElementsByClassName('container5')[0].innerHTML = "X";
        state = false
    }
    else
    {
        document.getElementsByClassName('container5')[0].innerHTML = "0";
        state = true
    }
})

document.getElementsByClassName('container6')[0].addEventListener('click',(event)=>
{
    event.preventDefault()
    if (state)
    {
        document.getElementsByClassName('container6')[0].innerHTML = "X";
        state = false
    }
    else
    {
        document.getElementsByClassName('container6')[0].innerHTML = "0";
        state = true
    }
})

document.getElementsByClassName('container7')[0].addEventListener('click',(event)=>
{
    event.preventDefault()
    if (state)
    {
        document.getElementsByClassName('container7')[0].innerHTML = "X";
        state = false
    }
    else
    {
        document.getElementsByClassName('container7')[0].innerHTML = "0";
        state = true
    }
})

document.getElementsByClassName('container8')[0].addEventListener('click',(event)=>
{
    event.preventDefault()
    if (state)
    {
        document.getElementsByClassName('container8')[0].innerHTML = "X";
        state = false
    }
    else
    {
        document.getElementsByClassName('container8')[0].innerHTML = "0";
        state = true
    }
})
document.getElementsByClassName('container9')[0].addEventListener('click',(event)=>
{
    event.preventDefault()
    if (state)
    {
        document.getElementsByClassName('container9')[0].innerHTML = "X";
        state = false
    }
    else
    {
        document.getElementsByClassName('container9')[0].innerHTML = "0";
        state = true
    }
})