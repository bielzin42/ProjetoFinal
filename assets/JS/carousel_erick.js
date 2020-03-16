window.load = slide(1);

var bgNumber = 1;

function slide(n){
    var allBgs = 5;
    
    document.getElementById('imagemBg').style.backgroundImage = "url('assets/img/"+n+".jpg ')";
    
}
function anterior(){
    if(bgNumber>1){
        bgNumber--;
        slide(bgNumber);
    }
}
function proximo(){
    if(bgNumber<5){
        bgNumber++;
        slide(bgNumber);
    }
}