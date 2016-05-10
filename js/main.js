// $(function(){
    var $buttons = $('div.buttons');

    $buttons.on('click', 'span', function(){
        var isOperator = $(this).hasClass('operator');
        var button = $(this);

        if(isOperator){
            
        }

        if(!isOperator){
            console.log(button.text());
        }
    });
// });
