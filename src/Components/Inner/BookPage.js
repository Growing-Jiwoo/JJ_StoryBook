import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { BookPageStyle, BackImageMentContainer, MoveLetterText, MoveMainText } from './styled'

const BOOK_PAGE_IMAGE = Array.from({length: 64}, (_, i) => `/img/${i + 1}.jpg`);

const BOOK_PAGE_MENT = [
  "우리 제천 갔다가 아웃닭 가는 길~", 
  "제천 1등 키다리 미녀.jpg", 
  "아버님 뵈러 제천으로 출발~", 
  "청사포~해운대 산책하다가 !", 
  "현대미술관에서~~~", 
  "전포 카페 얼룩에서 같이 ㅎㅎ", 
  "지현이 덕에 공짜로 롯데월드 간 날~", 
  "이쁜 루시 ㅎ", 
  "이쁜 루시와 산책~~~~~", 
  "지현이랑 웨스 갔다가 임랑해수욕장에서", 
  "지현이와 함께 맞이한 2023년 1월 1일", 
  "광안리 불꽃 축제 기다리면서~", 
  "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ할많하않", 
  "지현이랑 경주 신달하우스에서", 
  "힐링하러 떠난 경주에서 산책~~~", 
  "겨우 성공한 경복궁 야간개장 !", 
  "서울 핫플 지대로 즐긴 날", 
  "서울 스타일 지현이의 OOTD", 
  "한강에서 달려온 너무 귀여웠던 강아지", 
  "너무 하고싶었던 한강 자전거~~~~", 
  "한강에서 2인용 자전거 ㅎㅎ", 
  "서울 국립 현대미술관에서 !", 
  "경복궁 담벼락 따라서 걷다가 지현이가 찍어준 사진", 
  "이태원 카페에서 ㅎ", 
  "서울에서 자주 찍었던 지하철 전신거울샷", 
  "부산 신세계아울렛에서 더쿠랑", 
  "기장에서 mz스럽게", 
  "지현이 파인드카푸어 가방 전달식~", 
  "기장 보몽드에서 !", 
  "200일 여행으로 갔던 울산 간절곶", 
  "영도에서 mz스럽게", 
  "우리의 첫 시민공원 피크닉", 
  "지현이 대학 입학 전에 추억 남기기", 
  "진짜 다사다난했던 다낭 바나힐........", 
  "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ바나힐 레전드", 
  "올드타운 카페 루프탑~~~ 페이스북에도 올라갔던 ㅎ", 
  "너무너무 좋았던 다낭 하얏트 리조트 !", 
  "목해산물 기다리면서 산책 스윽", 
  "기다리고 기다리건 다낭 도착 !!!!!!!", 
  "우리의 첫 해외여행 출발 직전 ㅎ", 
  "너무 행복했던 힐튼에서의 반신욕", 
  "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ풉...ㅋㅋㅋㅋ", 
  "지현이와 너무 잘 어울렸던 꽃", 
  "우리의 첫 롯데월드에서 콜팝 ㅎ", 
  "덥지만 즐거웠던 거제 외도 보타니아~", 
  "거제에서 시도했던 알수없는 구도", 
  "지현이가 해준 생일 선물 ~~~~", 
  "해리단길 즐기고 하루필름에서", 
  "지현이와 즐거웠던 생일 데이트 ㅎ", 
  "생일 케이크가 너무너무 이뻤다 ㅎㅎ 최고", 
  "찐 힐링이였던 아홉산숲 산책", 
  "포항 네이처 풀빌라에서 맞이한 조식 !", 
  "포항에서 하루필름 야무지게 찍기", 
  "야구장에서도 열일하는 지현이 미모 ㅎ", 
  "야구장에서 먹었던 치킨 진짜 최고", 
  "내 인생에서의 처음이자 우리의 첫 야구 직관", 
  "우리의 첫 등산 ㅎㅎㅎ 최고였다", 
  "경주 황리단길에서 지나가다가 !", 
  "전포에서 인생 네컷 죠져버리기~", 
  "경주에서도 피해갈 수 없는 거울샷", 
  "지현이에게 줬던 첫 꽃", 
  "지현이 미모가 인스타에 널리 퍼진 날", 
  "너무너무 이뻤던 오륙도 수선화와 함께", 
  "개꿀잼 카러플 ㅎㅎ", 
  "등산 가려고 직접 만든 김밥~~~", 
  "우리의 처음", 
];

export function BookPage() {
  const [imageIndex, setImageIndex] = useState(0);
  const navigate = useNavigate();

  const randomImage = () => {
    setImageIndex(Math.floor(Math.random() * BOOK_PAGE_IMAGE.length));
  };

  return (
    <div className="App">
      <AnimatePresence>
        <BookPageStyle
          key={BOOK_PAGE_IMAGE[imageIndex]}
          style={{ backgroundImage: `url(${BOOK_PAGE_IMAGE[imageIndex]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2.5,
            type: "tween",
            ease: "easeInOut",
          }}
          onAnimationComplete={randomImage}
        >
          <BackImageMentContainer>
            {BOOK_PAGE_MENT[imageIndex]}
          </BackImageMentContainer>
        </BookPageStyle>
      </AnimatePresence>
  
      <MoveLetterText
        animate={{}}
        transition={{ duration: 20 }}
        onClick={() => { navigate('/letter'); }}
      >
        letter {">"}{">"} 
      </MoveLetterText>

      <MoveMainText
        animate={{}}
        transition={{ duration: 20 }}
        onClick={() => { navigate('/'); }}
      >
       {"<"}{"<"} main
      </MoveMainText>
    </div>
  );
}