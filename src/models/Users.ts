/* export class User {
    private id: string
    private name: string
    private email:string
    private password: string
    private createdAt: string 

    constructor(
        id: string, 
        name: string, 
        email: string, 
        password: string, 
        createdAt: string,
    ){
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.createdAt = createdAt
    }
} */

export class User{
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private createdAt: string
    ){}

    getId(): string{
        return this.id
    }

    getName(): string{
        return this.name
    }

    getEmail(): string{
        return this.email
    }

    getPassword(): string{
        return this.password
    }

    getCreatedAt(): string{
        return this.createdAt
    }


}

const usuario = new User("u001", "rodrigo", "rodrigo@gmail.com", "123456", "08/05/2023")

console.log(usuario)


