const items = document.querySelectorAll('.item');
const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;
  });
  gsap.to(items, {
    width: item.clicked ? '15vw' : '8vw',
    duration: 2,
    ease: 'elastic(1, .6)' });


  item.clicked = !item.clicked;
  gsap.to(item, {
    width: item.clicked ? '42vw' : '15vw',
    duration: 2.5,
    ease: 'elastic(1, .3)' });
    $(this).css({
      left:500
    })
};

items.forEach((item, i) => {
  item.clicked = false;
  item.addEventListener('click', () => expand(item, i));
});
var itemnum=false
let itemcheck = false
$(".item").click(function(){
  // alert($(this).index())
  $(".item").children("h1").fadeOut(500)
  $(".item").children("p").fadeOut(500)
  
  if(itemcheck==false){
    $(this).children("h1").stop().fadeIn(1000)
    $(this).children("p").stop().fadeIn(1000)
    itemcheck = true
    itemnum=$(this).index()
    // alert(itemcheck)
  }else if(itemcheck==true){
    if(itemnum==$(this).index()){
      $(this).children("h1").stop().fadeOut(1000)
      $(this).children("p").stop().fadeOut(1000)
      itemcheck = false
      // alert(itemcheck)
      // alert(itemnum)
    }else{
      $(this).children("h1").stop().fadeIn(1000)
      $(this).children("p").stop().fadeIn(1000)
      itemcheck = true
      itemnum=$(this).index()
      // alert(itemcheck)
      // alert(itemnum)
    }
  }
})