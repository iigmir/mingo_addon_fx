function year_transfer_mode(e)
{
    e.preventDefault();
    browser.storage.local.set({
        ytm: {
            at: document.querySelector('input[name="year_transfer"][value="at"]').checked,
            mt: document.querySelector('input[name="year_transfer"][value="mt"]').checked
        }
    });
    browser.storage.local.get().then(
    (test)=> {
        let setting_okay = Object.keys(test.ytm).length === document.querySelectorAll('input[name="year_transfer"]').length;
        let update_msg = setting_okay ? "#update_status .success" : "#update_status .error";
        console.log(test);
        document.querySelector(update_msg).classList.remove("hide");
        window.setTimeout(()=>document.querySelector(update_msg).classList.add("hide"),1500);
    },
    (err)=> {
        alert("儲存失敗！");
        console.error(err);
    });
}

function init_mode()
{
    function default_mode(result)
    {
        document.querySelector('input[name="year_transfer"][value="at"]').checked = result.at || true;
        document.querySelector('input[name="year_transfer"][value="mt"]').checked = result.mt || false;
    }
    function load_error(error)
    {
        console.log(`Error: ${error}`);
    }
    var getting = browser.storage.local.get("ytm");
    getting.then(default_mode, load_error);
}

document.addEventListener("DOMContentLoaded", init_mode);
document.querySelector("form#year_transfer").addEventListener("submit", year_transfer_mode);