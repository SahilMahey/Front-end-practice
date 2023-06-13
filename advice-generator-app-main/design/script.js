let change_advice = async() =>
{
    
    const response = await fetch("https://api.adviceslip.com/advice");
    const jsonData = await response.json();
   
    document.getElementsByTagName('h3')[0].innerText = `Advice #${jsonData.slip.id}`;
    document.getElementsByTagName('p')[0].innerText = `${jsonData.slip.advice}`
}