import { CenteredA4Letter, MoveMainText, Content, Title, Line, A4Letter } from './styled'
import { useNavigate } from 'react-router-dom';

export default function Letter() {
  const navigate = useNavigate();

  return (
    <><CenteredA4Letter>
      <A4Letter>
        <Title> ❤ 지우가 지현이에게 ❤ </Title>
        <Line />
        <Content>ㅎㅎ .... 낯간지럽구만 안녕</Content>
        <Line />
        <Content>이 번에도 웹 편지야 전이랑 달라진 점은 이 번엔 리액트로 했어 !</Content>
        <Line />
        <Content>전에보다 더 이쁜거 같지 않아 ?? 왜냐면 시간을 더 썼거든~~</Content>
        <Line />
        <Content>원래는 좀 더 빨리 만들어져서 더 빨리 전달이 되어야 했던건데 좀 늦었네</Content>
        <Line />
        <Content>2023. 03. 24일자로 우리는 벌써 370일이네 시간이 너무너무 빠르다</Content>
        <Line />
        <Content>지금까지 한 번도 안싸우고 370일을 보낸게 난 너무너무 행복해</Content>
        <Line />
        <Content>정말 너 덕분에 슬프고 부정적인 감정 없이 지금까지 올 수 있던거 같아</Content>
        <Line />
        <Content>앞으로 우리가 헤쳐나가야 할 길이 높고 많고 그렇지만</Content>
        <Line />
        <Content>지금까지 해왔던대로 한다면 먼 미래에도 지금처럼 행복해 하고있을거야 !!</Content>
        <Line />
        <Content>그리고 올해에도 어김없이 다가오는 많은 이벤트들이 있을텐데 </Content>
        <Line />
        <Content>올해가 될지 내년이 될지 모르겠지만 난 일단 지금 당장엔 삿포로가 너무 기대되넹</Content>
        <Line />
        <Content>올해도 너무너무 잘 부탁하고 내년도 그리고 내후년에도 오래도록 잘 부탁해</Content>
        <Line />
        <Content>매 번 돌이켜보지만 우리가 서로 만나서 연애하고 있다는건 정말 행운같아</Content>
        <Line />
        <Content>지현아 많이 사랑하고 우리 지금처럼 정말 꾸준히 열심히 살아서 </Content>
        <Line />
        <Content>성공적인 미래를 함께 그려보자 ㅎㅎㅎ 그럼 안녕~~~~~~~ 알라뷰❤</Content>
        <Line />
      </A4Letter>
    </CenteredA4Letter>
    <MoveMainText
      animate={{}}
      transition={{ duration: 20 }}
      onClick={() => { navigate('/'); } }
    >
        {"<"}{"<"} main
      </MoveMainText></>
  );
}