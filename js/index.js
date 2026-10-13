/*console.log(jQuery);
// ==
console.log($);

let myBox = document.querySelector(".box");
console.log(myBox);

let $myBox = $(".box");
// element بتمسك ال 
console.log($myBox);
// object بتبعتها ك

let myBox2 = document.querySelectorAll(".box");
console.log(myBox2);
// ==
let $myBox2 = $(".box");
// elements بتمسك كل ال 
console.log($myBox2);

console.log($myBox2[0]);
// ==
console.log($myBox2.get(0));
//بتمسك أول عنصر

console.log($myBox2.eq(0));
// object بترجع أول عنصر ك 

let $myBox3 = $(myBox2);
console.log($myBox3);
// jQuery ل js بتحول ال 

$(".box").click(function(){
    console.log("ok");
});
// ==
document.querySelectorAll(".box").forEach(function(box){
    box.addEventListener("click", function(){
        console.log("ok");
    });
});

$(".box").dblclick(function(){
    console.log("ok");
});
//double click

$(".box").mouseenter(function(){
    console.log("ok");
});
// box اول ما يدخل جوا ال 

$(".box").mouseleave(function(){
    console.log("ok");
});
// box اول ما يخرج برا ال 

$(".box").hover(function(){
    console.log("mouseenter");
}, function(){
    console.log("mouseleave");
});

$(".box").hover(function(){
    console.log("click");
}, function(){
    console.log("dblclick");
});

$(".box").on("click", function(){
    console.log("clicked");
});
// ==
$(".box").on('click', function(){
    console.log("clicked");
});

$(".box").on("click mouseenter", function(){
    console.log("clicked");
});
// event بتاخد أكتر من 

$(".box").one("click", function(){
    console.log("clicked");
});
// بتتنفذ مره واحده بس 
// function two, three بس مفيش one هي

document.querySelector(".box").addEventListener("click", function(){
    console.log("ok");
}, {
    once: true
});
// بتنفذ على أول واحده مره واحده بس 

$(".box").on({
    "click": function(){
        console.log("click");
    },
    "mouseenter": function(){
        console.log("mouseenter");
    }// ; مفيش
});
// بتنفذ الاتنين 

$("#Hide").click(function(){
    $(".box").hide(1000);// بيخفيها في ثانيه 
    //بتحخفيها زي تصغير الحجم
});
//(هزار)
//فيها ل أخفيها
$("#Show").click(function(){
    $(".box").show(1000);// بيظهرها في ثانيه
});
$("#Toggle").click(function(){
    $(".box").toggle(1000);// لو ظاهره بيخفيها في ثانيه و لو مخفيه بيظهرها في ثانيه
});

$("#FadeIn").click(function(){
    $(".box").fadeIn(1000);// بتظهرها في ثانيه
});
$("#FadeOut").click(function(){
    $(".box").fadeOut(1000);// بيخفيها في ثانيه 
    // opacity بتخفيها زي ال 
});
$("#FadeOut").click(function(){
    $(".box").fadeOut(1000, function () {
        console.log("ok");
    });// function بيخفيها في ثانيه و بعدين بينفذ ال 
    // opacity بتخفيها زي ال 
});
$("#FadeOut").click(function(){
    $(".box").delay(1000).fadeOut(1000);// بيخفيها في ثانيه بعد ثانيه
    // opacity بتخفيها زي ال 
});

let obj = {
    fun1: function(){
        console.log("Fun1");
        return this;
    },
    fun2: function(){
        console.log("Fun2");
        return this
    }
};
obj.fun1().fun2();
// method من method بتنده 

$("#FadeToggle").click(function(){
    $(".box").fadeToggle(1000);// بيخفيها في ثانيه لو ظاهره و بيظهرها في ثانيه لو مخفيه
});
$("#FadeTo").click(function(){
    $(".box").fadeTo(1000, 0.5);// بيخفيها لدرجه محدده في ثانيه
});

$("#SlideUp").click(function(){
    $(".box").slideUp(1000);// بترفع الستار (طولها بيقل لحد ما تختفي) 
    // padding بتخفي حتى ال 
});
$("#SlideDown").click(function(){
    $(".box").slideDown(1000);// بتنزل الستار
});
$("#SlideToggle").click(function(){
    $(".box").slideToggle(1000);// بترفع و بتنزل الستار
});

$("#Animate").click(function(){
    $(".box").animate({
        width: "300px",
        height: "300px"
    }, 1000);
});

$("#Animate").click(function(){
    $(".box").animate({
        width: "300px"
    }, 1000);
    $(".box").animate({
        height: "300px"
    }, 1000);
});
// height وبعدين ال width بتكبر ال 

$("#Animate").click(function(){
    $(".box").animate({
        width: "300px"
    }, 1000);
    $(".box").animate({
        height: "300px"
    }, {
        duration: 1000,
        queue: false//مش هتستنى القبلها تخلص
    });
});

$("#Animate").click(function(){
    $(".box1").animate({
        width: "300px"
    }, 1000);
    $(".box2").animate({
        height: "300px"
    }, 1000);
});
//بيحصلوا في نفس الوقت 

$("#Animate").click(function(){
    $(".box1").animate({
        width: "300px"
    }, 1000, function(){
        $(".box2").animate({
            height: "300px"
        }, 1000);
    });
});
// الأولى بتخلص بعدها التانيه بتبدأ 

$("#Animate").click(function(){
    $(".box").animate({
        width: "300px",
        height: "300px",
        backgroundColor: "#f00",
    }, 5000);
});

$("#Stop").click(function(){
    $(".box").stop();
});
// البيحصل على الزرار event بتوقف ال 

$("#Fire").click(function(){
    $(".box").html(`
        <p>Hello</p>`
    );
});
// code بيتحط جواها 
// و بيمسح الموجود أصلا html بيحط محتوى جوا ال 
// بتاعها هو المحتوى الجواها return ال 

$("#Fire").click(function(){
    $(".box").text(`
        Hello`
    );
});
// بتحط زي ما هو text بيحط جواها 

$("#Fire").click(function(){
    console.log($("input").val());
});
// لما بندوس على الزرار input البتدخل من ال value بتطبع ال 

$("#Fire").click(function(){
    $("input").val("hello");
});
// input المكتوبه جوا ال value بتحط ال 

$("#Fire").click(function(){
    $(".box").append("<p>Hello<p>");
});
// في الآخر box بتضاف جوا ال

$("#Fire").click(function(){
    $(".box").prepend("<p>Hello<p>");
});
//في الأول box بتضاف جوا ال

$("#Fire").click(function(){
    $(".box").before("<p>Hello<p>");
});
// box بتضاف قبل ال

$("#Fire").click(function(){
    $(".box").after("<p>Hello<p>");
});
// box بتضاف بعد ال 

$("#Fire").click(function(){
    $(".box h2").replaceWith("<p>Hello<p>");
});
// p بال h2 بتبدل ال

$("#Fire").click(function(){
    $(".box h2").remove();
});
// نفسه html من ال h2 بتمسح ال

$("#Fire").click(function(){
    $(".box h2").empty();
});
//h2 بتفضي ال

$("#Fire").click(function(){
    console.log($(".box h2").attr("data-atya"));
});
// attr value بتطبع 

$("#Fire").click(function(){
    $(".box h2").attr("data-atya", "ahmed");
});
// attr بيغير ال

$("#Fire").click(function(){
    console.log($("input").prop("disabled"));
});
// boolean في حالة ال attr لما بتلاقي ال true بتطبع 

$("#Fire").click(function(){
    $("input").prop("disabled", false);
});
// value بتغير ال 

$("#Fire").click(function(){
    console.log($(".child").offset());
});
// نفسه window بيقيس بعده عن ال

$("#Fire").click(function(){
    console.log($(".child").position());
});
// بيقيس بعده عن أبوه

$("#Fire").click(function(){
    $(".child").offset({
        top: 100,
        left: 60
    });
});
// بيغير مكانه بالنسبه ل أبوه

$("#Fire").click(function(){
    $(".child").eq(0).wrap("<div class='test'></div>");
});
// div.test جوا ال child بيحط ال

$("#Fire").click(function(){
    $(".child").eq(0).unwrap();
});
//بيمسح الأب

$("#Fire").click(function(){
    $(".child").eq(0).unwrap(".test2");
});
// .test2 بيشيل الأب لو واخد

$("#Fire").click(function(){
    $(".child").css('width', "300px");
});
// css بتضيف خاصية 

$("#Fire").click(function(){
    $(".child").eq(0).css({
        'width': "200px",
        'height': "200px"
    });
});

$("#Fire").click(function(){
    $(".parent").has(".test").css({
        'width': "200px",
        'height': "200px"
    });
});
// css هتاخد ال .test لو جواه

$("#Fire").click(function(){
    console.log($(".child").eq(0).is(".test"));
});
// true بيطبع .test لو العنصر نفسه واخد

$("#Fire").click(function(){
    $(".box").html(`
        <button class="btn btn-info">Go</button>`
    );
});
$(".box").on('click', 'button', function(){
    console.log("ok");
});
// بتتنفذ function ال click لما يتوجد و يحصل عليها button بيدور على ال

$("#Fire").click(function(){
    console.log($(".box").width());
});
// border و من غير ال padding بتطبع العرض من غير ال 

$("#Fire").click(function(){
    console.log($(".box").innerWidth());
});
// border من غير ال padding بيطبع العرض ب ال

$("#Fire").click(function(){
    console.log($(".box").outerWidth());
});
// border و ال padding بيطبع العرض ب ال

$("#Fire").click(function(){
    console.log($(".box").outerWidth(true));
});
// margin و ال border و ال padding بيطبع العرض بال

$("#Fire.btn1").click(function(){
    $(".box").addClass("active");
});
// class بيضيف
$("#Fire.btn2").click(function(){
    $(".box").removeClass("active");
});
// class بيشيل
$("#Fire.btn3").click(function(){
    $(".box").toggleClass("active");
});

$("#Fire").click(function(){
    console.log($(".box").hasClass("active"));
});
// true بيطبع class active لو في 

console.log($(".child1").parent());
// بتمسك الأب

console.log($(".child1").parents());
// بيطبع كل الأباء

console.log($(".child1").parents("body"));
// body جاب ال

console.log($(".child1").parentsUntil("body"));
// body بيقف عند ال

console.log($(".parent").children());
// بيمسك الأبناء

console.log($(".parent").children(".child1"));

console.log($(".parent").children().get(1));

console.log($(".parent").find(".child2"));
// بيدور جوا الأب

console.log($(".child1").siblings());
// بيمسك أخواته

console.log($(".child1").next());
// بيمسك أخواته البعده

console.log($(".parent").nextAll());
// بيمسك كل حاجه بعده على نفس مستواه

console.log($(".parent").nextAll(".test"));
// class test بيمسك الواخد

console.log($(".parent").nextUntil(".test"));
// class test بيجيب البعده كله و لحد القبل الواخده

// prev نفس الكلام في ال

console.log($(".parent").children().first());
//بيمسك أول ابن
console.log($(".parent").children().last());
// بيمسك آخر ابن

console.log($(".parent").children().filter(".test"));
// .test بيدور على الابن الواخد 

console.log($(".parent").children().not(".test"));
// .test بيدور على ال مش واخدين

$.fn.changeColor = function(){
    this.css('color', "#f00");
};
// جديده function عملنا
$("button").click(function(e){
    $(".child").changeColor();
});
*/