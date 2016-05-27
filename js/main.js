$(function(){
    var $buttons = $('.buttons');
    var $display = $('#screen');
    var operator = null; //best practice to set to null; specifically nothing
    var operatorUsed = false;
    var result = 0;
    var num1;
    var num2;

    $('#cancel').click(function(){
        $display.text('');
        operatorUsed = false;
    });

    $('#calc').click(function(){
        if(operator === '+'){
            result = num1 + num2;
        }
        //if operator is addition, adds the two numbers
        if(operator === '+'){
            result = num1 + num2;
        }
        //if operator is subtraction, subtracts num2 from num1
        if(operator === '-'){
            result = num1 - num2;
        }
        //if operator is multiplication, multiplies the two numbers
        if(operator === 'x'){
            result = num1 * num2;
        }
        //if operator is division, divides num1 by num2; if num2 is 0,
        //diplays an error
        if(operator === '\xF7'){
            if (num2 === 0){
                $display.text("Error");
            }
            else{
                result = num1 / num2;

            }
        }
        $display.text(result);
        console.log(result);
    });

    $buttons.on('click', 'span:not(#cancel):not(#calc)', function(){
        var isOperator = $(this).hasClass('operator');
        var button = $(this);


        if(!isOperator){
            $display.append(button.text());
            num1 = parseInt($display.text().split(operator)[0]);
            num2 = parseInt($display.text().split(operator)[1]);
            console.log(num1 + " " + num2);
        }
        //test if button pressed is an operator and hasn't been used
        if(isOperator && operatorUsed === false){

            //test if button pressed isn't clear or equals
            if((button.text() !== 'C') || (button.text() !== '=')){
                operatorUsed = true;
                operator = button.text();
                $display.append(button.text());
                console.log(operator);
            }

        }
        // console.log(parseInt(expression[0]));
        // console.log(parseInt(expression[1]));
        // console.log($display.text());
    });



});//end main function
