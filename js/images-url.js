//Delete function
$(document).ready(function () {
    $('.btn-action').click(function () {
        let img = $(this).closest('.card').find('.img-card');
        img.attr('src', 'images/no_pet.svg');
    });
});


$(document).ready(function () {
    let allImg = $('.img-card').toArray();
    let i = 0;
    let src = null;

    $('#add-button').click(function () {
        $(allImg[i]).attr('src', $('#img-url').val());
        if (i >= allImg.length) {
            i = 0;
        }
    });
});




