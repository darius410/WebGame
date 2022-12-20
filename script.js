window.addEventListener('scroll', function(e) {
    const skyLayer = document.getElementById('clouds');
    const landScape = document.getElementById('forGround');
    const header = document.getElementById('firstHeader');
    var scrollY = window.scrollY;
    var rate = scrollY * 5;
    header.style.transform = 'translate3d(200px' +rate+ '40px)';
    skyLayer.style.transform = 'translate3d(200px,'+ rate + 'px, 40px)';
    console.log("scroll active");
});