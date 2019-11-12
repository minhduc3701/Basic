$(document).ready(()=>{
    $(window).scroll(()=>{
        if(this).scrollTop()>40){
            $('#topBtn').fadeIn();
        }else{
            $('#topBtn').fadeOut();
        }
    });
    $("#topBtn").click(()=>{
        $('html, body').animation({scrollTop:0},800);
    })
});