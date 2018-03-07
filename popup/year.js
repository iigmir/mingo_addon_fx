var mingo_year = 1911;
var year_result = 0;

function non_nan_detect( nd_input , result_shown_dom )
{
    var nd_invaild_message = "輸入無效";
    if ( isNaN( nd_input ) )
    {
        document.querySelector( result_shown_dom ).innerText = nd_invaild_message;
        return false;
    }
    return true;
}

document.querySelector('#yat_calc').addEventListener("click", (e) => {
    var yat_input_year = parseInt( document.querySelector("#yat_type").value , 10 );
    // non_nan_detect( yat_input_year , yat_result );
    console.log(yat_input_year);
});

document.querySelector('#ymt_calc').addEventListener("click", (e) => {
    var year_ipt = {
        unit : document.querySelector("#year_unit").value ,
        type : parseInt( document.querySelector("#year_type").value , 10 )
    };
    var ymt_vaild = non_nan_detect( year_ipt.type , "#year_inputed" );
    if( ymt_vaild )
    {
        var ymt_unit_vaild = year_ipt.unit == "mingo" || year_ipt.unit == "grego";
        year_result = year_ipt.unit == "mingo" ? year_ipt.type + mingo_year : year_ipt.type - mingo_year;
        document.querySelector("#year_inputed").innerText = year_ipt.type;
        document.querySelector("#year_result").innerText = ymt_unit_vaild ? year_result : "單位無效！";
    }
});