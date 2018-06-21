export class User {


    username:string;
    name:string;
    password:string;
    status:string;
    users:object[];

    constructor()
    {

    }

    getuser()
    {
        return this.users;
    }
}
