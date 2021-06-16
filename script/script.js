    $(document).ready(function(){
    $("input").focus(function(){
        $(this).val('');
    });
    $("#btn").click(myFunction);
    $("ol").on("click", "li > div", function(){
        $(this).parent().toggleClass("checked");
        if($(this).find($('span.checkbox')).length){
            $(this).find($('span.checkbox')).remove();
        } else {
            var checkmark = "<span class='checkbox'> &#10003 </span>";
            $(this).prepend(checkmark);
        }
    });
    $(document).on("click", '.clsbtn', function(){
        $(this).parent().remove();
    });
});

function myFunction() {
    var inputValue = $("#input").val();

    if(inputValue == "") {
        alert("Empty item can't be added");
    } else {
        var listElement = `<li style="position: relative;"><div> ${inputValue} </div><span class="clsbtn">&times;</span></li>`
        $("#list").append(listElement);
    }
}
