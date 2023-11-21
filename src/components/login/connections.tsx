import axios  from "axios";

export async function AdmLogin(email: any, password: any) {

    const resp = await axios.post('https://easypass-iak1.onrender.com/admlogin', {
        email: email,
        password: password
    })
    console.log('this is resp: ', resp.data.token);
    localStorage.setItem('token', resp.data.token);

    if (localStorage.getItem('token') != undefined) {
        return('/Sistema')
    }else{
        return('/')
    }
};


export async function EmpresaLogin(cnpj: any, password: any) {

    const resp = await axios.post('https://easypass-iak1.onrender.com/busslogin', {
        cnpj: cnpj,
        password: password
    })
    console.log('this is resp: ', resp.data.token);
    localStorage.setItem('token', resp.data.token);

    if (localStorage.getItem('token') != undefined) {
        return('/Empresa')
    }else{
        return('/')
    }
};