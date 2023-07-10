var num2;
function quotes(){
    var num=Math.floor(Math.random()*11);
    if(num2==num){
        console.log(Math.floor(Math.random()*10))
        num+=1;
    }
    num2=num;
    console.log(num);
    switch(num){
        case 1:
            document.getElementById("quote").innerHTML ='"Two things are infinite: the universe and human stupidity; and I'+ "'"+'m not sure about the universe"';
            break;
        case 2:
            document.getElementById("quote").innerHTML = '"A room without books is like a body without a soul."';
            break;
        case 3:
            document.getElementById("quote").innerHTML = '“'+'If you tell the truth, you don'+"'t have to remember anything.”";
            document.getElementById("quote").innerHTML ='“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”';
            break;
        case 4:
            document.getElementById("quote").innerHTML ='“To live is the rarest thing in the world. Most people exist, that is all.”';
            break;
        case 5:
            document.getElementById("quote").innerHTML =' “Always forgive your enemies; nothing annoys them so much.”';
            break;
        case 6:
            document.getElementById("quote").innerHTML ='“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”';
            break;
        case 7:
            document.getElementById("quote").innerHTML ='“Live as if you were to die tomorrow. Learn as if you were to live forever.”';
            break;
        case 8:
            document.getElementById("quote").innerHTML ='“We accept the love we think we deserve.”';
            break;
        case 9:
            document.getElementById("quote").innerHTML ='“Without music, life would be a mistake.”';
            break;
        case 10:
            document.getElementById("quote").innerHTML ='“It is better to be hated for what you are than to be loved for what you are not.”';
            break;
        case 11:
            document.getElementById("quote").innerHTML ='“Insanity is doing the same thing, over and over again, but expecting different results.”';
            break;

    }

    
}