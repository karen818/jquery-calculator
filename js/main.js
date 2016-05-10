var $buttons = $('div.buttons');
var operator = null; //best practice to set to null; specifically nothing
var operatorUsed = false;

$buttons.on('click', 'span', function(){
    var isOperator = $(this).hasClass('operator');
    var button = $(this);
    var display = $('div#screen');

    if(button.text() === 'C'){
        display.text('');
    }

    if(isOperator && operatorUsed === false){
        if((button.text() !== 'C') || (button.text() !== '=')){
            operatorUsed = true;
            operator = button.text();
            display.append(button.text());
        }

        if(button.text() === '='){
            operatorUsed = false;
            var expression = display.text().split(operator);
        }

        if(operator === '+'){
            var result = parseInt(expression[0]) + parseInt(expression[1]);
            display.text(result);
        }
        //\xF7 for divide symbol

        if(!isOperator){
            display.append(button.text());
        }
    }
});
