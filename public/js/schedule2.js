function add() {
    alert("추가되었습니다");
}

window.onpageshow = function (event) {

    // 새로고침: window.performance.navigation.type == 1
    // 뒤로가기: window.performance.navigation.type == 2
    if (event.persisted || (window.performance && (window.performance.navigation.type == 1 || window.performance.navigation.type == 2))) {
    
        // 현재 브라우저에서 WebStorage를 지원할 때
        if (('sessionStorage' in window) && window['sessionStorage'] !== null) {
        
            // sessionStorage로 데이터 다시 불러오기
            if (sessionStorage.getItem('DATA')) {
                input_text.value = sessionStorage.getItem('DATA');
            }
            
        }
        
    }
    
}