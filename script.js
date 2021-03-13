let Counter = 0;


function Change(Wanted){
    
    let rect = document.getElementById(Wanted);

    let rect1 = document.getElementById("rect1");
    let rect2 = document.getElementById("rect2");
    let rect3 = document.getElementById("rect3");
    let rect4 = document.getElementById("rect4");
    let rect5 = document.getElementById("rect5");
    let rect6 = document.getElementById("rect6");

    let rect1C = "#1296e2";
    let rect2C = "#1296e2";

    let rect3C = "#e2125f";
    let rect4C = "#e2125f";

    let rect5C = "#e2a412";
    let rect6C = "#e2a412";



    let First;
    let Second;





    if(Counter == 0){
        Endcol = eval(Wanted +"C");
        rect.style.backgroundColor = Endcol;
        console.log(Endcol)
        Counter++;
        

    }else if(Counter == 1){
        let Endcol2 = eval(Wanted +"C");
        rect.style.backgroundColor = Endcol2;
        console.log(Endcol2)
        Second = toString(Endcol2);
        console.log(Endcol,Endcol2)
        if(Endcol == Endcol2){
            Counter = -1;
        }
        Counter++;
        
    }else if(Counter == 2){  
            rect1.style.backgroundColor = "#5ace73";
            rect2.style.backgroundColor = "#5ace73";
            rect3.style.backgroundColor = "#5ace73";
            rect4.style.backgroundColor = "#5ace73";
            rect5.style.backgroundColor = "#5ace73";
            rect6.style.backgroundColor = "#5ace73";
           
            
            Counter = 0;
            
        }
    

    


};
