let imgsmall = document.querySelector('.imagesmall');
let imagemain = document.querySelector('.imagemain');
const maincrs = imagemain.src;
let imagessmall = document.querySelectorAll('.imagesmall');
for (let i = 0; i<imagessmall.length; i++) {

    /*let smallcrs = document.querySelector(src_id).src;*/
    /*console.log(imagemain.src);
     console.log(imagessmall[i].src);*/
    imagessmall[i].addEventListener('mouseover', function () {
            imagemain.src = imagessmall[i].src;
            /*document.querySelector(src_id).src = maincrs;
             /*imagessmall[i].crs = maincrs;
             console.log(maincrs);*/

        }
    );

    imagessmall[i].addEventListener('mouseout', function () {
        imagemain.src = maincrs;
    })
}