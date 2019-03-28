

/////////////////////////////////
$("#target").change(function() {      // navigating to jordan page 

if($("option:selected").val() === "1"){
window.location.replace('jordan.html') ;

}
  
});
///////////////////////////////////

// $("#backtomain").click(function() {           ////. return back to main from jordan 



// window.location.replace("main.html") ;


  
// });
//////////////////////////////////

$("#target").change(function() {  //. navigating to uae page

if($("option:selected").val() === "2"){


window.location.replace('uae.html') ;

}
  
});
/////////////////

$("#backtomain").click(function() {           ////. return back to main from uae

window.location.replace("main.html") ;

});
//////////////////// navigating to ksa ///////////////

$("#target").change(function() {  //. navigating to ksa page

if($("option:selected").val() === "6"){


window.location.replace('ksa.html') ;

}
  
});
//////////////////navigation to apply page /////////////////

$("#target").change(function() {  //. navigating to ksa page

if($("option:selected").val() === "5"){


window.location.replace('qatar.html') ;

}
  
});

////////////////////////////////////

// $("#backtomain").click(function() {           ////. return back to main from ksa

// window.location.replace("main.html") ;

// });


///////////// start ksa page /////////////


//////////////// end of ksa page ///////////////////  


/////////////////////////////////////// start of jordan ////////////////////

$('#h2').click(function(){


	$('#ol1').show();


})

$('#h2fam').click(function(){


	$('#ol2').show();


})

$('#h2tra').click(function(){


	$('#ol3').show();

})

$('#btnjor').click(function(){


	$('#inp2jor').val($('#inp1jor').val() / 0.71);

})

///////////////////// end of jordan ////////////////

//////////////////////////////////. start of uae  js ////////

$('#h2').click(function(){

	$('#ol1').show();
})

$('#h2fam').click(function(){

$('#ol2').show();

})

$('#h2tra').click(function(){

	$('#ol3').show();
})

$('#btnuae').click(function(){

$('#inp2uae').val($('#inp1uae').val() / 3.67);

})
//////////////////////// end of js  uae //////////////////////////////


$('#h2').click(function(){


	$('#ol1').show();


})

$('#h2fam').click(function(){


	$('#ol2').show();


})

$('#h2tra').click(function(){


	$('#ol3').show();

})

$('#btnksa').click(function(){


	$('#inp2ksa').val($('#inp1ksa').val() / 3.75);

})

/////////////////////////////////////////////////

var milliseconds = 5000;

function writePlaceholder(field, text, i) {
  if (i < (text.length)) {
    $(field).attr("placeholder", text.substring(0, i+1));
    i++;
    setTimeout(function() {
      writePlaceholder(field, text, i) ////////////////////////// text user name and pass and 
    }, 50);
  }
}

function init(){
  $("input").each(function() {
    let placeholder = $(this).attr("placeholder");
    writePlaceholder($(this), placeholder, 0);

  });

  setInterval(function() {
    init()
  }, milliseconds);
}

init();


$('img').click(function(){


	alert('Recerved , be on time please')


})


















