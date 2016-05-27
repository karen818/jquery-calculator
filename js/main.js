$(function(){
    var $buttons = $('.buttons');
    var operator = null; //best practice to set to null; specifically nothing
    var operatorUsed = false;
    var display = $('#screen');


    $buttons.on('click', 'span', function(){
        var isOperator = $(this).hasClass('operator');
        var button = $(this);
        var expression = display.text().split(operator);
        var num1 = parseInt(expression[0]);
        var num2 = parseInt(expression[1])
        console.log(num1, num2);
        var result = 0;

        if((button.text() === 'C')){
            display.text('');
        }

        if(!isOperator){
            display.append(button.text());
        }


        //test if button pressed is an operator and hasn't been used
        if(isOperator && operatorUsed === false){

            //test if button pressed isn't clear or equals
            if((button.text() !== 'C') || (button.text() !== '=')){
                operatorUsed = true;
                operator = button.text();
                console.log(operator);
                display.append(button.text());
            }

        }
    });

    // //if operator is addition, adds the two numbers
    // if(operator === '+'){
    //     result = parseInt(expression[0]) + parseInt(expression[1]);
    // }
    // //if operator is subtraction, subtracts num2 from num1
    // if(operator === '-'){
    //     result = num1 - num2;
    // }
    //
    // if(operator === 'x'){
    //     result = num1 * num2;
    // }
    //
    // if(operator === '\xF7'){
    //     if (num2 === 0){
    //         display.text("Error");
    //     }
    //     else{
    //         result = num1 / num2;
    //
    //     }
    // }

});//end main function
