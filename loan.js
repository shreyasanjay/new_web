
function loan(){
    var ele = `<form>
    <label>Applicant Name: </label><br><input type="text" id="name" placeholder="Enter full name"><br>
    <label for="loans">Loan Type: </label><br>
    <select name="loan" id="type">
        <option  value="loan" selected>Choose Loan type</option>
        <option id="car" value="Car" >Car Loan</option>
        <option id="home" value="Home" >Home Loan</option>
        <option id="personal" value="Personal" >Personal Loan</option>
    </select><br>
    <label>Loan amount: </label><br><input type="text" id="amt" placeholder="Enter loan amount"><br>
    <label>Rate of Interest: </label><br><input type="text" id="roi"><label>pcpa</label><br>
    <label>Duration(in years): </label><br><input type="text" id="duration"><br>
    <label>EMI: </label><br><input type="text" id="emi"><br>
    <input type="button" value="Calculate EMI" id="bt">
</form>`;
document.getElementById('d1').innerHTML = ele;
document.getElementById('d1').style.width = "50%";
document.getElementById('loan').innerHTML = "";
document.getElementById('deposit').innerHTML = "";

function roi(){
    var q = document.querySelector('#type');
    console.log('in roi', q);
    if(q.value == 'Home'){
        document.getElementById('roi').value = '7';
        document.getElementById('roi').disabled = true;
    }
    else if(q.value == 'Car'){
        document.getElementById('roi').value = '9';
        document.getElementById('roi').disabled = true;
    }
    else if(q.value == 'Personal'){
        document.getElementById('roi').value = '12';
        document.getElementById('roi').disabled = true;
    }

}

function dur(){
    var p = document.querySelector('#type');
    var d = document.getElementById('duration').value;
    if((p.value == 'Home') && (d > 25)){
        alert('Duration for Home loan cannot be more than 25 years')
    }
    else if((p.value == 'Car') && (d > 7)){
        alert('Duration for Car loan cannot be more than 7 years')
    }
    else if((p.value == 'Personal') && (d > 5)){
        alert('Duration for Personal loan cannot be more than 5 years')
    }
    
}

function cal(){
    var p = document.querySelector('#amt').value;
    var r = document.querySelector('#roi').value;
    var d = document.querySelector('#duration').value;
    var res = eval(Number(p*r*(1+r)*d/((1+r)*d-1)));
    document.getElementById('emi').value = res;
    document.getElementById('emi').disabled = true;
}
document.getElementById('type').addEventListener('change', function(){ roi(); });
document.getElementById('duration').addEventListener('focusout', function(){ dur(); });
document.getElementById('bt').addEventListener('click', function(){ cal(); });
}

