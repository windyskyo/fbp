'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMessage } from '@fortawesome/free-solid-svg-icons';

type AccountInfo = {
  id: string;
  type: string;
  name: string;
  bank: string;
  accountNumber: string;
  kakaoLink: string;
};

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(
    null
  );

  const accountInfo: AccountInfo[] = [
    {
      id: 'groom',
      type: '아빠',
      name: '김준수',
      bank: '신한은행',
      accountNumber: '110-273-080466',
      kakaoLink: 'https://qr.kakaopay.com/Ej8lrfjTF',
    },
    {
      id: 'bride',
      type: '엄마',
      name: '한나림',
      bank: '국민은행',
      accountNumber: '718201-01-268433',
      kakaoLink: 'https://qr.kakaopay.com/Ej8jburr3',
    },
  ];

  const openPopup = (accountId: string) => {
    setSelectedAccountId(accountId);
    setIsPopupOpen(true);
  };

  const getAccountDetails = (): AccountInfo | undefined => {
    return accountInfo.find((info) => info.id === selectedAccountId);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('계좌번호가 복사되었습니다.');
      })
      .catch((err) => {
        console.error('복사 실패: ', err);
      });
  };

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };
  return (
    <div className='flex justify-center py-20 text-gray-500 bg-white'>
      <div className='w-full max-w-sm p-4'>
        <div className='flex flex-col w-full'>
          <h1 className='text-3xl font-bold pt-10 pb-4 border-b border-gray-400'>
            김은호 처음,생일
          </h1>
          <p className='mt-3 text-right'>2024년 1월 20일 토요일 오후 3시</p>
          <div className='py-6'>
            <Image
              src='/img/img_baby_main.jpg'
              alt='은호 사진'
              className=''
              width={3000}
              height={4000}
              priority
            />
          </div>
          <p className='mb-2 text-sm'>더블유페스타</p>
          <p className='mb-2 text-sm'>
            경기 고양시 일산서구 일현로 97-11 1동 B299호, B499호
          </p>
          <p className='mb-2 text-sm'>탄현역 2번 출구에서 162m</p>
          <div className='flex justify-center py-20'>
            <Image
              src='/img/img_deco_1.png'
              alt=''
              className='w-12'
              width={428}
              height={677}
              priority
            />
          </div>
          <div className='text-center px-6  leading-8'>
            <h3 className='pb-12'>INVITATION</h3>
            <p className='mb-6'>
              하나의 작은 점으로 시작하여 열 달을 품고 작고 여려품에 보듬기도
              조심스러웠던 이 작은 아이로부터 엄마, 아빠로서의 삻을 배웁니다.
            </p>
            <p className='mb-6'>
              어느날 천사처럼 나타난 우리 아이가 어느덧 일 년이되어 감사하는
              마음으로 조촐한 자리를 마련하였습니다.
            </p>
            <p className='mb-6'>
              바쁘시더라도 사랑하는 우리 아이가 건강하게 자라도록 참석하여
              축복해주시면 큰 기쁨이 되겠습니다.
            </p>

            <div className='flex flex-row justify-center space-x-6'>
              <p>아빠 김준수</p>
              <p>엄마 한나림</p>
            </div>
          </div>
          <div className='flex justify-center py-20'>
            <Image
              src='/img/img_deco_1.png'
              alt=''
              className='w-12'
              width={428}
              height={677}
              priority
            />
          </div>
          <div className='text-center leading-8'>
            <h3 className='pb-12'>GALLERY</h3>
            <div className='space-y-4'>
              <Image
                src='/img/img_baby_2.jpg'
                alt='은호 사진'
                className=''
                width={3000}
                height={4000}
                priority
              />
              <Image
                src='/img/img_baby_3.jpg'
                alt='은호 사진'
                className=''
                width={3000}
                height={4000}
                priority
              />
              <Image
                src='/img/img_baby_4.jpg'
                alt='은호 사진'
                className=''
                width={3000}
                height={4000}
                priority
              />
              <Image
                src='/img/img_baby_5.jpg'
                alt='은호 사진'
                className=''
                width={3000}
                height={4000}
                priority
              />
              <Image
                src='/img/img_baby_6.jpg'
                alt='은호 사진'
                className=''
                width={3000}
                height={4000}
                priority
              />
            </div>
          </div>
          <div className='flex justify-center py-20'>
            <Image
              src='/img/img_deco_1.png'
              alt=''
              className='w-12'
              width={428}
              height={677}
              priority
            />
          </div>
          <div className='text-center leading-8'>
            <h3 className='pb-12'>LOCATION</h3>
            <div
              style={{
                fontFamily: 'normal normal 400 12px/normal dotum, sans-serif',
                width: '360px',
                height: '512px',
                color: '#333',
                position: 'relative',
              }}
            >
              <div style={{ height: '480px' }}>
                <a
                  href='https://map.kakao.com/?urlX=447716.0&urlY=1165222.0&itemId=1491938807&q=더블유페스타 일산점&srcid=1491938807&map_type=TYPE_MAP&from=roughmap'
                  target='_blank'
                >
                  <img
                    className='map'
                    src='http://t1.daumcdn.net/roughmap/imgmap/847a8590e48e31ccf33f929c7eafd937dd4497b6a5b1d9cc07a947a1f59d1825'
                    width='358px'
                    height='478px'
                    style={{ border: '1px solid #ccc' }}
                    alt='Map'
                  />
                </a>
              </div>
              <div
                style={{
                  overflow: 'hidden',
                  padding: '7px 11px',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '0px 0px 2px 2px',
                  backgroundColor: 'rgb(249, 249, 249)',
                }}
              >
                <a
                  href='https://map.kakao.com'
                  target='_blank'
                  style={{ float: 'left' }}
                >
                  <img
                    src='//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png'
                    width='72'
                    height='16'
                    alt='카카오맵'
                    style={{ display: 'block', width: '72px', height: '16px' }}
                  />
                </a>
                <div
                  style={{
                    float: 'right',
                    position: 'relative',
                    top: '1px',
                    fontSize: '11px',
                  }}
                >
                  <a
                    target='_blank'
                    href='https://map.kakao.com/?from=roughmap&srcid=1491938807&confirmid=1491938807&q=더블유페스타 일산점&rv=on'
                    style={{
                      float: 'left',
                      height: '15px',
                      paddingTop: '1px',
                      lineHeight: '15px',
                      color: '#000',
                      textDecoration: 'none',
                    }}
                  >
                    로드뷰
                  </a>
                  <span
                    style={{
                      width: '1px',
                      padding: '0',
                      margin: '0 8px 0 9px',
                      height: '11px',
                      verticalAlign: 'top',
                      position: 'relative',
                      top: '2px',
                      borderLeft: '1px solid #d0d0d0',
                      float: 'left',
                    }}
                  ></span>
                  <a
                    target='_blank'
                    href='https://map.kakao.com/?from=roughmap&eName=더블유페스타 일산점&eX=447716.0&eY=1165222.0'
                    style={{
                      float: 'left',
                      height: '15px',
                      paddingTop: '1px',
                      lineHeight: '15px',
                      color: '#000',
                      textDecoration: 'none',
                    }}
                  >
                    길찾기
                  </a>
                  <span
                    style={{
                      width: '1px',
                      padding: '0',
                      margin: '0 8px 0 9px',
                      height: '11px',
                      verticalAlign: 'top',
                      position: 'relative',
                      top: '2px',
                      borderLeft: '1px solid #d0d0d0',
                      float: 'left',
                    }}
                  ></span>
                  <a
                    target='_blank'
                    href='https://map.kakao.com?map_type=TYPE_MAP&from=roughmap&srcid=1491938807&itemId=1491938807&q=더블유페스타 일산점&urlX=447716.0&urlY=1165222.0'
                    style={{
                      float: 'left',
                      height: '15px',
                      paddingTop: '1px',
                      lineHeight: '15px',
                      color: '#000',
                      textDecoration: 'none',
                    }}
                  >
                    지도 크게 보기
                  </a>
                </div>
              </div>
            </div>
            <div className='flex justify-center py-20'>
              <Image
                src='/img/img_deco_1.png'
                alt=''
                className='w-12'
                width={428}
                height={677}
                priority
              />
            </div>
            <div className='text-center px-6  leading-8'>
              <h3 className='pb-12'>마음 전하는 곳</h3>
              <p className='mb-6'>축하의 의미로 축의금을 전달해보세요</p>
              <div className='flex flex-col space-y-3'>
                {accountInfo.map((info) => (
                  <button
                    key={info.id}
                    onClick={() => openPopup(info.id)}
                    className='p-2 border rounded-xl'
                  >
                    {info.type} 계좌번호
                  </button>
                ))}
              </div>
            </div>

            <div className='text-center px-6  leading-8 mt-10'>
              <div className='flex flex-row'>
                <div className='w-1/2'>
                  <p>아빠 연락처</p>
                  <div className='mt-2 flex flex-row justify-center space-x-2'>
                    <a
                      href='tel:01058862980'
                      className='p-2 px-4 border rounded-xl'
                    >
                      <FontAwesomeIcon icon={faPhone} />
                    </a>
                    <a
                      href='sms:01058862980'
                      className='p-2 px-4 border rounded-xl'
                    >
                      <FontAwesomeIcon icon={faMessage} />
                    </a>
                  </div>
                </div>
                <div className='w-1/2'>
                  <p>엄마 연락처</p>
                  <div className='mt-2 flex flex-row justify-center  space-x-2'>
                    <a
                      href='tel:01066281994'
                      className='p-2 px-4 border rounded-xl'
                    >
                      <FontAwesomeIcon icon={faPhone} />
                    </a>
                    <a
                      href='sms:01066281994'
                      className='p-2 px-4 border rounded-xl'
                    >
                      <FontAwesomeIcon icon={faMessage} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Popup */}
      {isPopupOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
          <div className='bg-white p-5 rounded-lg'>
            {getAccountDetails() ? (
              <div>
                <h3 className='text-base font-bold mb-4'>
                  {getAccountDetails()?.type} 계좌번호
                </h3>
                <p>{getAccountDetails()?.name}</p>
                <p>
                  {getAccountDetails()?.bank}{' '}
                  {getAccountDetails()?.accountNumber}
                </p>
                <div className='w-full'>
                  <button
                    onClick={() =>
                      copyToClipboard(getAccountDetails()?.accountNumber ?? '')
                    }
                    className='w-full mt-3 border px-4 py-1 rounded-lg bg-gray-100'
                  >
                    계좌번호 복사하기
                  </button>
                  <button
                    onClick={() =>
                      openLink(getAccountDetails()?.kakaoLink ?? '')
                    }
                    className='w-full mt-3 border px-4 py-1 rounded-lg bg-gray-100 text-black'
                    style={{ backgroundColor: '#fae100' }}
                  >
                    카카오페이로 보내기
                  </button>
                </div>
              </div>
            ) : (
              <p>계좌 정보를 찾을 수 없습니다.</p>
            )}
            <div className='flex justify-center mt-6'>
              <button
                onClick={() => setIsPopupOpen(false)}
                className='text-red-500 border px-10 py-1 rounded-lg border-red-200'
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
