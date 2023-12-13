let counters=[0,0,0,0,0,0]
let gtotal=0
let gcounter=0
function addtocart(item){
    document.getElementById("mycounter").innerHTML=++gcounter
    switch(item){
        case 0: document.getElementById("qtty"+item).innerHTML=++counters[item]
                document.getElementById("amount"+item).innerHTML=(counters[item]*allfruits[item].price).toFixed(2)
                gtotal+=allfruits[item].price
                break;

        case 1:document.getElementById("qtty"+item).innerHTML=++counters[item]
               document.getElementById("amount"+item).innerHTML=(counters[item]*allfruits[item].price).toFixed(2)
               gtotal+=allfruits[item].price
             break;

        case 2:document.getElementById("qtty"+item).innerHTML=++counters[item]
               document.getElementById("amount"+item).innerHTML=(counters[item]*allfruits[item].price).toFixed(2)
               gtotal+=allfruits[item].price
               break;

        case 3:document.getElementById("qtty"+item).innerHTML=++counters[item]
               document.getElementById("amount"+item).innerHTML=(counters[item]*allfruits[item].price).toFixed(2)
               gtotal+=allfruits[item].price
               break;
             
        case 4:document.getElementById("qtty"+item).innerHTML=++counters[item]
               document.getElementById("amount"+item).innerHTML=(counters[item]*allfruits[item].price).toFixed(2)
               gtotal+=allfruits[item].price
               break;
               
        case 5:document.getElementById("qtty"+item).innerHTML=++counters[item]
               document.getElementById("amount"+item).innerHTML=(counters[item]*allfruits[item].price).toFixed(2)
               gtotal+=allfruits[item].price
               break;           
    }
    document.getElementById("gtotal").innerHTML=gtotal.toFixed(2)
}
function removefromcart(item){
    if(gcounter>0)
    document.getElementById("mycounter").innerHTML=--gcounter
    switch(item){
        case 0: 
                if(counters[item]>0){
                document.getElementById("qtty"+item).innerHTML=--counters[item]
                document.getElementById("amount"+item).innerHTML=(counters[item]*allfruits[item].price).toFixed(2)
                gtotal-=allfruits[item].price
                }
                break;
        
        

        case 1: if(counters[item]>0){
               document.getElementById("qtty"+item).innerHTML=--counters[item]
               document.getElementById("amount"+item).innerHTML=(counters[item]*allfruits[item].price).toFixed(2)
               gtotal-=allfruits[item].price
        }
               break;

        case 2: if(counters[item]>0){
            document.getElementById("qtty"+item).innerHTML=--counters[item]
               document.getElementById("amount"+item).innerHTML=(counters[item]*allfruits[item].price).toFixed(2)
               gtotal-=allfruits[item].price
        }
               break;

        case 3:
            if(counters[item]>0){
                document.getElementById("qtty"+item).innerHTML=--counters[item]
               document.getElementById("amount"+item).innerHTML=(counters[item]*allfruits[item].price).toFixed(2)
               gtotal-=allfruits[item].price
            }
               break;

        case 4: if(counters[item]>0){
            document.getElementById("qtty"+item).innerHTML=--counters[item]
               document.getElementById("amount"+item).innerHTML=(counters[item]*allfruits[item].price).toFixed(2)
               gtotal-=allfruits[item].price
        }
               break; 
        case 5: if(counters[item]>0){
                document.getElementById("qtty"+item).innerHTML=--counters[item]
                   document.getElementById("amount"+item).innerHTML=(counters[item]*allfruits[item].price).toFixed(2)
                   gtotal-=allfruits[item].price
            }
                   break;                 
    }
    document.getElementById("gtotal").innerHTML=gtotal.toFixed(2)
}
for(let i=0;i<allfruits.length;i++){
    let el=document.createElement("li")
    el.setAttribute("id",i)
    el.setAttribute("class","list-group-item m-2")
    el.innerHTML="<div style='display:flex;flex-direction:row'><span style='display:inline-block; width:200px;margin-top:50px'>"+
    allfruits[i].fruitname+
    " "+allfruits[i].price+" /kg "
    +allfruits[i].color+"</span>"+
    "<img src=' "+allfruits[i].imageUrl+"'width=100px' heigth='100px'>"+
    "<button class='btn btn-primary m-2 mt-4' id='buy' onclick='addtocart("+i+")'>Buy</button>"+
    "<button class='btn btn-danger m-2 mt-4' id='cancel' onclick='removefromcart("+i+")'>Cancel</button>"+
    "<span style='font-weight:bold;font-style:arial;display:flex;margin-top:50px;margin-left:40px;width:200px'><div id='qtty"+i+"'>0</div>* "+allfruits[i].price+"=<div id='amount"+i+"'>0</div></span>"
    document.getElementById("fruitlist").appendChild(el)
}