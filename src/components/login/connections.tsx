import axios  from "axios";

export async function AdmLogin(email: any, password: any) {
    const resp = await axios.post('http://127.0.0.1:3344/admlogin', {
        email: email,
        password: password
    })
    console.log('this is resp: ', resp);
    
    return(<>{resp}</>)
};