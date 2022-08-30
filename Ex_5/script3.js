function grow() {
        var r = parseInt(document.getElementById("rows").value);
        var c = parseInt(document.getElementById("cols").value);
        var l = ["apple.jpg", "Orange.png"];
        //document.getElementById("garden").innerHTML = null;
        var garden = document.getElementById("garden");
        
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                var fruit = Math.floor(Math.random() * 2);
                var img = '<img src=' + l[fruit] + ' width = "150px" height = "150px"></img>';
                garden.innerHTML += img;
            }garden.innerHTML += "<br>";
        }
    }