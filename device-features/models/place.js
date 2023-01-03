export class Place{
    constructor(title, imageUri, address, location){
        this.title=title;
        this.imageUri=imageUri;
        this.address=address;
        this.location=location;
        this.id=new Date().toDateString()+Math.floor(Math.random()*100).toString();
    }
}