$(function(){

    //////////////////////////////// Get

    $("#btn1").click(function () {
        alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function () {
        alert("HTML: " + $("#test").html());
    });
    $("#btn3").click(function () {
        alert("Value: " + $("#inputtext").val());
    });
    $("#btnhref").click(function () {
        alert($("#froggy").attr("href"));
    });
      
    //////////////////////////////////////////   Set


    $("#btn1").click(function () {
        $("#test1").text("Hello Masha!");
    });
    $("#btn2").click(function () {
        $("#test2").html("<b>Hello Dasha!</b>");
    });
    $("#btn3").click(function () {
        $("#test3").val("Masha and Dasha");
    });

/////////////////////////////////////////////////  Get and Set

    $("#btn1").click(function () {
        $("#test1").text(function (i, origText) {
            return "Old text: " + origText + " New text: Hello world! (index: " + i + ")";
        });
    });

    $("#btn2").click(function () {
        $("#test2").html(function (i, origText) {
            return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")";
        });
    });

    ///////////////////////////////////////// attr

    $("button").click(function () {
        $("#froggy").attr({
            "href": "https://flexboxfroggy.com/#ru",
            "title": "Froggy"
        }).text("Froggy!");
    });

    $("button").click(function () {
        $("#froggy").attr("href", function (i, origValue) {
            return origValue + "/client-info";
        });
    }); 


    ///////////////////////////////////////// Add

    $("#btn1").click(function () {
        $("p").append(" <b>Appended text</b>.");
    });

    $("#btn2").click(function () {
        $("ol").append("<li>Appended item</li>");
    });

    $("#btn3").click(function () {
        $("p").prepend("<b>Prepended text</b>. ");
    });
    $("#btn4").click(function () {
        $("ol").prepend("<li>Prepended item</li>");
    });

    $("#btn1").click(function(){
        $("img").before("<b>Before</b>");
      });
    
      $("#btn2").click(function(){
        $("img").after("<i>After</i>");
      });


    //////////////////////////////////////////////  Del


    $("#btnRemove").click(function(){
        $("#div1").remove();
      });

      $("#btnEmpty").click(function(){
        $("#div1").empty();
      });


    $("#button1").click(function(){
        $("p").remove(".test");
      });

      $("#button2").click(function(){
        $("p").remove(".test, .demo");
      });


    /////////////////////////////////// class


    // $("#button1").click(function(){
    //     $("h1, h2, p").addClass("blue");
    //     $("div").addClass("important test");
    //   });
    //   $("#button2").click(function(){
    //     $("h1, h2, p").removeClass("blue");
    //   });
    //   $("#button3").click(function(){
    //     $("h1, h2, p").toggleClass("blue");
    //   });


    /////////////////////////////////////////  Dimensions

    // $("button").click(function(){
    //     var txt = "";
    //     txt += "Width of div: " + $("#div1").width() + "</br>";
    //     txt += "Height of div: " + $("#div1").height();
    //     $("#div1").html(txt);
    //   });


    //   $("button").click(function(){
    //     var txt = "";
    //     txt += "Width of div: " + $("#div1").width() + "</br>";
    //     txt += "Height of div: " + $("#div1").height() + "</br>";
    //     txt += "Inner width of div: " + $("#div1").innerWidth() + "</br>";
    //     txt += "Inner height of div: " + $("#div1").innerHeight();
    //     $("#div1").html(txt);
    //   });


    // $("button").click(function(){
    //     var txt = "";
    //     txt += "Width of div: " + $("#div1").width() + "</br>";
    //     txt += "Height of div: " + $("#div1").height() + "</br>";
    //     txt += "Outer width of div: " + $("#div1").outerWidth() + "</br>";
    //     txt += "Outer height of div: " + $("#div1").outerHeight();
    //     $("#div1").html(txt);
    //   });

      $("button").click(function(){
        $("#div1").width(500).height(500);
      });
});

// function appendText() {
//     var txt1 = "<p>Text1.</p>";        // Create text with HTML
//     var txt2 = $("<p></p>").text("Text2.");  // Create text with jQuery
//     var txt3 = document.createElement("p");
//     txt3.innerHTML = "Text3.";         // Create text with DOM
//     $("body").append(txt1, txt2, txt3);   // Append new elements
//   }