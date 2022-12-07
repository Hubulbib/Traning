const clients = [
    {id: 1, name: 'Kamal', age: 18},
    {id: 2, name: 'Yaroslav', age: 18},
    {id: 3, name: 'Kirill', age: 17}
]

interface Client {
    name: string
    age: number
}

interface ClientUpdate {
    name?: string
    age?: number
}

class ClientService {
    getClient = async (id: number) => {
        return (clients.filter(el => el.id === id))[0]
    }

    createClient = async (data: Client) => {
        const id = Math.floor(Math.random() * 1000 + 5)

        clients.push({id, name: data.name, age: data.age})
    }

    updateClient = async (id: number, data: ClientUpdate) => {
        let client = {}
        clients.forEach(el => {
            if(el.id === id) {
                client = {...el, ...data}
                return client
            }
            return el
        })
        return client
    }

    deleteClient = async (id: number) => {
        return clients.filter(el => el.id !== id)
    }
}

export default new ClientService()