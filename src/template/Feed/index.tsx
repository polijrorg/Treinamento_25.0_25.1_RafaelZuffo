import Sidebar from '../../components/Sidebar/index';
import Trending from '../../components/Trending/index';
import Home from '../../components/Page/index';
import * as S from './styles';

export const metadata = {
  title: 'PiuPiuwer',
  description: 'Rede social de pius',
};

export default function RootLayout() {
  return (
    <S.Container>
      <Sidebar />
      <div style={{ flex: 1}}><Home/></div>
      <Trending />
    </S.Container>
  );
}
