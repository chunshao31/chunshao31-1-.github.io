var score = 0;
function getRadioValue1(){
    var radio = document.querySelector("input[name='t1']:checked");
    if(radio.value=="A"){
        document.getElementById('tf1').innerHTML = "Your answer is correct!";
    }
    else{
        document.getElementById('tf1').innerHTML = "Incorrect, the correct answer is A.";
    }
}
function getRadioValue2(){
    var radio = document.querySelector("input[name='t2']:checked");
    if(radio.value=="C"){
        document.getElementById('tf2').innerHTML = "Your answer is correct!";
    }
    else{
        document.getElementById('tf2').innerHTML = "Incorrect, the correct answer is C.";
    }
}

