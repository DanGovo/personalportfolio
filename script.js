$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typping animation script
    var typed = new Typed(".typing", {
        strings: ["Full Stack Developer", "Database Developer","Systems Analyst", "DevOps Expert"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Full Stack Developer", "Database Developer","Systems Analyst", "DevOps Expert"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // modal script code
    // Get modal elemnt
    var modal = document.getElementById('modal');

    // get open modal button
    var modalBtn = document.getElementById('vmis');

    // get close button
    var closeBtn = document.getElementsByClassName('closeBtn')[0];

    // lisiten fro click events
    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);

    // function to open modal
    function openModal(){
        modal.style.display = 'block';
    }

    function closeModal(){
        modal.style.display = 'none';
    }

    function outsideClick(e){
        if(e.target == modal){
            modal.style.display = 'none';
        }
    }
});