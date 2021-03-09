     //script for log in previous user here
     //data structure:
     //(user name, password value) - indexed by user name :p on end of username for uniqueness
     //(user name, email value) - indexed by user name :e on end of username for uniqueness
     //("curusr", name of current logged in user) 
     document.getElementById("id_logsbmt").addEventListener("click", (e) => {
     e.preventDefault();
     console.log("log button click");
     const usrnamep = document.getElementById("form_log").user.value + ":p";
     const formpsswd =  document.getElementById("form_log").pass.value;
     var usrpsswd = localStorage.getItem(usrnamep);
     // check if password for this username defined
     if (usrpsswd == null){alert("User name does not exist");location.reload();}
     //check if entered password equal to stored password
     if (usrpsswd !== formpsswd){alert("Incorrect password");location.reload();}
     //store name of current user and go to account page
     localStorage.setItem("curusr",usrnamep);
     location.assign("account.html");
     })