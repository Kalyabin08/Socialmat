

/* Navigation menu */
window.addEventListener('DOMContentLoaded', () => { 
         const instagram = document.querySelector('.nav__list-instagram'),
               showInstagram = document.querySelector('.menu__block-list-instagram'),
               facebook = document.querySelector('.nav__list-facebook'),
               showFacebook = document.querySelector('.menu__block-list-facebook'),
               tiktok = document.querySelector('.nav__list-tiktok'),
               showTiktok = document.querySelector('.menu__block-list-tiktok'),
               twitter = document.querySelector('.nav__list-twitter'),
               showTwitter = document.querySelector('.menu__block-list-twitter'),
               youtube = document.querySelector('.nav__list-youtube'),
               showYoutube = document.querySelector('.menu__block-list-youtube'),
               soundCloud = document.querySelector('.nav__list-cloud'),
               showSoundCloud = document.querySelector('.menu__block-list-SoundCloud'),
               linkedlin = document.querySelector('.nav__list-linkedlin'),
               showLinkedlin = document.querySelector('.menu__block-list-linkedlin');
               



        function showContent() {
             function showBlock() {
                instagram.addEventListener('click', () => {
                    showInstagram.classList.toggle('active');
                            });
                            facebook.addEventListener('click', () => {
                                showFacebook.classList.toggle('active')
                            });
                            tiktok.addEventListener('click', () => {
                                showTiktok.classList.toggle('active')
                            });
                            twitter.addEventListener('click', () => {
                                showTwitter.classList.toggle('active')
                            });
                            youtube.addEventListener('click', () => {
                                showYoutube.classList.toggle('active')
                            });
                            soundCloud.addEventListener('click', () => {
                                showSoundCloud.classList.toggle('active')
                            });
                            linkedlin.addEventListener('click', () => {
                                showLinkedlin.classList.toggle('active')
                            });
                            
                            
                         }
             showBlock();
            }
        showContent()
        



/* Slider*/

$(document).ready(function() {
    $('.slider').slick({
        centerMode: true,
        slidesToShow: 3,
        dots:true,
        arrows:true,
        speed: 500,
    })


})
});







