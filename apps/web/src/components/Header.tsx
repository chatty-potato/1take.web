import { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  // TODO: 전역 상태로 로그인을 관리합니다. 로그인기능을 구현 후, 상태를 추가하면서 해당 부분을 고쳐주세요.
  const [isLogin, setLogin] = useState(false);

  return (
    <header className="m-0 p-2.5 pr-6 flex justify-between items-center h-12">
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          className="w-auto h-6"
        />
      </Link>
      {/* // TODO: 로그인 상태를 전역 상태로 관리하고, 로그인 상태에 따라 버튼을 렌더링하도록 합니다.*/}
      {!isLogin && (
        <button
          onClick={() => setLogin(true)}
          className="flex border-2 border-secondary rounded-full text-sm px-3.5 py-1 justify-between text-primary
          hover:border-primary"
        >
          <span className="flex-1">로그인</span>
          <span className="block mx-1 border-r-2 border-inherit self-center h-3" />
          <span className="">로그아웃</span>
        </button>
      )}
    </header>
  );
};

export default Header;
