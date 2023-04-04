//Delete function
$(document).ready(function () {
    $('.btn-action').click(function () {
        let img = $(this).closest('.card').find('.img-card');
        img.attr('src', 'images/no_pet.svg');
    });
});

//Add images
$(document).ready(function () {
    let allImg = $('.img-card').toArray();
    let i = 0;
    let regex = /^https?:\/\//

    $('#add-button').click(function () {
        let url = $('#img-url').val();
        if ($(allImg[i]).attr('src') !== 'images/no_pet.svg') {
            i++;
            if (i >= allImg.length) {
                i = 0;
            }
        }
        if (!regex.test(url)) {
            alert('La URL de la imagen no es válida');
            return;
        }
        $(allImg[i]).attr('src', $('#img-url').val());
    });
});

$('#delete-button').click(function () {
    alert("URL Borrada");
    $('#img-url').val('');
})




