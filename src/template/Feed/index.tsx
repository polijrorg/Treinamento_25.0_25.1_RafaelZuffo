import '@/styles/GlobalStyle';
import Sidebar from '../../components/Sidebar';
import Trending from '../../components/Trending';

export const metadata = {
  title: 'PiuPiuwer',
  description: 'Rede social de pius',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <main style={{ flex: 1, padding: '1rem' }}>{children}</main>
          <Trending />
        </div>
      </body>
    </html>
  );
}
