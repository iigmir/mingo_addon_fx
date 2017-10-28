function notify(message)
{
    console.log("background script received message");
    var title = browser.i18n.getMessage("notificationTitle");
    var content = browser.i18n.getMessage("notificationContent", message.url);
    browser.notifications.create({
        "type": "basic",
        "iconUrl": browser.extension.getURL("icons/kmt.svg"),
        "title": title,
        "message": content
    });
}

// browser.runtime.onMessage.addListener(notify);