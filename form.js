function validateForm() {
    let fn = document.forms["validationk"]["firstname"].value;
    let ln = document.forms["validationk"]["lastname"].value;
    let a = document.forms["validationk"]["Adress"].value;
    let p = document.forms["validationk"]["Password"].value;
    let e = document.forms["validationk"]["E-mail"].value;
    let com = document.forms["validationk"]["commentaire"].value;
    let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
    if ((fn == "") || (ln == "") || (a == "") || (com == "")) {
      alert("please fill out field(s)")
      return false
    }
    if(!strongRegex.test(p)){
    alert("Invalid Password")
    return false; }

    if(!regex.test(e)){
      alert("bad e-mail adress")
      return false
    }

    alert('submission succeded')
    return false
  }
  
  

