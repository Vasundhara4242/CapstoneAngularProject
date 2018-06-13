export class circle {
    

    circleName:string;
    creatorId:string;
    

    circles:object[];

    constructor()
    {
        this.circles = [
            {circlename:'circle1', creatorid:'user1' },
            {circlename:'circle2', creatorid:'user2' },
            {circlename:'circle3', creatorid:'user1' },
            {circlename:'circle4', creatorid:'user3' },
            
        ];

    }

    getcircle()
    {
        return this.circles;
    }
}