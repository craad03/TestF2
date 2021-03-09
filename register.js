document.getElementById("id_regbtn").addEventListener("click", (e) => {
     e.preventDefault();
     console.log("register button click");
     const usrname = document.getElementById("form_reg").user.value;
     const formpsswd =  document.getElementById("form_reg").pass.value;
     const formemail = document.getElementById("form_reg").email.value;
     //data structure:
     //   (user name, password value) - indexed by user name
     //   (user name, email value) - indexed by user name
     console.log(usrname);
     console.log(formpsswd);
     console.log(formemail);
     //store new username, password, and email address in local localStorage
     //use :p and :e to uniqify username, you can only have 1 field per index
     localStorage.setItem(usrname + ":p",formpsswd);
     localStorage.setItem(usrname + ":e",formemail);
     localStorage.setItem("curusr",usrname + ":p");
     
     location.assign("account.html");
     })