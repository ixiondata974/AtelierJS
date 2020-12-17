
var imgPla = [document.getElementById('1_1'), document.getElementById('1_2'), document.getElementById('1_3'),
    document.getElementById('2_1'), document.getElementById('2_2'), document.getElementById('2_3'),
    document.getElementById('3_1'), document.getElementById('3_2'), document.getElementById('3_3')];
var unePartie = new Partie(imgPla);

imgPla.forEach(elm);
function elm(item) {
    item.src = "assets/img/vide.jpg";
}

var plateau = [document.getElementById('1'), document.getElementById('2'), document.getElementById('3'),
    document.getElementById('4'), document.getElementById('5'), document.getElementById('6'),
    document.getElementById('7'), document.getElementById('8'), document.getElementById('9')];
plateau.forEach(click);
function click(item, index) {
    item.addEventListener('click', function () {
        imgPla[index].src = unePartie.changementIcon();
        unePartie.setIcon();

    });
}
