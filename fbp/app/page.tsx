'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Home() {
  const mapScript = document.createElement('script');
  mapScript.async = true;
  mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.0e024f703bb83611ba6aedaa6209b282}&autoload=false&libraries=services,clusterer,drawing`;
  document.head.appendChild(mapScript);

  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        // 지도 생성
        const mapContainer = document.getElementById('map'), // 지도를 표시할 div
          mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        // 결과값을 마커로 표시
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: markerPosition,
        });

        // 지도의 중심을 결과값으로 받은 위치로 이동
        marker.setMap(map);
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);

    return () => mapScript.removeEventListener('load', onLoadKakaoMap);
  }, []);

  return (
    <div className='flex justify-center py-20 text-gray-500 bg-white'>
      <div className='w-full max-w-sm p-4'>
        <div className='flex flex-col w-full'>
          <h1 className='text-3xl font-bold pt-10 pb-4 border-b border-gray-600'>
            김은호 처음,생일
          </h1>
          <p className='mt-3 text-right'>2024년 1월 20일 토요일 오후 3시</p>
          <div className='py-6'>
            <Image
              src='/img/img_baby_1.jpg'
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
                src='/img/img_baby_1.jpg'
                alt='은호 사진'
                className=''
                width={3000}
                height={4000}
                priority
              />
              <Image
                src='/img/img_baby_1.jpg'
                alt='은호 사진'
                className=''
                width={3000}
                height={4000}
                priority
              />
              <Image
                src='/img/img_baby_1.jpg'
                alt='은호 사진'
                className=''
                width={3000}
                height={4000}
                priority
              />
              <Image
                src='/img/img_baby_1.jpg'
                alt='은호 사진'
                className=''
                width={3000}
                height={4000}
                priority
              />
              <Image
                src='/img/img_baby_1.jpg'
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
            <div className='flex '>
              <main className='absolute w-screen h-screen left-0 top-0'>
                <KakaoMap />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
