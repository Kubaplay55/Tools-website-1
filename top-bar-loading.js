var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("top-bar").innerHTML = this.responseText;
    }
};
xhttp.open("GET", "/top-bar.html", true);
xhttp.send();
