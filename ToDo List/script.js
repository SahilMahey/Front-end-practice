get_data = (event) => {
    const form = document.querySelector('.needs-validation')
    let val = document.querySelector('.unique_id').value;
    if (!form.checkValidity()) 
    {
        form.classList.add('was-validated')
    }
    else if (localStorage.getItem(val))
    {
        document.querySelector('.todo').value = localStorage.getItem(val);
    }
    else
    {
        alert("the label Does not exist")
    }
    event.preventDefault();
}
delete_data = (event) => {
    const form = document.querySelector('.needs-validation')
    let val = document.querySelector('.unique_id').value;
    if (!form.checkValidity()) 
    {
        form.classList.add('was-validated')
    }
    else if (localStorage.getItem(val))
    {
        let response  = confirm("Do you want to Delete the todo");
        if (response == true)
        {
            localStorage.removeItem(val)
            alert("The todo is deleted")
        }
    }
    else
    {

        alert("the Key Does not exist")
    }
    event.preventDefault();
}
add_todo = () => {
    const forms = document.querySelectorAll('.needs-validation')
    let flag = true;
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      if (!form.checkValidity()) {
          flag  = false;
        }
    form.classList.add('was-validated')
    
    })
  if (flag)
  {
    let id = document.querySelector('.unique_id').value;
    let text = document.querySelector('.todo').value;
    if (localStorage.getItem(id))
    {
        let response  = confirm("label already exists!! do you want to modify it");
        if (response){
            localStorage.setItem(id,text)
        }
    }
    else
    {
        localStorage.setItem(id,text)
    }
   
  }
}

    

  


