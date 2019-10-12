// Created by wxc on 2019/10/12

// 初始化
let dragState = false;

function TableDragEvent () {
    // 表头鼠标移动事件
    $(document).find('table th').on('mousemove', function (element) {
        let bodyTrNumber = $(document).find('table tbody > tr');

        if (bodyTrNumber === 0) {
            return;
        }

        if (dragState) {

        } else if (IsOnBorder(element)) {
            dragState = true;
            $(element.currentTarget).css("cursor", "col-resize");
        } else {
            dragState = false;
            $(element.currentTarget).css("cursor", "default");
        }
    })
}

// 判断指针当前是否在边框附近
function IsOnBorder (element) {

}

$(function () {
    TableDragEvent();
})