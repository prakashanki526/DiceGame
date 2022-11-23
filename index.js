
    var r1= Math.floor(Math.random()*6)+1;
    var randomDice1 = "images/dice"+r1+".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomDice1);

    var r2= Math.floor(Math.random()*6)+1;
    var randomDice2 = "images/dice"+r2+".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomDice2);

    if(r1>r2){
        document.querySelector("h1").innerHTML="Player1 wins";
    }
    else if(r1<r2){
        document.querySelector("h1").innerHTML="Player2 wins";
    }
    else{
        document.querySelector("h1").innerHTML="It's a tie";
    }