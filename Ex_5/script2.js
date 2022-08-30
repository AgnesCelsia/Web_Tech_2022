function bmi() {
        var h = parseFloat(document.getElementById("height").value)/100;
        var w = parseFloat(document.getElementById("weight").value);
    
        var bmi = w / (h * h);
        var result;
    
        if (bmi < 18) result = "Underweight";
        else if (bmi >= 18 && bmi < 25) result = "Normal";
        else if (bmi >= 25 && bmi < 30) result = "Overweight";
        else result = "Obese";
    
        document.getElementById("bmi").innerHTML = "BMI: " + bmi.toPrecision(4);
        document.getElementById("result").innerHTML = "Result: You are " + result + "!";
    }