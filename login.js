async function logIn(){

    let loginData = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }

    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
        method: 'POST',
        body: JSON.stringify(loginData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let data = await res.json();
    console.log(data.token);
    saveData(loginData.username,data.token);
}

function saveData(username,token){

    let store = {
        username,
        token,
    }

    localStorage.setItem('userDetails',JSON.stringify(store))
}