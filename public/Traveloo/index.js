function applyTheme(isDark) {
    if (isDark) {
        $(".nav__box3_item2").css({ color: "white" })
        $(".darCirle").css({ transform: "translateX(8px)" })
        $("nav").css({ background: "#0A0A0A" })
        $(".nav__item p").css({ color: "white" })
        $(".selected").css({ color: "#00CCCB" })
        $(".nav__box3_item p").css({ color: "white" })
        $(".nav__box1").css({ borderBottom: "3px solid #121212" })
        $(".box").css({ background: "#121212" })
        $(".backPart").css({background: "#DADADA"})
        $(".header__headline, .sort__container, .main__headline, .main__rating, .main__people, .sort__text").css({color:"white"})
        $(".main__item, .sort__item").css({background:"#1E1E1E"})
        $(".main__text, .header__text").css({color:"#DADADA"})
        $(".search__box, .header__img2, .search__box input").css({background:"#0A0A0A"})
        $(".change2").attr("src", "img/wallet-2black.png")
        $(".change4").attr("src", "img/global-searchblack.png")
        $(".change5").attr("src", "img/messageblack.png")
        $(".change6").attr("src", "img/message-questionblack.png")
        $(".change7").attr("src", "img/category-2black.png")
        $(".change8").attr("src", "img/logoutblack.png")
        $(".change9").attr("src", "img/search-normalblack.png")
        $(".change10").attr("src", "img/notification-bingblack.png")
        $(".change11").attr("src", "img/user-tickblack.png")
    } 
    else {
        $(".nav__box3_item2").css({ color: "black" })
        $(".darCirle").css({ transform: "translateX(0)" })
        $("nav").css({ background: "white" })
        $(".nav__item p").css({ color: "black" })
        $(".selected").css({ color: "#00CCCB" })
        $(".nav__box3_item p").css({ color: "black" })
        $(".nav__box1").css({ borderBottom: "3px solid #F0F0F0" })
        $(".box").css({ background: "#F0F0F0" })
        $(".backPart").css({background: "#D9D9D9"})
        $(".header__headline, .sort__container, .main__headline, .main__rating, .main__people, .sort__text").css({color:"black"})
        $(".main__item").css({background:"white"})
        $(".sort__item").css({background:"#FF7373"})
        $(".header__text").css({color:"#6C6C6C"})
        $(".main__text").css({color:"black"})
        $(".search__box, .header__img2, .search__box input").css({background:"white"})
        $(".change2").attr("src", "img/wallet-2.png")
        $(".change4").attr("src", "img/global-search.png")
        $(".change5").attr("src", "img/message.png")
        $(".change6").attr("src", "img/message-question.png")
        $(".change7").attr("src", "img/category-2.png")
        $(".change8").attr("src", "img/logout.png")
        $(".change9").attr("src", "img/search-normal.png")
        $(".change10").attr("src", "img/notification-bing.png")
        $(".change11").attr("src", "img/user-tick.png")
    }
}

$(document).ready(function () {
    const isDarkTheme = localStorage.getItem("isDarkTheme") === "true"
    applyTheme(isDarkTheme)
})

$(".backPart").click(function () {
    const isDarkTheme = localStorage.getItem("isDarkTheme") !== "true"
    applyTheme(isDarkTheme)
    localStorage.setItem("isDarkTheme", isDarkTheme)
})
$(".france").click(function () {
    $(".main__item").hide()
    $(".main__item[data-country='france']").show()
})
$(".vietnam").click(function () {
    $(".main__item").hide()
    $(".main__item[data-country='vietnam']").show()
})
$(".japan").click(function () {
    $(".main__item").hide()
    $(".main__item[data-country='japan']").show()
})
$(".ukraine").click(function () {
    $(".main__item").hide()
    $(".main__item[data-country='ukraine']").show()
})
$(".all").click(function () {
    $(".main__item").show()
})


$(document).ready(function () {
    $(".sortRating").on("click", function () {

      let items = $(".main__item").toArray()
  
      items.sort((a, b) => {
        return parseFloat($(b).data("rating")) - parseFloat($(a).data("rating"))
      })
  
      items.forEach((item, index) => {
        $(item).css("order", index) 
        $(".main__item").parent().append(item) 
        })
    })
})

$(document).ready(function () {
    $(".sortPopularity").on("click", function () {

      let items = $(".main__item").toArray()
  
      items.sort((a, b) => {
        return parseFloat($(b).data("popularity")) - parseFloat($(a).data("popularity"))
      })
  
      items.forEach((item, index) => {
        $(item).css("order", index) 
        $(".main__item").parent().append(item) 
        })
    })
})
  
$(document).ready(function () {
    $(".sortPrice").on("click", function () {

      let items = $(".main__item").toArray()
  
      items.sort((a, b) => {
        return parseFloat($(b).data("price")) - parseFloat($(a).data("price"))
      })
  
      items.forEach((item, index) => {
        $(item).css("order", index) 
        $(".main__item").parent().append(item) 
        })
    })
})
  

$(".sort__default").click(function () {
    $(".main__item").css({width:"23%", height:"340px", flexDirection:"column", })

    $(".main__img").css({width:"100%", height:"150px", marginTop:"0", marginRight:"0"})

    $(".main__img img").css({width:"100%", height:"150px", marginTop:"", marginRight:"20px"})

    $(".main__textbox").css({display:"flex", flexDirection:"column", width:"100%"})

    $(".main__container").css({width:"100%", alignItems:"center", height:"25"})

    $(".main__people").css({width:"30%"})

    $(".main__text").css({fontSize:"15px"})

    $(".main__headline").css({fontSize:"16px"})
  })

$(".sort__middle").click(function(){
    $(".main__item").css({width:"100%", height:"150px", flexDirection:"row", })

    $(".main__img").css({width:"50%", height:"0px", marginTop:"", marginRight:"20px"})

    $(".main__img img").css({width:"100%", height:"130px", marginTop:"", marginRight:"20px"})

    $(".main__textbox").css({display:"flex", flexDirection:"column", width:"100%"})

    $(".main__container").css({width:"20%", alignItems:"flex-end", height:"100px"})

    $(".main__people").css({width:"60%"})

    $(".main__text").css({fontSize:"20px"})

    $(".main__headline").css({fontSize:"22px"})
})

$(".sort__min").click(function(){
    $(".main__item").css({width:"100%", height:"100px", flexDirection:"row", })

    $(".main__img").css({width:"30%", height:"80px", marginTop:"", marginRight:"20px"})

    $(".main__img img").css({width:"100%", height:"80px", marginTop:"", marginRight:"20px"})

    $(".main__textbox").css({display:"flex", flexDirection:"column", width:"100%"})

    $(".main__container").css({width:"20%", alignItems:"flex-end", height:"60px"})

    $(".main__people").css({width:"60%"})

    $(".main__text").css({fontSize:"16px"})

    $(".main__headline").css({fontSize:"18px"})
})


$(document).ready(function () {
    $('.search').on('keypress', function (e) {
      if (e.which === 13) { 
        let inputCity = $(this).val().trim().toLowerCase()

        $('.main__item').each(function () {
          let city = $(this).data('city').toLowerCase();
          if (city.includes(inputCity)) {
            $(this).show() 
          }
           else {
            $(this).hide() 
          }
        })
      }
    })
  })