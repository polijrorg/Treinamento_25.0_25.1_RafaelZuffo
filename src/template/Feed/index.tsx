import '../../styles/GlobalStyle';
import Sidebar from '../../components/Sidebar';
import Trending from '../../components/Trending';
import Home from '../../components/page.tsx'

export const metadata = {
  title: 'PiuPiuwer',
  description: 'Rede social de pius',
};

export default function RootLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '1rem' }}><Home/></div>
      <Trending />
    </div>
  );
}
