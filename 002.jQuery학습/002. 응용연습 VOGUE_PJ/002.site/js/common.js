// 보그 PJ 공통 기능 JS - common.js

$(()=>{////////// jQB /////////////////////
    // 스크롤 등장액션을 위한 클래스 셋팅
    // main.cont>section 중 두번째부터 끝까지
    // 선택하여 .scAct를 줘서 
    // 투명하고 아래로 조금 내려가 있는 상태를 만든다!
    // 선택자: first는 제이쿼리 전용임!
    // 원래 css선택자는: first-child임!
    $('main.cont>section:first~section')
    .addClass('scAct');
});////////////// jQB /////////////////////