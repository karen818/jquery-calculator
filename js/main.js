var $buttons = $('.buttons');
var operator = null; //best practice to set to null; specifically nothing
var operatorUsed = false;

$buttons.on('click', 'span', function(){
    var isOperator = $(this).hasClass('operator');
    var button = $(this);
    var display = $('#screen');

    if(button.text() === 'C'){
        display.text('');
    }

    if(isOperator && operatorUsed === false){
        if((button.text() !== 'C') || (button.text() !== '=')){
            operatorUsed = true;
            operator = button.text();
            console.log(operator);
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

        if(operator === '-'){
            var result = parseInt(expression[0]) - parseInt(expression[1]);
            display.text(result);
        }

        if(operator === 'x'){
            var result = parseInt(expression[0]) * parseInt(expression[1]);
            display.text(result);
        }

        // if(operator === '\xF7'){
        //     var result = parseInt(expression[0]) + parseInt(expression[1]);
        //     display.text(result);
        // }
        //\xF7 for divide symbol

        if(!isOperator){
            display.append(button.text());
        }
    }
});
