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


let targets = document.querySelectorAll('.js-scrollAnimation');//�A�j���[�V�������������v�f
let offset = 100;//�A�j���[�V�����^�C�~���O

window.addEventListener('scroll', function() {//�X�N���[�������Ƃ�

    const scroll = window.scrollY;//�X�N���[���ʂ��擾
    const h = window.innerHeight;//��ʂ̍������擾

    for(let target of targets) {
        const pos = target.getBoundingClientRect().top + scroll;//�A�j���[�V�������������v�f�̈ʒu���擾
        if (scroll > pos - h + offset) {//�X�N���[���� > �A�j���[�V�������������v�f�̈ʒu
            target.classList.add('is-animated');
        }
    }

});