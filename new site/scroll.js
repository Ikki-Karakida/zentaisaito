//�{�^��
const scroll_to_top_btn = document.querySelector('#scroll-to-top-btn');

//�N���b�N�C�x���g��ǉ�
scroll_to_top_btn.addEventListener( 'click' , scroll_to_top );

function scroll_to_top(){
    window.scroll({top: 0, behavior: 'smooth'});
};


//�X�N���[�����̃C�x���g��ǉ�
window.addEventListener( 'scroll' , scroll_event );

function scroll_event(){

    if(window.pageYOffset > 400){
        scroll_to_top_btn.style.opacity = '1';
    }else	if(window.pageYOffset < 400){
        scroll_to_top_btn.style.opacity = '0';
    }

};