// TDD - 테스트 주도 개발(테스트 방법론) -> 테스트 코드를 작성하고 실제 코드를 수정하는 방식

export const isEmail = (value) => {
    // 이메일 형식 검증 함수
    // value: 검증할 값

    // 입력값이 없을 경우 빈 문자열로 초기화
    const email = value || '';

    // 앞 @ 뒤 분리작업
    const [localPart, domainPart, ...etc] = email.split('@');

    // "@" 문자를 기준으로 이메일을 분할했을 때 길이가 2가 아니면 이메일 형식이 아님
    // if (email.split('@').length !== 2) {
    if (!localPart || !domainPart || etc.length) {
        return false;
    }

    // 이메일에 공백이 포함되어 있으면 이메일 형식이 아님
    else if (email.includes(' ')) {
        return false;
    }

    // 이메일 시작이 하이픈("-")으로 되어 있으면 이메일 형식이 아님
    else if (email[0] === '-') {
        return false;
    }

    // split('') -> ex) naver -> ['n','a','v','e','r']
    // 입력한 이메일 주소중, 로컬 파트(골뱅이 기준 앞부분)에는 영문 대소문자와 숫자, 특수문자는 덧셈기호(+), 하이픈(-), 언더바(_) 3개 외에 다른 값이 존재하면 이메일 형식이 아님.
    for (const word of localPart.toLowerCase().split('')) {
        if (
            ![
                'a',
                'b',
                'c',
                'd',
                'e',
                'f',
                'g',
                'h',
                'i',
                'j',
                'k',
                'l',
                'm',
                'n',
                'o',
                'p',
                'q',
                'r',
                's',
                't',
                'u',
                'v',
                'w',
                'x',
                'y',
                'z',
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '-',
                '+',
                '_',
            ].includes(word) // includes() 특정 문자열이 포함되는지 확인가능
        ) {
            return false;
        }
    }

    // 입력한 이메일 주소중, 도메인 파트(골뱅이 기준 뒷부분)에는 영문 대소문자와 숫자, 점(.), 하이픈(-), 외에 다른 값이 존재하면 이메일 형식이 아님.
    for (const word of domainPart.toLowerCase().split('')) {
        if (
            ![
                'a',
                'b',
                'c',
                'd',
                'e',
                'f',
                'g',
                'h',
                'i',
                'j',
                'k',
                'l',
                'm',
                'n',
                'o',
                'p',
                'q',
                'r',
                's',
                't',
                'u',
                'v',
                'w',
                'x',
                'y',
                'z',
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '-',
                '.',
            ].includes(word)
        ) {
            return false;
        }
    }

    // 모든 검증 조건을 통과하면 이메일 형식이 맞음
    return true;
};

/*************************************************************/
// 정규 표현식을 이용한 isEmail 함수

// export const isEmail = (value) => {
//     const email = value || '';
//     const [localPart, domain, ...etc] = email.split('@');

//     if (!localPart || !domain || etc.length) {
//         return false;
//     } else if (email.includes(' ')) {
//         return false;
//     } else if (email[0] === '-') {
//         return false;
//     } else if (!/^[a-z0-9+_-]+$/gi.test(localPart)) {
//         return false;
//     } else if (!/^[a-z0-9.-]+$/gi.test(domain)) {
//         return false;
//     }

//     return true;
// };
