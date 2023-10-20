import axios  from "axios";

export async function AdmLogin(email: any, password: any) {

    const resp = await axios.post('http://localhost:3344/admlogin', {
        email: email,
        password: password
    })
    console.log('this is resp: ', resp.data.token);
    await localStorage.setItem('token', resp.data.token);

    if (localStorage.getItem('token') != undefined) {
        return('/admhome')
    }else{
        return('/adm')
    }
};