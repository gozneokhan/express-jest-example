import { isEmail } from './validation.js';

test('입력한 이메일 주소에는 "@" 문자가 1개만 있어야 이메일 형식이다.', () => {
    expect(isEmail('example@naver.com')).toEqual(true);
    expect(isEmail('example@@naver.com')).toEqual(false);
    expect(isEmail('example@@@naver.com')).toEqual(false);
    expect(isEmail('examplenaver.com')).toEqual(false);
    expect(isEmail('e.com')).toEqual(false);
});

test('입력한 이메일 주소에 공백(스페이스)이 존재하면 이메일 형식이 아니다.', () => {
    expect(isEmail('example@naver.com')).toEqual(true);
    expect(isEmail('example @naver.com')).toEqual(false);
    expect(isEmail('ex am ple @naver.com')).toEqual(false);
    expect(isEmail(' example@naver.com')).toEqual(false);
    expect(isEmail('example@naver.com ')).toEqual(false);
});

test('입력한 이메일 주소 맨 앞에 하이픈(-)이 있으면 이메일 형식이 아니다.', () => {
    expect(isEmail('-example@naver.com')).toEqual(false);
    expect(isEmail('example@naver.com')).toEqual(true);
    expect(isEmail('example-@naver.com')).toEqual(true);
    expect(isEmail('exam--ple@naver.com')).toEqual(true);
    expect(isEmail('ex-ample@naver.com')).toEqual(true);
});

test('입력한 이메일 주소중, 로컬 파트(골뱅이 기준 앞부분)에는 영문 대소문자와 숫자, 특수문자는 덧셈기호(+), 하이픈(-), 언더바(_) 3개 외에 다른 값이 존재하면 이메일 형식이 아니다.', () => {
    expect(isEmail('example@naver.com')).toEqual(true);
    expect(isEmail('ex+-am+-_ple@naver.com')).toEqual(true);
    expect(isEmail('e##x+-am^^+-$$_ple@naver.com')).toEqual(false);
    expect(isEmail('ex**<<am<<>><><><><p<???le@naver.com')).toEqual(false);
});

test('입력한 이메일 주소중, 도메인(골뱅이 기준 뒷부분)에는 영문 대소문자와 숫자, 하이픈(-) 외에 다른 값이 존재하면 이메일 형식이 아니다.', () => {
    expect(isEmail('example@naver.com')).toEqual(true);
    expect(isEmail('example@na-v-e-r.com')).toEqual(true);
    expect(isEmail('example@na-v2342311-e-r.com')).toEqual(true);
    expect(isEmail('example@na$$*&##ver.com')).toEqual(false);
    expect(isEmail('example@na>>>?<<<ver.com')).toEqual(false);
});
