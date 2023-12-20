import { Metadata } from 'next';
import { Nanum_Myeongjo } from 'next/font/google';
import './globals.css';

const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: '김은호 첫 생일',
  description: '김은호의 돌잔치에 초대합니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={nanumMyeongjo.className}>{children}</body>
    </html>
  );
}
