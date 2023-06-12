let buttons  = document.querySelectorAll('.needed');
let val = document.getElementsByTagName('input')[0]
val.value = ""
Array.from(buttons).map((button)=>
{
   
    if(button)
    button.addEventListener('click',()=>
    {
        val.value = val.value + button.innerHTML
    })
})



function Clear()
{
    
    val.value = "";
}

function eval_expression()
{
    try{
        const expression = val.value;
        val.value = eval(expression)
    }
   catch 
   {
        alert("enter appropriate value")
   }
}