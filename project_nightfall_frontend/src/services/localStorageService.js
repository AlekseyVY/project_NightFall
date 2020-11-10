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

export function setStory(res){
    localStorage.setItem('title', res.data[0].title)
    localStorage.setItem('author', res.data[0].author)
    localStorage.setItem('body', res.data[0].body)
}

export function getStory(){
    const storyObject = {
        title: localStorage.getItem('title'),
        author: localStorage.getItem('author'),
        body: localStorage.getItem('body')
    }
    return storyObject
}

export function deleteStory(){
    localStorage.removeItem('title')
    localStorage.removeItem('author')
    localStorage.removeItem('body')
}