let admin = {
    name: 'Tushar1699',
    email: 'Tushar1699@gmail.com'
}

async function addProduct(){

    let userDetails = JSON.parse(localStorage.getItem('userDetails'))

    let user = await getProfile(userDetails.username, userDetails.token);

    if(user.email!=admin.email){
        alert('Not Authorised');
        return;
    }

    let productData = {
        image: document.getElementById("image").value,
        title: document.getElementById("title").value,
        desc: document.getElementById("desc").value,
        price: document.getElementById("price").value,
        rating: document.getElementById("rating").value
    }

    let res = await fetch(`http://localhost:3000/products`,{
        method: 'POST',
        body: JSON.stringify(productData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let data = await res.json();
    console.log(data);
}

async function getProfile(username,token){

    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{

    headers: {

        Authorization: `Bearer ${token}`
    }
    })

    let data = await res.json();

    return data;
}