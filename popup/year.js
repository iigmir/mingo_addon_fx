var mingo_year = 1911;
var year_result = 0;

function non_nan_detect( nd_input , result_shown_dom )
{
    debugger;
    var nd_invaild_message = "輸入無效";
    if ( isNaN( nd_input ) )
    {   // Show invaild message.
        document.querySelector( result_shown_dom ).innerText = nd_invaild_message;
        return false;
    }
    return true;
}

function year_automatic_transfer()
{
    var yat_input_year = parseInt( document.querySelector("#yat_type").value , 10 );
    var yat_vaild = non_nan_detect( yat_input_year , "#yat_result" );
    if( yat_vaild )
    {
        var yat_is_it_grego = yat_input_year > 500;
        var yat_unit;
        var yat_result;
        if( yat_is_it_grego )
        {
            yat_unit ="西元";
            yat_result = yat_input_year - mingo_year;
        }
        else
        {
            yat_unit = "民國";
            yat_result = yat_input_year + mingo_year;
        }
        console.log(yat_input_year);
        document.querySelector("#yat_input").innerText =  yat_input_year;
        document.querySelector("#yat_unit").innerText = yat_unit;
        document.querySelector("#yat_result").innerText = yat_result;
    }
}

function year_manual_transfer()
{
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
}

document.querySelector('#yat_calc').addEventListener("click", year_automatic_transfer);
document.querySelector('#ymt_calc').addEventListener("click", year_manual_transfer);
document.addEventListener('keydown', (event) =>
{
    if ( event.keyCode === 13 )
    {   // if enter pressed
        if( document.querySelector("#ymt").hidden )
        {   // Use AT instead of MT because it's hidden
            year_automatic_transfer;
        }
        else
        {   // Use MT instead of AT because it's hidden
            year_manual_transfer;
        }
    }
    return;
});