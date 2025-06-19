i = localStorage.getItem('theme') === 'true';

function fun1() {
    if (i) {
        $(".drag__central p").css({color:"#00487C"})
        $(".syntax__headline").css({color:"black"})
        $(".library__headline, .callback").css({color:"black"})
        $(".selector__hover, .satndart__text, .standart__example, .satndart__item, .library__text").css({color:"black"})
        $(".cyan").css({color:"#3EB7BF"})
        $(".skelet").css({ fill: "#3A8DCA" });
        $(".circle").css({ fill: "#FED62E", transform: 'translateX(0px)' });
        $(".moon_circles").css({ opacity: "0", transform: 'translateX(0px)' });
        $(".stars").css({ opacity: "0" });
        $(".clouds").css({ transform: "translateY(0)" });
        $(".shadows").css({ transform: "translateX(0)" });
        $("header").css({backgroundColor:"#F0F7F8" })
        $(".night").css({color:"black"})
        $(".blue").css({color:"#3A8DCA"})
        $(".dark").css({color:"#0F2435"})
        $(".header__btn2").css({color:"black", border:"2px solid black"})
        $("body").css({backgroundColor:"white"})
        $(".library").css({backgroundColor:"#F0F7F8"})

    } else {
        $(".drag__central p").css({color:"#f7e6b2"})
        $(".syntax__headline").css({color:"#f7e6b2"})
        $(".library__headline, .callback").css({color:"#f7e6b2"})
        $(".selector__hover, .satndart__text, .standart__example, .satndart__item, .library__text").css({color:"#f7e6b2"})
        $(".cyan").css({color:"white"})
        $(".skelet").css({ fill: "#1B1D2A" });
        $(".circle").css({ fill: "#C4C9D2", transform: 'translateX(130px)' });
        $(".moon_circles").css({ opacity: "1", transform: 'translateX(130px)' });
        $(".stars").css({ opacity: "1" });
        $(".clouds").css({ transform: "translateY(100px)" });
        $(".shadows").css({ transform: "translateX(130px)" });
        $("header").css({backgroundColor:"#00487C", })
        $(".night").css({color:"white"})
        $(".dark").css({color:"#FED62E"})
        $(".blue").css({color:"white"})
        $(".header__btn2").css({color:"white", border:"2px solid white"})
        $("body").css({backgroundColor:"#3479a9"})
        $(".library").css({backgroundColor:"#00487C"})
    }
}


fun1();

$("svg").click(function () {
    i = !i;  
    localStorage.setItem('theme', i);  
    fun1();  
});

let textChange = $(".syntax__selector_box2")

$(".dolarhover").hover(function(){
    textChange.text("$ – это сокращённая запись функции jQuery(). Она используется для обращения к элементам DOM. Знак $ указывает на вызов jQuery-библиотеки.")
})
$(".selector__hover").hover(function(){
    textChange.text("“selector” – это селектор, с помощью которого выбираются элементы DOM на странице. Он может быть разным: id, .class, element, [attribute=value]...")
})
$(".action__hover").hover(function(){
    textChange.text("action() – это метод (или действие), который будет выполнен над выбранными элементами. jQuery предлагает множество методов для работы с элементами: .hide(), .show(), .click(), .css(), .html()...")
})

$(document).ready(function() {
    $('button').click(function() {
        $('button').removeClass('selected');
        $(this).addClass('selected');
    });
});

let standartShow = $(".presentation")
let satndartText = $(".satndart__text")
let selectorMode = $(".selector__mode")

