function cal (){
    var w = document.getElementById("w").value;
    var h = document.getElementById("h").value;

    if(!w || !h){
        return;
    }
    var text;
    var bmi = (w/((h/100)*(h/100))).toFixed(2);


    if(bmi < 18.5){
        text = "BMI ของคุณคือ " + bmi + " อยู่ในสภาวะ “น้ำหนักต่ำกว่าเกณฑ์” "
    }
    else if(bmi >= 18.5 && bmi <= 22.9){
        text = "BMI ของคุณคือ " + bmi + " อยู่ในสภาวะ “น้ำหนักสมส่วน” "
    }
    else if(bmi >= 23.0 && bmi <= 24.9){
        text = "BMI ของคุณคือ " + bmi + " อยู่ในสภาวะ “น้ำหนักเกินมาตรฐาน” "
    }
    else if(bmi >= 25.0 && bmi <= 29.9){
        text = "BMI ของคุณคือ " + bmi + " อยู่ในสภาวะ “อ้วน” "
    }
    else {
        text = "BMI ของคุณคือ " + bmi + " อยู่ในสภาวะ “อ้วนมาก” "
    }
    
    document.getElementById("bmitext").innerHTML = text
}