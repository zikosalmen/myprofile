///form
function glob(){
    vide()
    vide2()
    vide3()
    versel()
    num()

}
function vide(){
    var x=document.getElementById("fn").value;
    if(x.length<3 ||!(isNaN(x))){
        alert("erreur nom ")
        Break;
         }

}

function vide2(){
    var x=document.getElementById("fp").value;
    if(x.length<3 ||!(isNaN(x))){
        alert("erreur prenom ")
        Break;}
}

function vide3(){
    var x=document.getElementById("fad").value;
    if(x.length<3 ||!(isNaN(x)) || x.indexOf("@")==-1 ||x.indexOf(".")==-1){
        alert("erreur adresse ")
        Break;}
}

function versel(){
    var x=document.getElementById("sel1").value;
    var ch=document.getElementById("op1").value;
    if(x==ch){alert(" selectioner votre region! ")
    Break;}
}

function num(){
    var x=document.getElementById("fnum").value;
    for(let i=0;i<=x.length;i++){
        if(isNaN(x.charAt(i))){alert("erreur numero")
        Break;}
    }
    if(x.length!=8){alert("erreur long numero")
    Break;}

}

///






