function loadViews(selectedMenu){
    var selectedView = $(selectedMenu).data("custom-ref")
    $(".main-wrapper").load("./views/"+selectedView+".html")
}
