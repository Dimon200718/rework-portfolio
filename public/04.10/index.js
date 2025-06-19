let b = document.getElementById("buttn")
b.addEventListener(
    "click", function(){
        let sum = 0
        for (let i = 1; i <= 47; i++){
            if(document.getElementById("rad"+i).checked){
                let pts =+document.getElementById("rad"+i).value
                sum = sum+pts
            }
        }
        if(sum == 1 || sum == 2 || sum == 3 || sum == 0){
            swal({
              title: "НИЧЕГО СЕБЕ!",
              text: "ТЫ НЕ АУТИСТ!!!",
              icon: "error",
              button: "SWAAAGGGG!!",
            });
          }
          else if(sum == 4 || sum == 5 || sum == 6){
            swal({
              title: "НИЧЕГО СЕБЕ!",
              text: "ТЫ УМНЕЕ ИВАНА ЗОЛО!!!",
              icon: "warning",
              button: "SWAAAGGGG!!",
            });
          }
          else if(sum == 7 || sum == 8 || sum == 9){
            swal({
              title: "НИЧЕГО СЕБЕ!",
              text: "ТЫ УМНЕЕ ОБЕЗЬЯНЫ!!!",
              icon: "info",
              button: "SWAAAGGGG!!",
            });
          }
          else if(sum >= 10){
            swal({
              title: "НИЧЕГО СЕБЕ!",
              text: "ПОЗДРОВЛЯЮ ТЫ КАК ИВАН ЗОЛО(или мб Кирил????????)!!!",
              icon: "success",
              button: "SWAAAGGGG!!",
            });
        }
        
})
