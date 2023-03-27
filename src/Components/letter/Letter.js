import { CenteredA4Letter, MoveMainText, Content, Title, Line, A4Letter } from './styled'
import { useNavigate } from 'react-router-dom';

export default function Letter() {
  const navigate = useNavigate();

  return (
    <><CenteredA4Letter>
      <A4Letter>
        <Title> ❤ 지우가 지현이에게 ❤ </Title>
        <Line />
        <Content>내용 삭제</Content>
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