document.querySelector('#year_calc').addEventListener("click", (e) => {
    var year_ipt = {
        unit : document.querySelector("#year_unit").value ,
        type : parseInt( document.querySelector("#year_type").value , 10 )
    };
    var mingo_year = 1911;
    var year_result = 0;
    
    if ( isNaN( year_ipt.type ) === true )
    {
        document.querySelector("#year_inputed").innerText = "Invaild input!";
    }
    else
    {
        document.querySelector("#year_inputed").innerText = year_ipt.type;
        if ( year_ipt.unit == "mingo" )
        {
            year_result = year_ipt.type + mingo_year;
            document.querySelector("#year_result").innerText = year_result;
        }
        else if ( year_ipt.unit == "grego" )
        {
            year_result = year_ipt.type - mingo_year;
            document.querySelector("#year_result").innerText = year_result;
        }
        else
        {
            // console.log( year_ipt.unit );
            document.querySelector("#year_result").innerText = "Error!";
        }
    }
});
