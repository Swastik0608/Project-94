 // Your web app's Firebase configuration

 const firebaseConfig = {
  apiKey: "AIzaSyAKlHPiwRQ-qBq13LuQd3sC1uJNrccB65o",
  authDomain: "chatapp-d3f5e.firebaseapp.com",
  projectId: "chatapp-d3f5e",
  storageBucket: "chatapp-d3f5e.appspot.com",
  messagingSenderId: "262527749251",
  appId: "1:262527749251:web:3df1cf5ac008388f749fb6"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";

    firebase.database().ref("/").child(user_name).update({
        CHAT : "I'm going to the market!"
});
}