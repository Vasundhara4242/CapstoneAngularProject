export class User {


    username:string;
    name:string;
    password:string;
    status:string;
  statuses:object[];
    users:object[];

    constructor()
    {

    }

    getuser()
    {
        return this.users;
    }

    getstatus()
    {
      return this.status;
    }
}
