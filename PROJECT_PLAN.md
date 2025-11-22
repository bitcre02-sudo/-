# 🚀 암호화폐/주식 추적 대시보드 프로젝트

## 📋 프로젝트 개요
실시간 암호화폐 및 주식 가격을 추적하고 시각화하는 웹 대시보드

## ✨ 주요 기능

### 1단계: 핵심 기능
- **실시간 가격 추적**
  - 비트코인, 이더리움, 리플 등 주요 암호화폐
  - AAPL, GOOGL, TSLA 등 인기 주식
  - 자동 새로고침 (10초마다)

- **깔끔한 대시보드 UI**
  - 다크모드/라이트모드 테마
  - 반응형 디자인 (모바일 지원)
  - 실시간 가격 변동 표시 (빨강/초록 애니메이션)

- **가격 차트**
  - 24시간 가격 추이 그래프
  - 인터랙티브 차트 (줌, 호버 정보)

### 2단계: 고급 기능
- **포트폴리오 관리**
  - 보유 자산 추가/삭제
  - 총 자산 가치 계산
  - 손익 계산 (수익률 %)

- **가격 알림**
  - 목표가 설정
  - 브라우저 알림

- **즐겨찾기**
  - 관심 종목 저장
  - 커스텀 대시보드 레이아웃

### 3단계: 프리미엄 기능
- **뉴스 피드**
  - 각 종목 관련 최신 뉴스
  - 시장 동향 뉴스

- **기술적 지표**
  - RSI, MACD, 이동평균선
  - 매수/매도 시그널

- **비교 차트**
  - 여러 종목 동시 비교
  - 상관관계 분석

## 🛠 기술 스택

### Frontend
- **React** + **TypeScript** - 현대적인 UI 개발
- **Tailwind CSS** - 빠르고 깔끔한 스타일링
- **Chart.js** / **Recharts** - 아름다운 차트
- **Framer Motion** - 부드러운 애니메이션

### Backend
- **Node.js** + **Express** - API 서버
- **WebSocket** - 실시간 데이터 전송

### APIs
- **CoinGecko API** - 암호화폐 데이터 (무료!)
- **Alpha Vantage** / **Yahoo Finance API** - 주식 데이터
- **NewsAPI** - 뉴스 데이터 (선택사항)

### 배포
- **Vercel** / **Netlify** - Frontend 호스팅 (무료)
- **Railway** / **Render** - Backend 호스팅 (무료 티어)

## 📁 프로젝트 구조
```
crypto-stock-dashboard/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── PriceCard.tsx
│   │   │   ├── Chart.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   └── Navbar.tsx
│   │   ├── hooks/
│   │   │   ├── usePriceData.ts
│   │   │   └── useWebSocket.ts
│   │   ├── utils/
│   │   │   └── api.ts
│   │   ├── styles/
│   │   └── App.tsx
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── crypto.ts
│   │   │   └── stocks.ts
│   │   ├── services/
│   │   │   ├── coinGecko.ts
│   │   │   └── alphaVantage.ts
│   │   ├── websocket/
│   │   │   └── priceUpdates.ts
│   │   └── server.ts
│   └── package.json
│
├── README.md
└── .gitignore
```

## 🎨 디자인 컨셉

### 색상 테마
- **다크모드**:
  - 배경: `#0f172a` (slate-900)
  - 카드: `#1e293b` (slate-800)
  - 강조: `#3b82f6` (blue-500)
  - 상승: `#10b981` (green-500)
  - 하락: `#ef4444` (red-500)

- **라이트모드**:
  - 배경: `#f8fafc` (slate-50)
  - 카드: `#ffffff`
  - 강조: `#2563eb` (blue-600)

### UI 요소
- 유리형태 효과 (Glassmorphism)
- 그라데이션 배경
- 부드러운 그림자
- 마이크로 애니메이션

## 📅 개발 단계

### Phase 1: 기본 설정 (30분)
- [ ] 프로젝트 초기 설정
- [ ] React + TypeScript + Tailwind 설치
- [ ] 기본 폴더 구조 생성
- [ ] Git 초기화 및 커밋

### Phase 2: API 연동 (1시간)
- [ ] CoinGecko API 연동
- [ ] 주식 API 연동
- [ ] API 유틸리티 함수 작성
- [ ] 데이터 페칭 훅 구현

### Phase 3: UI 개발 (1.5시간)
- [ ] 대시보드 레이아웃
- [ ] 가격 카드 컴포넌트
- [ ] 차트 컴포넌트
- [ ] 반응형 디자인
- [ ] 다크모드 토글

### Phase 4: 실시간 기능 (1시간)
- [ ] WebSocket 설정
- [ ] 실시간 가격 업데이트
- [ ] 가격 변동 애니메이션

### Phase 5: 추가 기능 (선택)
- [ ] 포트폴리오 관리
- [ ] 즐겨찾기 기능
- [ ] 가격 알림
- [ ] 뉴스 피드

### Phase 6: 배포 (30분)
- [ ] 프로덕션 빌드
- [ ] Vercel/Netlify 배포
- [ ] 환경 변수 설정
- [ ] 최종 테스트

## 🎯 MVP (Minimum Viable Product)
가장 먼저 만들 최소 기능:
1. ✅ 깔끔한 대시보드 UI (다크모드)
2. ✅ 5-10개 주요 암호화폐 실시간 가격
3. ✅ 5개 인기 주식 가격
4. ✅ 24시간 가격 차트
5. ✅ 자동 새로고침
6. ✅ 반응형 디자인

## 💡 추가 아이디어
- 📱 PWA (Progressive Web App) - 앱처럼 설치 가능
- 🌍 다국어 지원 (한국어/영어)
- 💾 로컬 스토리지로 설정 저장
- 🔔 텔레그램 봇 연동
- 📊 Excel/CSV 내보내기
- 🎮 게임화 요소 (예측 게임, 리더보드)

## 🚀 시작하기
준비되셨나요? "시작!" 이라고 말씀해주시면 바로 개발 들어갑니다! 💪

---

**예상 개발 시간**: 3-4시간 (MVP 기준)
**난이도**: ⭐⭐⭐☆☆ (중급)
**재미도**: ⭐⭐⭐⭐⭐ (완전 재밌음!)
