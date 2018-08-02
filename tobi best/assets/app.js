$(document).on('submit', '#contact form',function(e){
    e.preventDefault();
    alert("your message has been sent");
    $("#contact-form")[0].reset();
})

