const terms = document.getElementById('years');
const bubble=document.querySelector('.bubble');


// list for terms
terms.addEventListener('input',function(){
    const val= terms.value;
    // console.log(val);
    bubble.innerHTML = val>1 ?  `${val} Months ` : `${val} Month`;
});


document.getElementById('loan-form').addEventListener('submit',function(e){
    document.getElementById('results').style.display="none";
    document.getElementById('loading').style.display="block";
    setTimeout(calculateresult,1000);
  e.preventDefault();     // for not to reload
});


// Calculate the result

function calculateresult(){
    //console.log('calculating');
    //get UI value
    const amount=document.getElementById('amount');
    const interest =document.getElementById('interest');

    const monthlypayment=document.getElementById('monthly-payment');
    const totalpayment=document.getElementById('total-payment');
    const totalinterest =document.getElementById('total-interest');

    const getprincipal= parseFloat(amount.value);
    const getinterest=parseFloat(interest.value)/12;
    const getterms=parseFloat(terms.value);


    //compute monthly payment
    const monthly =Math.round((getprincipal*(getterms*getinterest))/100);

    //console.log(monthly);

    if(monthly){

        monthlypayment.value=((getprincipal+ monthly)/getterms).toFixed(2);
        totalinterest.value=monthly;
        totalpayment.value = (monthlypayment.value * getterms).toFixed(2);


        // show result
        
        document.getElementById('loading').style.display="none";

        document.getElementById('results').style.display='block';

      


    }else{
        // console.log("please enter your amount");

        showerror("Please check ur amount !!!")
    }



}

// show error 

function showerror(message){


    document.getElementById('loading').style.display="none";
    document.getElementById('results').style.display="none";
    const errordiv = document.createElement('div');

    // add class
    errordiv.className="alert alert-danger";

    // create textnode
    errordiv.appendChild(document.createTextNode(message));

    // get element
    const card=document.querySelector(".card");
    const heading =document.querySelector('.heading');

    // insert error between card and header
    card.insertBefore(errordiv,heading);
    setTimeout(clearerror,3000);

}

//clear error 
function clearerror(){
    document.querySelector('.alert').remove();

}


