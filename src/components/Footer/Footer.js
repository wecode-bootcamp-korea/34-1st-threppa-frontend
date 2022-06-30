import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <ul className="profile">
          <li className="user">
            <i class="fa-solid fa-user" />
            로그인
          </li>
          <li class="place">
            <i class="fa-solid fa-location-dot" />
            매장찾기
          </li>
          <li className="country">한국</li>
          <li className="socalnetwork">
            <div className="icon">
              <i class="fa-brands fa-youtube" />
              <i class="fa-brands fa-facebook" />
              <i class="fa-brands fa-instagram" />
            </div>
          </li>
        </ul>
      </div>
      <div className="footerBottom">
        <div className="information">
          <h4 className="benefit">
            크록스 혜택
            <ul>
              <li>크록스 클럽 추가 15% 할인 쿠폰</li>
              <li>콜라보레이션 / 리미티드 에디션</li>
              <li>세일 상품 최대 50% 할인</li>
            </ul>
          </h4>
          <h4 className="company">
            회사
            <ul>
              <li>회사 소개</li>
              <li>크록스의 새로운 탄생</li>
            </ul>
          </h4>
          <h4 className="customer">
            고객센터
            <ul>
              <li>자주 묻는 질문들</li>
              <li>주문조회</li>
              <li>출고 및 배송</li>
            </ul>
          </h4>
          <h4 className="customerTime">
            고객센터 운영 시간
            <ul>
              <li>월 - 금 오전10시 - 오후5시</li>
              <li>점심시간 오후12시 - 1시</li>
              <li>빠른 이메일 고객상담</li>
            </ul>
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
