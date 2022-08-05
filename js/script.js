/*------------------------------------*\
  #Scroll Top
\*------------------------------------*/

// 새로 고침시 스크롤top
// $(function(){
//   $("html, body").animate({ scrollTop: 0 }, "slow"); 
// });

$( '#gototop' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, "slow");
	return false;
} );



/*------------------------------------*\
  #0. nav
\*------------------------------------*/

$('.nav_link').on('click', () => {
  $('.nav_button').trigger('click');
});

/*------------------------------------*\
  #1. title : title_animation
\*------------------------------------*/

/**
 * max - min  : max에서 min 사이의 거리 제공
 * + 1 : 숫자의 총량
 * + min : 범위를 확장해서 위치 이동
 * style.setProperty : css 속성 재할당
 * offsetHeight : 요소의 높이
 */


const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("animation-star")) {
  setTimeout(() => {
    animate(star);
    setInterval(() => animate(star), 2000);
  },  2000/3)
}


/*------------------------------------*\
  #1. title : scroll_btn
\*------------------------------------*/

const scrollBtn = document.querySelector('.scroll_btn');
scrollBtn.addEventListener('click', function(e) {
    e.preventDefault();
    scrollBtn.classList.toggle('shadow');
    $('html,body').animate({
        scrollTop: $("#sec2").offset().top},
        'slow');
});


/*------------------------------------*\
  #3. skill : progress_bar
\*------------------------------------*/
const bar_color = document.getElementsByClassName('bar_color');
const bar_text = document.getElementsByClassName('bar_text');
const label = document.getElementsByClassName('skill_label');

let isVisible = false;

$(window).on('scroll', function () {
  if (checkVisible($('#sec4')) && !isVisible ) {
    move()
    isVisible = true;
  }

});

function move() {
  for (let i = 0; i < bar_color.length; i++) {
    let persent_arr = [80, 80,70,50, 40, 50, 50, 60];
    let width = 0;
    let id = setInterval(frame, 15);
    function frame() {
      if (width >= persent_arr[i]) {
        clearInterval(id);
      } else {
        width++;
        bar_color[i].style.width = width + "%";
        bar_text[i].innerHTML = width + "%";
      }
    }
  }
};


function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    let viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

/*------------------------------------*\
  #5. project : horizontal scroll
\*------------------------------------*/
// 마우스로 슬라이더 드래그 가능하게 하는 기능
const slider = document.getElementsByClassName('project_container');
let isDown = false;
let startX;
let scrollLeft;

//마우스 클릭시
for(let i = 0; i<slider.length; i++){
  slider[i].addEventListener('mousedown', e => {
    isDown = true;
    slider[i].classList.add('active');
    startX = e.pageX - slider[i].offsetLeft;
    scrollLeft = slider[i].scrollLeft;
  });
  // 포인터 떠났을때
  slider[i].addEventListener('mouseleave', _ => {
    isDown = false;
    slider[i].classList.remove('active');
  });
  //클릭해제
  slider[i].addEventListener('mouseup', _ => {
    isDown = false;
    slider[i].classList.remove('active');
  });
  //마우스 움직임
  slider[i].addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider[i].offsetLeft;
    const SCROLL_SPEED = 3;
    const walk = (x - startX) * SCROLL_SPEED;
    slider[i].scrollLeft = scrollLeft - walk;
  });
  
  
}
