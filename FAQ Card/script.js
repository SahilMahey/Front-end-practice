
var button_clicked1 = true;
var button_clicked2 = true;
var button_clicked3 = true;
var button_clicked4 = true;
var button_clicked5 = true;
function open_para1()
{
    if (button_clicked1)
    {
        button_clicked1 = false
        document.getElementById('img1').style.transform = 'scaleY(-1)';
        document.getElementById('para1').style.color = 'black';
        document.getElementById('para1').style.fontWeight = '700';
        document.getElementsByClassName("answer1")[0].style.display = 'block';
    }
    else{
        button_clicked1 = true
        document.getElementById('img1').style.transform = 'scaleY(1)';
        document.getElementById('para1').style.color = 'hsl(237, 12%, 33%)';
        document.getElementById('para1').style.fontWeight = '400';
        document.getElementsByClassName("answer1")[0].style.display = 'none';
        items = document.getElementById("para1");
        items.removeAttribute("style");
    }
}

function open_para2()
{
    if (button_clicked2)
    {
        button_clicked2 = false
        document.getElementById('img2').style.transform = 'scaleY(-1)';
        document.getElementById('para2').style.color = 'black';
        document.getElementById('para2').style.fontWeight = '700';
        document.getElementsByClassName("answer2")[0].style.display = 'block';
    }
    else{
        button_clicked2 = true
        document.getElementById('img2').style.transform = 'scaleY(1)';
        document.getElementById('para2').style.color = 'hsl(237, 12%, 33%)';
        document.getElementById('para2').style.fontWeight = '400';
        document.getElementsByClassName("answer2")[0].style.display = 'none';
        items = document.getElementById("para2");
        items.removeAttribute("style");
    }
}

function open_para3()
{
    if (button_clicked3)
    {
        button_clicked3 = false
        document.getElementById('img3').style.transform = 'scaleY(-1)';
        document.getElementById('para3').style.color = 'black';
        document.getElementById('para3').style.fontWeight = '700';
        document.getElementsByClassName("answer3")[0].style.display = 'block';
    }
    else{
        button_clicked3 = true
        document.getElementById('img3').style.transform = 'scaleY(1)';
        document.getElementById('para3').style.color = 'hsl(237, 12%, 33%)';
        document.getElementById('para3').style.fontWeight = '400';
        document.getElementsByClassName("answer3")[0].style.display = 'none';
        items = document.getElementById("para3");
        items.removeAttribute("style");
    }
}

function open_para4()
{
    if (button_clicked4)
    {
        button_clicked4 = false
        document.getElementById('img4').style.transform = 'scaleY(-1)';
        document.getElementById('para4').style.color = 'black';
        document.getElementById('para4').style.fontWeight = '700';

        document.getElementsByClassName("answer4")[0].style.display = 'block';
    }
    else{
        button_clicked4 = true
        document.getElementById('img4').style.transform = 'scaleY(1)';
        document.getElementById('para4').style.color = 'hsl(237, 12%, 33%)';
        document.getElementById('para4').style.fontWeight = '400';
        document.getElementsByClassName("answer4")[0].style.display = 'none';
        items = document.getElementById("para4");
        items.removeAttribute("style");
    }
}

function open_para5()
{
    if (button_clicked5)
    {
        button_clicked5 = false
        document.getElementById('img5').style.transform = 'scaleY(-1)';
        document.getElementById('para5').style.color = 'black';
        document.getElementById('para5').style.fontWeight = '700';
        document.getElementsByClassName("answer5")[0].style.display = 'block';
    }
    else{
        button_clicked5 = true
        document.getElementById('img5').style.transform = 'scaleY(1)';
        document.getElementById('para5').style.color = 'hsl(237, 12%, 33%)';
        document.getElementById('para5').style.fontWeight = '400';
        document.getElementsByClassName("answer5")[0].style.display = 'none';
        items = document.getElementById("para5");
        items.removeAttribute("style");
    }
}


