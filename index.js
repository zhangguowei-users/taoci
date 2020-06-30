const background = document.querySelector('#background');
const background_color = document.querySelector('#background_color');
const background_color_class = document.querySelectorAll('.background_color');
const position = document.querySelector('#position');
const body = document.querySelector('body');
const help = document.querySelector('#help');
const html = document.querySelector('html');
const img = document.querySelectorAll('img');
const help_screen = document.querySelector('#help_screen');
const off_img = document.querySelector('#off_img');
const off = document.querySelector('#off');
const off1 = document.querySelector('#off1');
const jianjie = document.querySelector('#jianjie');
const home = document.querySelector('#home');
const move = document.querySelector('#move');
document.addEventListener('touchmove',function(e){
   e.preventDefault();
},{passive:false});
setTimeout(function(){
    help_screen.style.display = 'none';
},3000);
for(let i=0,len=img.length;i<len;i++){
    img[i].addEventListener('touchstart',function(e){
        e.preventDefault();
    });
};
window.addEventListener('touchmove',function(e) {
    e.preventDefault();
});
background.addEventListener('touchstart',function(e){
    background_color.style.display = 'inline-block';
});
for(let i=0,len=background_color_class.length;i<len;i++){
    background_color_class[i].addEventListener('touchstart',function(e){
        for(let i=0,len=background_color_class.length;i<len;i++){
            background_color_class[i].style.border = '0px dashed #ffcc33';
        };
        this.style.border = '0.01rem dashed #ffcc33';
        background_color.style.display = 'none';
        body.style.background = getComputedStyle(this,null)['background'];
    });
};
//定位按钮手指按下事件
position.addEventListener('touchstart',function(e){

});
//帮助按钮手指按下事件
help.addEventListener('touchstart',function(e){
    help_screen.style.display = 'inline-block';
    off.style.display = 'inline-block';
});
//关闭帮助页
off_img.addEventListener('touchstart',function(e){
    help_screen.style.display = 'none';
});
//打开简介
home.addEventListener('touchstart',function(e){
    jianjie.style.display = 'inline-block';
});
//关闭简介
off1.addEventListener('touchstart',function(e){
     jianjie.style.display = 'none'
});
//旋转
move.addEventListener('touchstart',function(e){

});