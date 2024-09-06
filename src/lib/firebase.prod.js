import Firebase from "firebase/app"; //this is what we'll use for our database
import "firebase/firestore"; //
import "firebase/auth"; //this is for authentication

//somehow find a way to seed out database

//creating our configuration for firebase itself
const config = {};

const firebase = Firebase.initializeApp(config); //getting firebase started

export { firebase }; //send this out so our app can link to it
