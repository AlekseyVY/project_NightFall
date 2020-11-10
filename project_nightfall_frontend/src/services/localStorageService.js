export function storeToken(data) {
    localStorage.setItem('token', data)
}

export function getToken() {
    return localStorage.getItem('token')
}

export function setAuth(data){
        localStorage.setItem('isAuth', data)
}

export function getAuth(){
    return localStorage.getItem('isAuth')
}

export function removeToken() {
    localStorage.removeItem('token')
}