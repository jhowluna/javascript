$(function(){
    $('#azul').click(function(){
        $('p')
        .css("background-color","blue")
        .fadeOut()
        .delay(10000)
        .fadeIn();
    });

    $('#vermelho').click(function(){
        $('p').css("background-color","red");
        $('#mensagem')
        .text("cor alterada com sucesso!!")
        .css({color :'red',border :'1px solid red'})
        .fadeOut(3000)
        .addClass('green');

        $('button').removeClass('red');

    });
});
