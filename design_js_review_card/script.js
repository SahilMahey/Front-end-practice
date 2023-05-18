var number = 0;
function done1()
{
    number = document.getElementById('button1').innerText
}

function done2()
{
   number = document.getElementById('button2').innerText
}

function done3()
{
    number = document.getElementById('button3').innerText
}

function done4()
{
    number = document.getElementById('button4').innerText
}

function done5()
{
    number = document.getElementById('button5').innerText
}

function submit()
{
    if (number == 0)
    {

        alert('Please select a rating')
    }
    else
    {
    
    document.getElementsByClassName('box')[0].innerHTML = '';
    const box = document.getElementsByClassName('box')[0];
    const div1 = document.createElement('div');
    box.appendChild(div1)
    div1.setAttribute('style','margin:0 auto;')
    div1.setAttribute('Id','top_image')
    div1.innerHTML = '<img src="illustration-thank-you.svg" alt=""></img>';

    const div2 = document.createElement('div');
    box.appendChild(div2)
    div2.setAttribute('style','margin:0 auto;  height:25px; width:12rem; background:hsl(216, 36%, 15%); border-radius:20px; display:flex; justify-content:center; align-items:center;')
    div2.setAttribute('Id','rating')
    div2.innerHTML = '<p class="para">You selected out <span id = "span"></span> of 5</p>';
    const span =  document.getElementById('span')
    span.textContent = number;
    const para = document.getElementsByClassName('para')[0]
    para.setAttribute('style', 'color:orange; font-weight: 500; font-size:14px')

    const div3 = document.createElement('div');
    box.appendChild(div3)
    div3.setAttribute('style','margin:0 auto; text-align:center')
    div3.innerHTML = '<h1 class="big_text">Thank You</h1>';
    const big_text = document.getElementsByClassName('big_text')[0]
    big_text.setAttribute('style', 'color:white; font-weight: 700; font-size: 2rem;')
    


    const div4 = document.createElement('div');
    box.appendChild(div4)
    div4.setAttribute('style','margin:0 auto; text-align:center')
    div4.innerHTML = '<p class = "para_"> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch! </p>';
    const para_ = document.getElementsByClassName('para_')[0]
    para_.setAttribute('style', 'color:grey; font-weight: 700; font-size: 10px;')
    console.log(box)
   
    }
    

}