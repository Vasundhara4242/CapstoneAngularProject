export class User {
    

    username:string;
    name:string;
    password:string;
    status:string;
    users:object[];

    constructor()
    {
        // this.users = [
        //     {username:'user1', name:'Gita', password:'user@1' },
        //     {username:'user2', name:'Sadhana', password:'user@2' },
        //     {username:'user3', name:'Lila', password:'user@3' },
        //     {username:'user4', name:'Divya', password:'user@4' },
        //     {username:'user5', name:'Pallavi', password:'user@5' }
        // ];

    }

    getuser()
    {
        return this.users;
    }
}