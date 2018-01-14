
$(document).ready(function(){
    $("#about1").click(function(){
        $("#slide1").slideToggle();
    });
});

$(document).ready(function(){
  $("#about2").click(function(){
    $("#slide2").slideToggle();
  })
})

function eraseFunction()  {
    var aux;
    aux = document.getElementsByName("nume");
    var ok = 0;
    if (aux[0].value.toString() != "")  {
      ok = 1;
      aux = document.getElementsByName("telefon");
      if (aux[0].value.toString() != "")  {
        ok = 1;
        aux = document.getElementsByName("inttimp");
        if (aux[0].value.toString() != "")  {
          ok = 1;
          aux = document.getElementsByName("magazin");
          if  (aux[0].value.toString() != "")   {
            ok = 1;
            aux = document.getElementById("list");
            if (aux.value.toString() != "")   {
              ok = 1;
            }
            else  {
              ok = 0;
            }
          }
          else {
            ok = 0;
          }
        }
        else  {
          ok = 0;
        }
      }
      else {
        ok = 0;
      }
    }

    if (ok == 1)  {

    var x = document.getElementsByTagName("input");
    var i;
    for (i = 0; i < x.length; i ++)   {
      x[i].value = "";
    }
    var y = document.getElementsByTagName("textarea");
    for (i = 0; i < y.length; i ++)   {
      y[i].value = "";
    }
    alert("Comanda a fost efecutata");
  }
  else  {
    alert("Verificati campurile obligatorii!");
  }
}
