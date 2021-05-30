var firebaseConfig = {
    apiKey: "AIzaSyAk2iZ8mvSP0z3pj0qy9TywI-Tk5z0CXMU",
    authDomain: "letschat-282b7.firebaseapp.com",
    databaseURL: "https://letschat-282b7-default-rtdb.firebaseio.com",
    projectId: "letschat-282b7",
    storageBucket: "letschat-282b7.appspot.com",
    messagingSenderId: "611084427500",
    appId: "1:611084427500:web:d52a85e4e822015b5f85c9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("Name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addRoom() {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "Adding room name"
        });
        localStorage.setItem("room_name" , room_name);
        window.location = "chatpage.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("Room name is " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'> #"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
        });});}
  
  getData();
  function redirectToroomname(name) {
        console.log(name);
        localStorage.setItem("room_name" , name);
        window.location = "chatpage.html";
  }