var valid_check  = true;

var numberInput = document.getElementById("number");
numberInput.addEventListener("input", function() {
    var inputValue = numberInput.value;
    document.getElementsByClassName("middle_text_front")[0].innerHTML= inputValue;
    if ((/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(inputValue))) 
  {
    document.getElementsByClassName('error_text')[1].style.display = 'none';
   
    valid_check = true;
  }
    
  });

var nameInput = document.getElementById("name");
nameInput.addEventListener("input", function() {
  
  var nameValue = nameInput.value;
  
  document.getElementsByClassName("bottoml_text_front")[0].innerHTML= nameValue;
  if (document.getElementById('name').value.length > 3 )
  {

    document.getElementsByClassName('error_text')[0].style.display = 'none';
    valid_check = true;
  }
  
});

var cvcInput = document.getElementById("cvc");
cvcInput.addEventListener("input", function() {
  var inputValue = cvcInput.value;
  document.getElementById("back_text_p").innerHTML= inputValue;
 if ((document.getElementById('cvc').value.length == 3)   )
  {

    document.getElementsByClassName('error_text')[2].style.display = 'none';
    document.getElementsByClassName('error_text')[3].style.display = 'none';
    valid_check = true;
  }
  
  
});

var mmInput = document.getElementById("mm");
var yyInput = document.getElementById("yy");

mmInput.addEventListener("input", function() {
  var inputValue = mmInput.value;
  document.getElementsByClassName("bottomr_text_front_first")[0].innerHTML= inputValue ;
  if ((document.getElementById('mm').value.length == 2)   )
  {

    document.getElementsByClassName('error_text')[2].style.display = 'none';
    document.getElementsByClassName('error_text')[3].style.display = 'none';
    valid_check = true;
  }
  
});

yyInput.addEventListener("input", function() {
  var inputValue = yyInput.value;
  document.getElementsByClassName("bottomr_text_front_last")[0].innerHTML= inputValue;
  if ((document.getElementById('yy').value.length == 2)) 
  {

    document.getElementsByClassName('error_text')[2].style.display = 'none';
    document.getElementsByClassName('error_text')[3].style.display = 'none';
    valid_check = true;
  }
  
});





function get_details()
{
  name_check() 
  number_check() 
  mm_check()  
  yy_check() 
  cvc_check()
  
  if (name_check() && number_check() && mm_check() && yy_check() && cvc_check())
  {
    document.getElementsByClassName('content')[0].style.display = 'none';
    document.getElementById("thankyou_section").style.display = 'block';
  }
}




function name_check()
{
 
  valid_check = true
  if (document.getElementById('name').value.length == 0 || document.getElementById('name').value.length < 3)
  {
    document.getElementById('name').style.border="1px solid orange";
    document.getElementsByClassName('error_text')[0].style.display = 'block';
    valid_check = false;
  }

  return valid_check
}

function number_check()
{
  valid_check = true
  
  var numberInput = document.getElementById('number');
  
  var inputValue = numberInput.value
   // Remove spaces from the input value
  
  if (!(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(inputValue))) 
  {
    document.getElementById('number').style.border="1px solid orange";
    document.getElementsByClassName('error_text')[1].style.display = 'block';
    valid_check = false;
  }
  return valid_check
}

function  mm_check()
{
  valid_check = true
  if (document.getElementById('mm').value.length == 0)  
  {
    document.getElementById('mm').style.border="1px solid orange";
    document.getElementsByClassName('error_text')[2].style.display = 'block';
    valid_check = false;
  }
  else if ((document.getElementById('mm').value.length != 2))
  {
    document.getElementById('mm').style.border="1px solid orange";
    document.getElementsByClassName('error_text')[3].style.display = 'block';
    valid_check = false;
  }

  return valid_check
}
function yy_check()
{
  valid_check = true
  if (document.getElementById('yy').value.length == 0)  {
    document.getElementById('yy').style.border="1px solid orange";
    document.getElementsByClassName('error_text')[2].style.display = 'block';
    valid_check = false;
  }
  else if ((document.getElementById('yy').value.length != 2))
  {
    document.getElementById('yy').style.border="1px solid orange";
    document.getElementsByClassName('error_text')[3].style.display = 'block';
    valid_check = false;
  }
  return valid_check
}

function cvc_check()
{
  valid_check = true
  if (document.getElementById('cvc').value.length == 0)
  {
    document.getElementById('cvc').style.border="1px solid orange";
    document.getElementsByClassName('error_text')[2].style.display = 'block';
    valid_check = false;
  }

  else if ((document.getElementById('cvc').value.length != 3))
  {
    document.getElementById('cvc').style.border="1px solid orange";
    document.getElementsByClassName('error_text')[3].style.display = 'block';
    valid_check = false;
  }
  return valid_check
}
