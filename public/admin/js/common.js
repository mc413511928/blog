// 格式化表单数据的
function serializeToJSON(form) {
    let data = form.serializeArray();
    let obj = {};
    data.forEach(item => {
        obj[item.name] = item.value;
    });
    return obj;
}