let globalX = 0;
let globalY = 0;

$(document).on('mousemove', function (e) {
    globalX = e.pageX;
    globalY = e.pageY;
})

$('.zoom__img__item').on('mousemove', function () {
    let zoom = 3;
    let img = $(this).attr('href');
    let imgBlock = $(this).find('img');
    let imgWidth = imgBlock.width();
    let imgHeight = imgBlock.height();
    let overlay = $('.zoom__img__overlay');
    let cursor = $('.zoom__img__cursor');
    cursor.css('width', overlay.width() / zoom + 'px');
    cursor.css('height', overlay.height() / zoom + 'px');
    let cursorWidth = cursor.outerWidth();
    let cursorHeight = cursor.outerHeight();
    let posX = globalX - $(this).offset().left - cursorWidth / 2;
    let posY = globalY - $(this).offset().top - cursorHeight / 2;

    if (posX < 0) {
        posX = 0;
    };

    if (posX > (imgWidth - cursorWidth)) {
        posX = imgWidth - cursorWidth
    };

    if (posY < 0) {
        posY = 0;
    };

    if (posY > (imgHeight - cursorWidth)) {
        posY = imgHeight - cursorWidth
    };

    cursor.css('left', posX + 'px');
    cursor.css('top', posY + 'px');
    cursor.show();

    posX *= zoom;
    posY *= zoom;
    overlay.css('background-image', `url(${img}`);
    overlay.css('background-size', (imgWidth * zoom) + 'px');
    overlay.css('background-position', `-${posX}px -${posY}px`);
    overlay.show();
});

$('.zoom__img__item').on('mouseleave', function () {
    $('.zoom__img__cursor').hide();
})