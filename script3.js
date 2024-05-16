const WEEK = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"]; // Tableau des jours de la semaine en français.

function updateTime() {
    var now = new Date(); // Obtient la date et l'heure actuelles.

    document.getElementById("time").innerText =
        zeroPadding(now.getHours(), 2) + ":" + // Met à jour l'heure dans l'élément avec l'ID "time".
        zeroPadding(now.getMinutes(), 2) + ":" + // Met à jour les minutes dans l'élément avec l'ID "time".
        zeroPadding(now.getSeconds(), 2); // Met à jour les secondes dans l'élément avec l'ID "time".

    document.getElementById("date").innerText =
        zeroPadding(now.getDate(), 2) + "/" + // Met à jour le jour dans l'élément avec l'ID "date".
        zeroPadding(now.getMonth() + 1, 2) + "/" + // Met à jour le mois dans l'élément avec l'ID "date".
        now.getFullYear() + " " + // Met à jour l'année dans l'élément avec l'ID "date".
        WEEK[now.getDay()]; // Met à jour le jour de la semaine dans l'élément avec l'ID "date".
}

updateTime(); // Appelle updateTime une première fois pour mettre à jour l'heure dès le chargement de la page.
setInterval(updateTime, 1000); // Met à jour l'heure chaque seconde en appelant updateTime.

function zeroPadding(num, digit) {
    return String(num).padStart(digit, '0');
}
