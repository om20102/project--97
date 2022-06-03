// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDQb6ZT6BcHATUp3PlIrrUEYZNjQJuuOCk",
      authDomain: "whatsapp-c79ab.firebaseapp.com",
      projectId: "whatsapp-c79ab",
      storageBucket: "whatsapp-c79ab.appspot.com",
      messagingSenderId: "898910694197",
      appId: "1:898910694197:web:b851d5b115e3bc1b30fa7c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
un = localStorage.getItem("name");
document.getElementById("h3").innerHTML = "Welcome " + un +"!";

function addroom (){
rn = document.getElementById("ip").value ;
firebase.database().ref("/").child(rn).update({
    purpose : "by a person"
});
localStorage.setItem("roomname",rn);
window.location = "whatsapp_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     row = "<div class='roomname' id ="+Room_names+" onclick ='redirectToRoomName(this.id)'># "+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();
function redirectToRoomName(name){

      localStorage.setItem("roomname",name);
      window.location = "whatsapp_page.html";
}

function logout(){
localStorage.removeItem("name");
localStorage.removeItem("roomname");
window.location = "index.html";
}