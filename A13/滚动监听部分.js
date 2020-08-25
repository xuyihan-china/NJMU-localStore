window.addEventListener('scroll',(e)=>{
    /* console.log(document.documentElement.scrollHeight) */
    /* 不变值 */
    let scrolled = document.documentElement.scrollTop/
    (document.documentElement.scrollHeight-document.documentElement.clientHeight)
    // 页面卷动高度为0 scroll为 0 在底部 页面卷动高度最大 = 页面高度- 视口高度 为1
    //都在一个页面上控制opacity 
    let $h1 = document.querySelector('h1')
    let $theChip = document.querySelector('#the-chip')
    let $A13 = document.querySelector('#A13')
    let $A13TextBg = document.querySelector('#the-chip .text-bg')
    $theChip.style.width = $theChip.style.height = document.documentElement.clientWidth * 20 * (scrolled * scrolled * scrolled) + 'px'
    if(scrolled<=0.1){
      $h1.style.opacity = 1-scrolled/0.1
      $h1.style.marginTop = scrolled*800+'px'
    }else{
      $h1.style.opacity = 0
    }
    if (scrolled <= 0.2) {
        $A13.style.opacity = (scrolled - 0.1) / 0.1
    } else {
        $A13.style.opacity = 1
    }
    //临界点 修改A13字体的透明度 慢慢透明 1-scrolled
    if (scrolled >= 0.5) {
        $A13TextBg.style.opacity = (1-scrolled)*1.5
        $theChip.classList.add('transparent')
      } else {
        $A13TextBg.style.opacity = 1
        $theChip.classList.remove('transparent')
      }
      if (scrolled >= 0.95) {
          //让the chip 透明
        $theChip.style.opacity = (1 - scrolled) / 0.05
      } else {
        $theChip.style.opacity = 1
      }
})