window.onload = ()=>{
    let images = document.getElementById('img-gallery').children;
    let lightbox = document.getElementById('lightbox');
    let lightboxImage = document.getElementById('lightbox-img');
    let closeBtn = document.getElementById('close');
    let leftArrow = document.getElementById('left-arrow');
    let rightArrow = document.getElementById('right-arrow');

    // add event listener on images to display the image in the lightbox
    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        img.addEventListener('click', showImage);
    }

    // event listener to close the lightbox                     (amélioration: pouvoir fermer lightbox avec escape)
    closeBtn.addEventListener('click', function(e){
        lightbox.style.display = 'none';
    });

    window.addEventListener('keyup', function(e){

        console.log(e.keyCode);
        

        if (e.keyCode === 27) {
            lightbox.style.display = 'none';
        }

        if (e.keyCode === 39) {
            showNextImage();
        }

        if (e.keyCode === 37) {
            showPreviousImage();
        }
    });


    // event listener for to show previous image
    leftArrow.addEventListener('click', showPreviousImage);

    // event listener for to show next image
    rightArrow.addEventListener('click', showNextImage);


    function showImage(e){

        lightbox.style.display = 'grid';

        lightboxImage.src = e.target.src;

        img.addEventListener('dblclick', function(){
            img.style.transform = 'scale(2)';
        });
    }

    function showNextImage(e) {
        for (let i = 0; i < images.length; i++) {
            const img = images[i];

            if (lightboxImage.src == img.src) {

                if (i === images.length-1) {
                    lightboxImage.src = images[0].src
                } else {
                    lightboxImage.src = images[i+1].src
                }
                break;
            }
        }
    }

    function showPreviousImage(e) {
        for (let i = 0; i < images.length; i++) {
            const img = images[i];

            if (lightboxImage.src == img.src) {

                if (i === 0) {
                    lightboxImage.src = images[images.length-1].src
                } else {
                    lightboxImage.src = images[i-1].src
                }
                break;
            }   
        }
    }
}