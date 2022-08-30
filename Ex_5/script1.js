function string() {
        var str = document.getElementById("string").value;
        var l = str.split(' ');
        
        var minstr = [];
        var maxstr = [];
    
        var max = Number.MIN_VALUE;
        var min = Number.MAX_VALUE;
    
        for (var i = 0; i < l.length; i++) {
            if (l[i].length < min) min = l[i].length;
            if (l[i].length > max) max = l[i].length;
        }
    
        for (var i = 0; i < l.length; i++) {
            if (l[i].length == min) minstr.push(l[i]);
            if (l[i].length == max) maxstr.push(l[i]);
        }
        
        document.getElementById("outputmin").innerHTML = "Shortest word(s): " + minstr.toString();
        document.getElementById("outputmax").innerHTML = "Longest word(s): " + maxstr.toString();
    }
    