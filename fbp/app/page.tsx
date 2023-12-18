export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-purple-300 to-pink-300'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white p-6'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold mb-2'>
            우리 아이의 첫번째 생일파티에 초대합니다!
          </h1>
          <img
            className='w-32 h-32 rounded-full mx-auto mb-4'
            src='/baby-photo.jpg'
            alt="Baby's Photo"
          />
          <p className='text-lg mb-1'>
            아기 이름: <strong>김아기</strong>
          </p>
          <p className='text-lg mb-1'>
            생일: <strong>2024년 1월 1일</strong>
          </p>
          <p className='text-lg mb-1'>
            시간: <strong>오후 2시</strong>
          </p>
          <p className='text-lg mb-1'>
            장소: <strong>서울시 강남구 예쁜홀</strong>
          </p>
          <p className='text-md text-gray-700 mt-4'>
            귀하의 방문을 기다립니다!
          </p>
        </div>
      </div>
    </div>
  );
}
