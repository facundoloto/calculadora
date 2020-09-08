//ariables
let n1=document.getElementById("n1")////.addEventListener("click",numero1)
let n2=document.getElementById("n2")//.addEventListener("click",numero2)
let n3=document.getElementById("n3")//.addEventListener("click",numero3)
let n4=document.getElementById("n4")//.addEventListener("click",numero4)
let n5=document.getElementById("n5")//.addEventListener("click",numero5)
let n6=document.getElementById("n6")//.addEventListener("click",numero6)
let n7=document.getElementById("n7")//.addEventListener("click",numero7)
let n8=document.getElementById("n8")//.addEventListener("click",numero8)
let n9=document.getElementById("n9")//.addEventListener("click",numero9)
let n0=document.getElementById("n0")//.addEventListener("click",numero0)
let ce=document.getElementById("ce")//.addEventListener("click",resetear)
let resultado=document.getElementById("resultado")
let suma=document.getElementById("s")//.addEventListener("click",suma)
let restar=document.getElementById("r")//.addEventListener("click",resta)
let multiplicacion=document.getElementById("m")//.addEventListener("click",multiplacion)
let division=document.getElementById("d")//.addEventListener("click",division)
let boton_resultado=document.getElementById("rs")//.addEventListener("click",resultado)
let punto=document.getElementById("punto")
let borrar=document.getElementById("borrar")
let numero_1
let numero_2
let operacion //guarda la operacion hasta que se resete los valores
let total 
let activado=false
let rs

//funciones
 borrar.addEventListener("click",function ()
 {   
     let x=resultado.textContent
     let ar
     ar= x.split("")
     console.log( x )

ar.pop()

console.log(ar)
resultado.textContent=ar
  }
)
punto.addEventListener("click",function ()
 {
      resultado.textContent = resultado.textContent  + ".";
  }
 )
n0.addEventListener("click",function ()
 {
      resultado.textContent = resultado.textContent  + "0";
  }
)
resultado.addEventListener("keydown",e=>{
  if(e.key=="1"){
    resultado.textContent = resultado.textContent  +"1"
  }
}


)
n1.addEventListener("click",function ()
 {
      resultado.textContent = resultado.textContent  +"1";
  }
)
n2.addEventListener("click",function ()
 {
      resultado.textContent = resultado.textContent  + "2";
  }
)
n3.addEventListener("click",function ()
 {
      resultado.textContent = resultado.textContent  + "3";
  }
)
n4.addEventListener("click",function ()
 {
      resultado.textContent = resultado.textContent  + "4";
  }
)
n5.addEventListener("click",function ()
 {
      resultado.textContent = resultado.textContent  + "5";
  }
)
n6.addEventListener("click",function ()
 {
      resultado.textContent = resultado.textContent  + "6";
  }
)
n7.addEventListener("click",function ()
 {
      resultado.textContent = resultado.textContent  + "7";
  }
)
n8.addEventListener("click",function ()
 {
      resultado.textContent = resultado.textContent  + "8";
  }
)
n9.addEventListener("click",function ()
 {
      resultado.textContent = resultado.textContent  + "9";
  }
)


 ce.addEventListener("click",function(){
document.getElementById("resultado").innerHTML=""
numero_1 = 0
numero_2 = 0
operacion = " "
activado=false
res=0
}
 )
suma.addEventListener("click",function(){
numero_1 = resultado.textContent
operacion = "+" //guarda valor para usarlo como opcion en resolver
resultado.textContent=""
}
  )
restar.addEventListener("click",function(){
numero_1 = resultado.textContent
operacion = "-" //guarda valor para usarlo como opcion en resolver
resultado.textContent=""
}
)
multiplicacion.addEventListener("click",function(){
numero_1 = resultado.textContent
operacion = "*" //guarda valor para usarlo como opcion en resolver
resultado.textContent=""
}
)
division.addEventListener("click",function(){
numero_1 = resultado.textContent
operacion = "/" //guarda valor para usarlo como opcion en resolver
resultado.textContent=""
}
)
boton_resultado.addEventListener("click",function(){
numero_2 = resultado.textContent
resolver()
}
)



function resolver(){
switch(operacion){
case "+":

if(activado==true){
  //suma al apretar resultado tl total mas el numero2
total=parseFloat(resultado.textContent)
total=total+rs
resultado.textContent =total;


 }
else{
  total=parseFloat(numero_1)+parseFloat(numero_2)
  resultado.textContent=total
  rs=parseFloat(numero_2)//guarda para usarlo como suma al apretar resultado tl total mas el numero2
  activado=true//activa bandera si esta activada ejecuta el codigo de arriba y no este
  console.log(2)
 numero_1=0
}

break
case "-":

if(activado){
rs=total - parseFloat(numero_2)
resultado.textContent =rs;


 }
else{
  total=parseFloat(numero_1)-parseFloat(numero_2)
  resultado.textContent=total
  activado=true
}

break
case "*":

if(activado){
rs=total * parseFloat(numero_2)
resultado.textContent =rs;


 }
else{
  total=parseFloat(numero_1)*parseFloat(numero_2)
  resultado.textContent=total
  activado=true
}

break
case "/":

if(activado){
rs=total/parseFloat(numero_2)
resultado.textContent =rs;


 }
else{
  total=parseFloat(numero_1)/parseFloat(numero_2)
  resultado.textContent=total
  activado=true
}

break
}

}