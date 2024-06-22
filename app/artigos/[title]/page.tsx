'use client';

import TitleDetail from "@/components/artigos/dashboard/titleDetail";

let data = {
  mark:'https://img.imageboss.me/me/cdn/quality:50/20240619170345659.jpg',
  detail:"Se tem música, a criançada já anima! E a musicalização infantil é um tipo de abordagem na educação que pode atrair ainda mais...",
}

const Home = (title:any) => {
  const titleName = decodeURIComponent(title.params.title) 
  
  return (
    <main className="flex min-h-screen flex-col">
      <TitleDetail title = {titleName} mark={data.mark} detail={data.detail} />
    </main>
  );
}

export default Home;