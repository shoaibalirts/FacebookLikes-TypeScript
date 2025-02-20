// import { Like } from "./like";
class Like {
  constructor(private noOfLikes: number, private _btnState: boolean) {
    console.log("Likes: " + noOfLikes);
    console.log("Button State: " + _btnState);
  }
  set btnState(value: boolean) {
    this._btnState = value;
  }
  
  userAction() {
    if (this._btnState) {
      this.noOfLikes = this.noOfLikes + 1;
      this._btnState = false;
    } else {
      this.noOfLikes = this.noOfLikes - 1;
      this._btnState = true;
    }
    console.log("No. Of Likes: " + this.noOfLikes);
    console.log("btn State: "+this._btnState);
  }
}

const like = new Like(100, true);
const button = document.getElementById("myButton") as HTMLButtonElement;
// let p = document.getElementById("facebook") as HTMLButtonElement;
// console.log("p tag: ",p);
button.addEventListener("click", handleClick);

function handleClick(){
    like.userAction();
}