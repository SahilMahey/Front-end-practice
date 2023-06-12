let buttons = document.querySelectorAll('.box')
var state = true

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  

Array.from(buttons).map((button)=>
{
    
    button.addEventListener('click', ()=>{
    
    if (state)
    {
        button.innerHTML = "X";
        button.disabled = true;
        state = false
        document.getElementsByTagName('span')[0].innerText = "Player 2's Turn"
        
    }
    else
    {
        button.innerHTML = "0";
        button.disabled = true;
        state = true
        document.getElementsByTagName('span')[0].innerText = "Player 1's Turn"
       
    }

    let {row,col} = button.dataset;
    board[parseInt(row)][parseInt(col)] = button.innerHTML;
    if (check_full())
    {
        document.getElementsByTagName('span')[0].innerText = "Tie!"
    }
    if (checkWinner())
    {
        Array.from(buttons).map((button)=>
        {
      
            if (button.disabled == false);
            {
                button.disabled = true
            }
     
        })
        
        if (state)
        {
            document.getElementsByTagName('span')[0].innerText = "Player 2 wins"
        }
        else
        {
            document.getElementsByTagName('span')[0].innerText = "Player 1 wins"
            
        }
    }
    })

})

let reset = () =>
{
    Array.from(buttons).map((button)=>
    {
        button.innerHTML = ""
        button.disabled = false;
       
    })
    state = true;
    document.getElementsByTagName('span')[0].innerText = "Player 1's Turn"
}

function checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) 
    {
      if ((board[i][0] === 'X' && board[i][1] === 'X' && board[i][2] === 'X') || (board[i][0] === '0' && board[i][1] === '0' && board[i][2] === '0')) 
      {

        return true
      }
    }
  
    // Check columns
    for (let j = 0; j < 3; j++) 
    {
       if (( board[0][j] === 'X' && board[1][j] === 'X' && board[2][j] === 'X') || ( board[0][j] === '0' && board[1][j] === '0' && board[2][j] === '0'))
{
        
        return true;
    }
    }
  
    // Check diagonals
    if ((board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X' )  ||( board[0][0] === '0' && board[1][1] === '0' && board[2][2] ==='0'))
    {
      
      return true;
    }
  
    if ((board[0][2] === 'X'  && board[1][1] ===  'X' && board[2][0] ===  'X') ||( board[0][2] === '0' && board[1][1] === '0' && board[2][0] === '0')) 
    {
        
      return true;
    }
  
    return false;
  }



  function check_full()
  {
   
    const elements = board.filter((row) => {
    return row.filter((element) => {
      return element === "";
    }).length > 0; // Include rows with at least one empty element
  });

    console.log(elements)
    if (elements.length==0)
    {
        return true
    }
  }