$(".fst").click(function(){
    standartShow.show()
    standartShow.hide(1000)
    satndartText.text("Метод hide() в jQuery используется для скрытия элементов на странице. Он изменяет CSS-свойство display элемента на none, делая его невидимым для пользователя, но не удаляя его из DOM.")
    selectorMode.text("hide")
})
$(".scn").click(function(){
    standartShow.show()
    satndartText.text("Метод show() в jQuery используется для отображения ранее скрытых элементов. Он изменяет CSS-свойство display элемента, делая его видимым для пользователя.")
    selectorMode.text("show")
})
$(".thr").click(function(){
    standartShow.toggle()
    satndartText.text("Метод toggle() в jQuery используется для переключения состояния видимости элемента. Если элемент видим, он будет скрыт; если элемент скрыт, он будет показан. Это удобный способ чередовать действия show() и hide().")
    selectorMode.text("toggle")
})
$(".frt").click(function(){
    standartShow.hide()
    standartShow.slideDown()
    satndartText.text("Метод slideDown() в jQuery используется для плавного раскрытия скрытого элемента, как будто он 'разворачивается' сверху вниз. Он изменяет высоту элемента от 0 до его полного размера.")
    selectorMode.text("slideDown")
})
$(".fth").click(function(){
    standartShow.show()
    standartShow.slideUp(1000)
    satndartText.text("Метод slideUp() в jQuery используется для плавного скрытия элемента, как будто он 'сворачивается' снизу вверх, уменьшая его высоту до 0.")
    selectorMode.text("slideUp")
})
$(".six").click(function(){
    standartShow.slideToggle()
    satndartText.text("Метод slideToggle() в jQuery используется для чередования действий методов slideDown() и slideUp(), то есть плавного скрытия или показа элемента, в зависимости от его текущего состояния.")
    selectorMode.text("slideToggle")
})
$(".sev").click(function(){
    standartShow.hide()
    standartShow.fadeIn(1000)
    satndartText.text("Метод fadeIn() в jQuery используется для плавного появления элемента, увеличивая его прозрачность от 0 до 100%. Этот метод подходит для элементов, которые были скрыты с помощью fadeOut() или имели CSS-свойство display: none.")
    selectorMode.text("fadeIn")
})
$(".eig").click(function(){
    standartShow.show()
    standartShow.fadeOut(1000)
    satndartText.text("Метод fadeOut() в jQuery используется для плавного скрытия элемента, уменьшая его прозрачность от 100% до 0%. Этот метод подходит для элементов, которые должны исчезнуть с эффектом затухания.")
    selectorMode.text("fadeOut")
})
$(".nin").click(function(){
    standartShow.fadeToggle()
    satndartText.text("Метод fadeToggle() в jQuery используется для чередования между методами fadeIn() и fadeOut(), то есть для плавного появления или исчезновения элемента, в зависимости от его текущего состояния.")
    selectorMode.text("fadeToggle")
})

let descriptions = [
"Метод text() может читать (получать) или писать (заменять) текст внутри данного элемента HTML. Ниже пример кода для этой функции:",
"Метод html() работает так же, как и метод text(), за исключением того, что метод возвращает HTML-код заданного элемента, а не только текст.",
"Метод val() используется для получения и установки значения полей формы (например, input).",
"Функция attr() может читать и модифицировать атрибуты HTML-элементов",
"Метод prepend() вставляет новый HTML код в начало выбранного HTML-элемента. Новый HTML объединяется с тем HTML, который уже был у элемента.",
"Метод append() вставляет новый HTML-код в конец выбранного HTML-элемента. Новый HTML объединяется с HTML кодом, который был у элемента до этого.",
"Метод before() вставляет HTML перед выбранным элементом (вне элемента).",
"Метод after() вставляет HTML после выбранного элемента (вне элемента).",
"Метод wrap() может обернуть выбранный элемент HTML в другой элемент HTML.",
"Метод remove() удаляет выбранный элемент HTML из дерева DOM.",
"Метод empty() очень похож на remove(), но его специфика заключается в том, что он удаляет все дочерние элементы выбранного элемента HTML. Пример в сосейдней ячейке",
"Метод clone() клонирует (копирует) выбранный элемент, что позволяет продублировать нужный элемент в другом месте дерева DOM." ]


function saveState() {
    localStorage.setItem('item1', $(".managment__item1").html());
    localStorage.setItem('item2', $(".managment__item2").html());
    localStorage.setItem('container2', $(".managment__container2").html());
}

$(document).ready(function() {
    if (localStorage.getItem('item1')) {
        $(".managment__item1").html(localStorage.getItem('item1'));
    }
    if (localStorage.getItem('item2')) {
        $(".managment__item2").html(localStorage.getItem('item2'));
    }
    if (localStorage.getItem('container2')) {
        $(".managment__container2").html(localStorage.getItem('container2'));
    }
});

