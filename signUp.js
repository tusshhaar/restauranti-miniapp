let main = async () => {

    let signUpData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        username: document.getElementById("username").value,
        mobile: document.getElementById("mobile").value,
        description: document.getElementById("desc").value
       }
    
       console.log(signUpData);
       
       let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
        method: 'POST',
        body: JSON.stringify(signUpData),
        headers: {
            'Content-Type': 'application/json'
        }
       });
    
       let data = await res.json();
    
       console.log(data);
}
