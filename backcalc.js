var billval=null,tipval=null,personval=null,finaltipval=null,finaltotalval=null;

function calculate()
{
    //alert("I am an alert box!");

    billval=document.getElementById("bill-input").value;
    tipval=document.getElementById("tip-input").value;
    personval=document.getElementById("people-input").value;

    finaltotalval=billval/personval;
    finaltipval=(billval*tipval/100)/personval;

    document.getElementById('finaltip').innerHTML=finaltipval;
    document.getElementById("finaltotal").innerHTML=finaltotalval;
}

