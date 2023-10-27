function IsNull(str) {
    return (Trim(str) == "") ? false : true;
}

function Trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

function replaceHTML(str) {
    str = str.replace(/<[^>].*?>/g, "");
    str = str.replace(/&nbsp;/g, "");
    return str;
}

var content = document.getElementById("tscontent").value;
if (!IsNull(replaceHTML(content))) {
    $("#contentError").text("请填写举报内容！");
    return false;
}
