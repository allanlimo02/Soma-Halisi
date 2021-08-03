$(document).ready(function(){
    //Book1 mouse enter / Mouse leave comands
    $('.book1').mouseenter(function(){
        $('.book1').css('color','#ecdcd0')
        $('.book1').css('background','#010857')
        $('.buy').css('color','#ecdcd0')
        $('#img1').hide()
        $('.hide1').show()

    })
    $('.book1').mouseleave(function(){
        $('.book1').css('color','transparent')
        $('.book1').css('background','')
        $('#img1').show()
        $('.hide1').hide()
       
    })
    // Book 2
    $('.book2').mouseenter(function(){
        $('.book2').css('color','#ecdcd0')
        $('.book2').css('background','#010857')
        $('.buy').css('color','#ecdcd0')
        $('#img2').hide()
        $('.hide2').show()

    })
    $('.book2').mouseleave(function(){
        $('.book2').css('color','transparent')
        $('.book2').css('background','')
        $('#img2').show()
        $('.hide2').hide()
       
    })
    //Book 3
    $('.book3').mouseenter(function(){
        $('.book3').css('color','#ecdcd0')
        $('.book3').css('background','#010857')
        $('.buy').css('color','#ecdcd0')
        $('#img3').hide()
        $('.hide3').show()

    })
    $('.book3').mouseleave(function(){
        $('.book3').css('color','transparent')
        $('.book3').css('background','')
        $('#img3').show()
        $('.hide3').hide()
       
    })
    //Book 4
    $('.book4').mouseenter(function(){
        $('.book4').css('color','#ecdcd0')
        $('.book4').css('background','#010857')
        $('.buy').css('color','#ecdcd0')
        $('#img4').hide()
        $('.hide4').show()

    })
    $('.book4').mouseleave(function(){
        $('.book4').css('color','transparent')
        $('.book4').css('background','')
        $('#img4').show()
        $('.hide4').hide()
        

       
    })
    
})