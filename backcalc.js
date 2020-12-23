var x,y,billval=null,tipval=null,personval=null,finaltipval=null,finaltotalval=null,tiptemp=null,missing=false;

function calculate()
{
    billval=document.getElementById("bill-input").value;
    tipval=document.getElementById("tip-input").value;
    personval=document.getElementById("people-input").value;

    check();
    if(missing==true)
    return;
    else
        {

        finaltotalval=billval/personval;
        finaltipval=(billval*tipval/100)/personval;

        finaltotalval=finaltotalval.toFixed(2);
        finaltipval=finaltipval.toFixed(2);

        document.getElementById('finaltip').innerHTML=finaltipval;
        document.getElementById("finaltotal").innerHTML=finaltotalval;
        }
}

function reset()
{
    billval=null;
    tipval=null;
    personval=null;
    document.getElementById('bill-input').value=null;
    document.getElementById('tip-input').value=null;
    document.getElementById('people-input').value=null;
    document.getElementById('finaltip').innerHTML='0.00';
    document.getElementById('finaltotal').innerHTML='0.00';
}

function check()
{
    document.getElementById("error-show").innerHTML="";
    if(billval==0||personval==0)
    {
        missing=true;
        document.getElementById("error-show").innerHTML+="Please enter the missing values for:  ";
        if(billval==0)
        document.getElementById("error-show").innerHTML+=" Bill "
        if(personval==0)
        document.getElementById("error-show").innerHTML+=" Persons"

    }
    if(billval<1||personval<1||tipval<1)
    {
        missing=true;
        if(billval<0)
        document.getElementById("error-show").innerHTML+=" <br> Bill cannot be less than $1 <br>";
        if(personval<0)
        document.getElementById("error-show").innerHTML+=" <br> No. of people cannot be less than 1 <br>";
        if(tipval<0)
        document.getElementById("error-show").innerHTML+=" <br> Tip % cannot be less than 0% <br>";
    }
    if(isnan(billval)||isnan(tipval)||isnan(personval))
    {
        missing=true;
        if(isnan(billval))
        document.getElementById("error-show").innerHTML+="<br> Bill must be a number <br>";
        if(isnan(tipval))
        document.getElementById("error-show").innerHTML+="<br> Tip % must be a number <br>";
        if(isnan(personval))
        document.getElementById("error-show").innerHTML+="<br> No. of people must be a number <br>";
    }
    if(isfloat(tipval))
    {
        missing=true;
        document.getElementById("error-show").innerHTML+="<br> Tip must be a whole number <br>";
    }

}

function tipplus()
{
    document.getElementById("tip-input").value=Number(document.getElementById("tip-input").value)+5;
}

function tipminus()
{
    if(document.getElementById("tip-input").value<5)
    return;
    document.getElementById("tip-input").value=Number(document.getElementById("tip-input").value)-5;
}

function peopleplus()
{
    document.getElementById("people-input").value=Number(document.getElementById("people-input").value)+1;
}

function peopleminus()
{
    if(document.getElementById("people-input").value<2)
    return;
    document.getElementById("people-input").value=Number(document.getElementById("people-input").value)-1;
}

function isnan(x)
{
    if(typeof x!="number")
    return true;
    else
    return false;
}

function isfloat(y)
{
    return y%1===0;
}