$(".managment__btn").click(function() {
    let a = $(".values").val()
    if (a == "text()") {
        $(".managment__item1").empty()
        $(".managment__item1").prepend("<p>" + descriptions[0] + "</p>")
        $(".managment__item1").prepend("<h2>.text()</h2>")
    }
    if (a == "html()") {
        $(".managment__item2").empty()
        $(".managment__item2").prepend("<p>" + descriptions[1] + "</p>")
        $(".managment__item2").prepend("<h2>.html()</h2>")
    }
    if (a == "val()") {
        $(".managment__item1").empty()
        $(".managment__item1").prepend("<p>" + descriptions[2] + "</p>")
        $(".managment__item1").prepend("<h2>.val()</h2>")
    }
    if (a == "attr()") {
        $(".managment__item2").empty()
        $(".managment__item2").prepend("<p>" + descriptions[3] + "</p>")
        $(".managment__item2").prepend("<h2>.attr()</h2>")
    }
    if (a == "prepend()") {
        $(".managment__item1").empty()
        $(".managment__item1").prepend("<p>" + descriptions[4] + "</p>")
        $(".managment__item1").prepend("<h2>.prepend()</h2>")
        $(".managment__container2").prepend("<div></div>")
    }
    if (a == "append()") {
        $(".managment__item1").empty()
        $(".managment__item1").prepend("<p>" + descriptions[5] + "</p>")
        $(".managment__item1").prepend("<h2>.append()</h2>")
        $(".managment__container2").append("<div></div>")
    }
    if (a == "before()") {
        $(".managment__item2").empty()
        $(".managment__item2").prepend("<p>" + descriptions[6] + "</p>")
        $(".managment__item2").prepend("<h2>.before()</h2>")
        $(".managment__item2").before("<div></div>")
    }
    if (a == "after()") {
        $(".managment__item2").empty()
        $(".managment__item2").prepend("<p>" + descriptions[7] + "</p>")
        $(".managment__item2").prepend("<h2>.after()</h2>")
        $(".managment__item2").after("<div></div>")
    }
    if (a == "wrap()") {
        $(".managment__item2").empty()
        $(".managment__item2").prepend("<p>" + descriptions[8] + "</p>")
        $(".managment__item2").prepend("<h2>.wrap()</h2>")
    }
    if (a == "remove()") {
        $(".managment__item1").empty()
        $(".managment__item1").prepend("<p>" + descriptions[9] + "</p>")
        $(".managment__item1").prepend("<h2>.remove()</h2>")
    }
    if (a == "empty()") {
        $(".managment__item2").empty()
        $(".managment__item2").prepend("<p>" + descriptions[10] + "</p>")
        $(".managment__item2").prepend("<h2>.empty()</h2>");
        $(".managment__item1").empty()
    }
    if (a == "clone()") {
        $(".managment__item1").empty()
        $(".managment__item1").prepend("<p>" + descriptions[11] + "</p>")
        $(".managment__item1").prepend("<h2>.clone()</h2>")
        let clone = $(".managment__item1").clone()
        clone.insertAfter(".managment__item2")
    }
    saveState();
})

let originalState = {
    item1: $(".managment__item1").html(),
    item2: $(".managment__item2").html(),
    container2: $(".managment__container2").html()
}

$(".managment__btn2").click(function() {
    $(".managment__item1").html(originalState.item1)
    $(".managment__item2").html(originalState.item2)
    $(".managment__container2").html(originalState.container2)
    saveState()
})



let initialOrder = $(".library__container").html()


$(function() {
    $("#sortable").sortable({
        stop: function() {
            let order = $("#sortable img").map(function() {
                return $(this).attr("alt");
            }).get();
            
            if (order[0] === "puz1" && order[1] === "puz2" &&
                order[2] === "puz3" && order[3] === "puz4" && order[4] === "puz5" && order[5] === "puz6" && order[6] === "puz7" && order[7] === "puz8" && order[8] === "puz9") {
                
                    $(".upper__result").css("display", "flex")

            }
        }
    });
});

$(".result__btn").click(function() {
    $(".upper__result").css("display", "none")
    $(".library__container").html(initialOrder)
});


$(document).ready(function(){
    $(".drag__central p").draggable({
        revert: "invalid"  
    });
    $(".drag_js").droppable({
        accept: ".javasc",
        drop: function(event, ui){
            $(ui.draggable).css({ display: "none" });
        },
        over: function(event, ui){
            if(!ui.draggable.hasClass("javasc")) {
                ui.draggable.draggable("option", "revert", true)
            } else {
                $(".drag_js").css({border:"2px dashed #1877F2"})
                $(".drag_js img").attr("src", "img/drag2.png")
                setTimeout(function() {
                    $(".drag_js").css({ border:"" });
                    $(".drag_js img").attr("src", "img/drag1.png")
                }, 1000)
            }
        }
    })
    $(".drag_jqv").droppable({
        accept: ".jquer",
        drop: function(event, ui){
            $(ui.draggable).css({ display: "none" })
        },
        over: function(event, ui){
            if(!ui.draggable.hasClass("jquer")) {
                ui.draggable.draggable("option", "revert", true)
            } else {
                $(".drag_jqv").css({border:"2px dashed #1877F2"})
                $(".drag_jqv img").attr("src", "img/drag2.png")
                setTimeout(function() {
                    $(".drag_jqv").css({ border:"" });
                    $(".drag_jqv img").attr("src", "img/drag1.png")
                }, 1000)
            }
        }
    })
})


let activeBlock = null

$(".acrh1, .acrh2, .acrh3").click(function() {
    const targetContent = $(this).next(".acrd1, .acrd2, .acrd3")
    const targetArrow = $(this).find(".acrt1, .acrt2, .acrt3")

    if (activeBlock && activeBlock[0] !== targetContent[0]) {
        activeBlock.slideUp(400)
    }

    if (targetContent.is(":visible")) {
        targetContent.slideUp(400)
        targetArrow.css({ transform: "rotate(180deg)" })
        activeBlock = null
    } else {
        $(".acrt1, .acrt2, .acrt3").css({ transform: "rotate(180deg)" })

        targetContent.slideDown(400)
        targetArrow.css({ transform: "rotate(0)" })
        activeBlock = targetContent
    }
})

$(".accordion__img img").click(function() {
    $(".accordion__img img").css({width: "9%"})
    $(this).css({width: "70%"})
})

