const scrollAnimationElm = document.querySelectorAll('.sa');
const scrollAnimationFunc = function () {
    for (let i = 0; i < scrollAnimationElm.length; i++) {
        const triggerMargin = 100;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
            scrollAnimationElm[i].classList.add('show');
        }
    }
};
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);


let targets = document.querySelectorAll('.js-scrollAnimation');//アニメーションさせたい要素
let offset = 100;//アニメーションタイミング

window.addEventListener('scroll', function() {//スクロールしたとき

    const scroll = window.scrollY;//スクロール量を取得
    const h = window.innerHeight;//画面の高さを取得

    for(let target of targets) {
        const pos = target.getBoundingClientRect().top + scroll;//アニメーションさせたい要素の位置を取得
        if (scroll > pos - h + offset) {//スクロール量 > アニメーションさせたい要素の位置
            target.classList.add('is-animated');
        }
    }

});