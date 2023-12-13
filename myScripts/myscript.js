function compute(operator){
//document.getElementById("result").style.textAlign="right"
     let a=parseInt(document.getElementById("a").value)
     let b=parseInt(document.getElementById("b").value)
     let res=0
    switch(operator){

    case "add": res=a+b 
               document.getElementById("result").value=res
               break

    case "sub": res=a-b 
                document.getElementById("result").value=res
                break

    case"mult": res=a*b 
                 document.getElementById("result").value=res
                 break

    case "div": res=a/b 
                document.getElementById("result").value=res
                break
    }
}