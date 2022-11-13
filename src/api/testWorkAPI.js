import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})


export const orderAPI = {

    order(number) {
        const  data={
            title: 'foo',
            body: 'bar',
            userId: number
        }
        return instance.post("posts", data)
    },
}

