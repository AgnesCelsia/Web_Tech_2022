function bill() {
        var half = parseInt(document.getElementById("small").value);
        var one = parseInt(document.getElementById("medium").value);
        var two = parseInt(document.getElementById("large").value);
        var total;
    
        var small = 100;
        var medium = 200;
        var large = 400;
    
        total = (half*small) + (one*medium) + (two*large);
        var tax = 0.09 * total;
        total += tax;
    
        var radio = document.getElementsByName("tip");
        var tip;
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked) tip = ((radio[i].value)/100)*total;
        }
        total += tip;
    
        document.getElementById("price").innerHTML = "Cost of order: " + total + " rupees!"
        
    }