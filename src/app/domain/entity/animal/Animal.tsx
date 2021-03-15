export class Animal {
    id:string
    name : string 
    age : number 
    category : string 
    environment : string 

    constructor(id:string, name : string, age: number, category: string, environment : string){
        this.id = id
        this.name = name
        this.age = age
        this.category = category
        this.environment = environment
    }
}