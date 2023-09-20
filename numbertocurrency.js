
function formatAsCurrency(number,locale,currencycode){
    const formatter=new Intl.NumberFormat(locale,{
        style:'currency',
        currency:currencycode
    });
    return formatter.format(number);}
    const amount=2300;
    const formattedAmount=formatAsCurrency(amount,'en-US','USD');
 console.log(formattedAmount);