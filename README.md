# Sweet Dreams

Hackerthon Project (with [bolt.new](https://bolt.new))
디저트 사진을 3D 에셋으로 변환하고, 다양한 모델을 공유할 수 있는 커뮤니티 서비스입니다.

## About
Sweet Dreams는 사용자가 촬영한 디저트 사진을 빠르게 3D 모델로 변환하고, 
이를 커뮤니티에서 공유하거나 컬렉션으로 모아둘 수 있는 플랫폼입니다.
본 프로젝트는 [bolt.new Awards Hackathon](https://bolt.new/awards) 참가작으로 제작되었습니다.

## Features
- 사진 업로드: 디저트 이미지를 업로드하고 3D 변환 실행
- 자동 3D 생성: `three.js`, `react-three/fiber` 기반 실시간 뷰어 제공
- 모델 탐색/갤러리: `Explore`, `Collections` 페이지에서 다양한 모델 탐색
- 커뮤니티 기능: 좋아요, 공유, 태그를 통한 참여
- 개발 모델 상세 페이지: `model/:id` 경로로 조회 가능

## Tech Stack
- Frontend: React (TypeScript) + Vite
- 3D Rendering: Three.js @react-three/fiber, @react-three/drei
- UI & Motion: Tailwind CSS, Framer Motion, Lucide React
- Routing: React Router DOM
- Infra: bolt.new, Docker (Optional)

## Quick Start
```bash
# 클론
git clone https://github.com/sungmin-woo-devops/sweet_dream.git
cd sweet_dream

# 환경변수 설정 (예: .env)
cp .env.example .env

# 설치 및 실행
npm install
npm run dev
```

## Project Structure
```bash
src/
 ├── components/    # 재사용 가능한 UI 컴포넌트
 ├── pages/         # 주요 페이지 (Home, Explore, Generate, About, Contact, etc.)
 ├── utils/         # 유틸리티 함수
 ├── data/          # 샘플 데이터
 ├── App.tsx        # 라우팅 설정
 └── main.tsx       # 앱 엔트리 포인트
```

## Vision
- 디저트 크리에이터/팬덤 커뮤니티를 위한 3D 허브
- AR/VR, 게임, 메타버스에서 활용 가능한 디저트 3D 에셋 제공
- 향후 디지털 디저트 아카이브로 확장

## Hackathon
이 프로젝트는 bolt.new Awards Hackathon
