import '../../styles/GlobalStyle';
import Sidebar from '../../components/Sidebar/index';
import Trending from '../../components/Trending/index';
import Home from '../../components/Page/index';

export const metadata = {
  title: 'PiuPiuwer',
  description: 'Rede social de pius',
};

export default function RootLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1}}><Home/></div>
      <Trending />
    </div>
  );
}
