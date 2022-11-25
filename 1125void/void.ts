function add(a: number, b: number): void {
  console.log(a + b);
}

/**
 * 
 * ? void 키워드는 프로그래밍 언어에서 상당히 중요한 시사점을 가지고 있는 키워드 입니다.
 * 사전적 의미로 void는 "무효"를 뜻하는데
 * 자바스크립트에서는 void 키워드를 과감히 삭제하고, undefined이라는 데이터 타입을 도입하는 형태입니다.
 * 표준적인 언어인 C계열 언어, 컴파일언어에서 void는 상당히 자주사용되는 키워드인데, 
 * 자바스크립트와 같은 "스크립트(대본)" 형 언어가가 기본 골격이었던 제작시점에서는 매번 작성하기 귀찮았던 모양입니다.
 * C언어로 void는 return 0을 이야기 하고, 0은 곹 false입니다. 
 * 모던(최신의) C언어는 불리언타입(보통 불, 부울 이라고 합니다, C언어 개발자들은)을 지원하지만,
 * 태초격의 C언어에서는 불리언 타입 자체가 없었습니다. 0이 곧 false, 1이 곧 true입니다.
 * 태생이 하드웨어를 다루기 위한 C언어와 동작을 위해 만들어진 자바스크립트의 목적이 결정적으로 대목입니다. 
 * 
 * "리턴이 없으면 엉뚱한 데이터 타입인 undefined를 '리턴'한다" 라는 것이 개발자들의 불만 이었습니다. 
 * 리턴이 "없다."와 리턴으로 "정의 되지 않았다."를 반환하는 것은 모호하기 때문입니다. 
 * "리턴이 없을 때 이렇게 해줘"라는 명령이 아닌 "리턴이 특수한 데이터 타입 일 떼 이러헥 해줘"로 어감(명령)이 바뀌는 것이 문제 였고, 이것을 해결하기 위해 "명시적인 리턴 유무"를 뜻하는 void키워드가 타입스크리트에서 다시 활용 됩니다. 
 * 
 * 위 add()라는 함수는 "실행은 하지만 리턴은 없다"라는 것을 명시적으로 void구문으로 바로 확인 할 수 있습니다. 
 * undefined라는 리턴이 있는지 여부를 매번 찾을 필요가 없기 때문입니다. 
 * 
 * 명시성 면에서 상당히 요긴하며, 관점을 확장해 자바스크립트만 유독 void를 사용하지 않는 점으로 확인 하시기 바랍니다. 
 */

function addTwo(a: number, b: number): number {
  return a + b;
}

//? addTwo의 리턴은 number타입입니다.

/**
 * 자바스크립트가 지원하는 기본 데이터 타입에는 열손가락 안에 드는 가짓수로 설계 되어있기 때문에, 사람이 고려해야하는 영역이 다른 언어들에 비해 적은 편입니다.(정수, 실수를 자바스크립트 데이터타입이 구분하지 않듯) 저수준의 언어로 파고들수록 데이터타입이 매우 단촐하거나 혹은 매우 많거나 하는 양가적인 모습을 보이지만, 중요한 개념은 자동화되어있을 뿐 자바스크립트에도 존재합니다.
바로 리턴에 대한 관점입니다.

리턴구분없이 값을 처리하는것이 상상조차 하기 싫을 만큼 끔찍할 것을 예상합니다. 그리고 그 안에도 자동화 되어있는점이 있는데 바로
undefined 라는 요상한 데이터타입입니다. null 도 아니고 아닌것도 아닌 이상한 데이터타입. "정의 되지 않았다" 라는 에러가 아닌 한개의 "값"을 리턴하는 것이 바로 자동화된 요지이며, 다른 언어에서는 이를 엄격히 구분합니다.

즉 리턴이 없는 실행이라면 반드시 그에 상응하는 조치를 취한다가 골자 입니다.

바로 대표적인 키워드 void가 그것입니다. 리턴의 유무를 return 0로 표현하는 C 계열 언어에서, void는 짝꿍처럼 붙는 개념인데, 자바스크립트 언어제작자는 void라는 말이 귀찮았는지, 아예 데이터타입으로 만들어버렸습니다.(비유이긴하지만)

타입스크립트가 추구하는 '안정성' 면에서 void 키워드는 상당히 쓸모가 많은, '언어적 추론'이 강력하고, 기능면에서도 출중합니다. 본 예제 처럼 간단한 형태로 실습해보시기 바랍니다. 다른 언어에서 말하는 void라는 개념이 보이기 시작하며, 그 끝에는 언어에 귀속되지 않는 개발자가 되는 능력으로 발전하게 될 것을 예상합니다.
*/