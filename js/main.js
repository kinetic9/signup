function passCheck(form){
    var list = [];
    if(form.pswd.value === form.pswdconf.value  &&  form.pswd.value.length > 0){

        list.push(form.name.value);
        list.push(form.surname.value);
        list.push(form.email.value);
        list.push(form.pswd.value);
        list.push(form.pswdconf.value);

        console.log(list);

        alert("Success");
        
    }
    else{
        alert("Passwords do not match");
    }
}