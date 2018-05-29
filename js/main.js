
function loadViews(dato){

    if (dato === 1){
    $('#ejercicio1').click(function(){
        $('.well').addClass('hidden')
        $('.well').load('./views/ajaxDropdown.html')
        $('.well').removeClass('hidden')
    })
} else {
    $('#ejercicio2').click(function(){
        $('.well').addClass('hidden')
        $('.well').load('./views/checkboxToggle.html')
        $('.well').removeClass('hidden')
    }) 
}
}