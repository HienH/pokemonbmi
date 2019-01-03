
function BMIcalc(){
    //Collect input
    let w_text= document.getElementById('weight');
    let h_text= document.getElementById('height');

    let w= parseInt(w_text.value);
    let h=parseInt(h_text.value);
    h = h/100;
    //Validate inputs
    let errMsg= "";
    if (w<=0) {
        errMsg = errMsg + "Weight cannot by negative \n"; 
    }
    if (h<=0) {
        errMsg = errMsg + "Height cannot by negative"; 
    }
    // 
    if (errMsg != ""){
        alert(errMsg);
    }
    else {
        let BMI = ((w)/(h*h));

        if (BMI<=10){
            alert("Invalid BMI calculation. \nPlease enter valid weight and height!  ");

        }
        else if (BMI<=14){
            $('#\\#myModal1').modal('show');
            alert("Your BMI is " +BMI.toFixed(2));

        }
        else if (BMI<=16){
            $('#\\#myModal2').modal('show');
            alert("Your BMI is " +BMI.toFixed(2));
        }
        else if (BMI<=18){
            $('#\\#myModal3').modal('show');
            alert("Your BMI is " +BMI.toFixed(2));

        }
        else if (BMI<=21){
            $('#\\#myModal4').modal('show');
            alert("Your BMI is " +BMI.toFixed(2));

        }
        else if (BMI<=24){
            $('#\\#myModal5').modal('show');
            alert("Your BMI is " +BMI.toFixed(2));

        }
        else if (BMI<=25){
            $('#\\#myModal6').modal('show');
            alert("Your BMI is " +BMI.toFixed(2));

        }
        else if (BMI<=26){
            $('#\\#myModal7').modal('show');
            alert("Your BMI is " +BMI.toFixed(2));

        }
        else if (BMI<=27){
            $('#\\#myModal8').modal('show');
            alert("Your BMI is " +BMI.toFixed(2));

        }
        else if (BMI<=29){
            $('#\\#myModal81').modal('show');
            alert("Your BMI is " +BMI.toFixed(2));

        }
         else if (BMI<30){
            $('#\\#myModal9').modal('show');
            alert("Your BMI is " +BMI.toFixed(2));
       }
        else if (BMI<32){
            $('#\\#myModal10').modal('show');
            alert("Your BMI is " +BMI.toFixed(2));
    }
        else if (BMI<=34){
            $('#\\#myModal11').modal('show');
            alert("Your BMI is " +BMI.toFixed(2));

    }
        else if (BMI<=36){
            $('#\\#myModal12').modal('show');
            alert("Your BMI is " +BMI.toFixed(2));

    }
        else if (BMI<=38){
            $('#\\#myModal13').modal('show');
            alert("Your BMI is " +BMI.toFixed(2));

    }

        else if (BMI>40){
        alert("Invalid BMI calculation. \nPlease enter valid weight and height! ");

    }
}
}


















/*
let BMI = function(mass,heigth) {
    return mass / (heigth*heigth); 

}

let HienBMI= BMI(65,1.66);
let SylviaBMI=BMI(50,1.70);
let heavier= (HienBMI>SylviaBMI);
console.log(heavier);
let statement = "Is Hien's BMI higher than Sylvia's BMI? "+ heavier; 
console.log(statement);
/*
let MarkTeamScore=[89,120,103];
let MikeTeamScore=[116,94,123];

let AverageScore= function(){
    let sum=[];
    for (let i=0;i<this.length;i++){
        i
    }
}
*/
