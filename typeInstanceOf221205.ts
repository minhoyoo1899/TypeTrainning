// ? property 하나로 구성된 First 생성자 함수(class)
// * constructor : 사전적으로 '건설', '제작'을 뜻한다. 

class First {
  first: any;
  constructor(first) {
    this.first = first;
  }
}

const firstInstance = new First("first");
console.log(firstInstance);
// * FIrst {first: 'first'}
// * new 키워드로 생성자 함수 '로부터' 객체를 생산(제작) 할 수 있다.
// * 상수 firstInstance는 결과적으로 한쌍의 객체이다.
// * 일반 객체 리터럴과 달리 '인스턴스' 라는 것을 확인 할 수 있다.
console.log(firstInstance instanceof First);

/** 
 *  * typeof() 연산자로 데이터 타입을 확인 할 수 있는 것 처럼
 *  * class, 즉 생성자 함수로 부터 만들어진 객체인지(인스턴스) 확인하는 연산자를 제공한다.
 * * 좌항(피연산자, 인스턴스) instanceof 우항(클래스)가 바로 그것
 * * 해당 인스턴스가 우항의 클래스에서 생성된 객체가 맞는다면 true를 리턴한다. 
 * 
 * ? 생각해 볼 중요한 관점
 * pseudo .1 애플리케이션 제작을 위해 원하는 생성자 함수로부터 만드렁진 것이 아니라면 '거부' 시키는 방식
 * pseudo .2 위의 First 생성자 함수는 재사용에 대한 의도가 전혀 없기 때문에 쓸모가 없다. 
 * pseudo .3 다시말해 재사용성을 고려한 모듈, '검사'를 위한 객체 조사여부라면 상당히 신뢰도 높은 값을 언어 낼 수 있다. 
 * pseudo .4 신뢰도 === 안정성 === 타입스크립트의 철학 이 세가지의 목적이 맞물려 있다.
 * pseudo .5 타입스크립트의 압도적인 정적 명시 방식을 내 애플리케이션에 적용하고자 할 때,
 * pseudo .6 역으로 '클래스(생성자 함수)'의 적용도에 대해 생각해 볼 사안이다. 
*/

console.log(firstInstance.first); //?
const { first } = firstInstance;
// *구조 분해 할당 (destruring assignment);