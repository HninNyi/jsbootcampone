const form = document.querySelector('.form'),
    username= document.getElementById('username'),
    email=document.getElementById('email'),
    password=document.getElementById('password'),
    cfmpassword=document.getElementById('cfmpassword');


    //show success
    function showsuccess(input){

        const formcontrol = input.parentElement;
        formcontrol.className="form-control success";

    }

    //show error
    function showerror(input,message){
        const formcontrol=input.parentElement;
        formcontrol.className="form-control error";
        const small=formcontrol.querySelector('small');
        small.innerText=message;
    }

    //check required fields
    function checkrequired(inputarr){

        inputarr.forEach(function(input){

        if(input.value === ""){

            // showerror(input,"Something is required");
            showerror(input, `${getfieldname(input)} is required`);
        }else{

            showsuccess(input);
        }
            
        });
    }

    function checkpassword(input1,input2){
        if(input1.value !== input2.value){
            showerror(input2,"Password isn't match");
        }
    }

    function checklength(input,min,max){
        if(input.value.length<min){
            showerror(input , `${getfieldname(input)} must be at least ${min} characters`);

        }else if(input.value.length > max){
            showerror(input, `${getfieldname(input)} must be less than ${max} characters`);
        }else{
           showsuccess(input);
        }
    

    }
    function checkemail(input){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(re.test(input.value)){
            showsuccess(input);
        }else{
            showerror(input,"Email is not valid")
        }
        
        return re.test(String(input.value).toLowerCase());



    }

    //Get fields name
    function getfieldname(input){

        return input.name.charAt(0).toUpperCase() + input.id.slice(1);

    }

//Event Listener
form.addEventListener('submit',function(e){
    // console.log(username.value);
    checkrequired([username,email,password,cfmpassword]);

    checklength(username,3,15);

    checkemail(email);

    checkpassword(password,cfmpassword);


    e.preventDefault();
})



// 9CPU WDF2008