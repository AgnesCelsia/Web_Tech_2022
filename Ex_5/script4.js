function convert() {
        var amt = parseFloat(document.getElementById("amt").value);
        var from = document.getElementById("from").value;
        var to = document.getElementById("to").value;
        var ans = document.getElementById("answer");
    
        var toINR = 79.97;
        var toUSD = 0.013;
        var result;
        
        if (from == to) result = amt;
        else if (from == "USD") result = amt*toINR;
        else result = amt*toUSD;
        
        //alert(result);
        ans.innerHTML = amt.toString() + " " + from + " = " + result.toString() + " " + to + "!";
    }