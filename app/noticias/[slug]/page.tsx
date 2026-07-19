import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import ShareButtons from "@/components/ShareButtons";

type Props={params:Promise<{slug:string}>};

export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug}=await params;
 const {data:news}=await supabase.from("news").select("title,summary,image_url,slug").eq("slug",slug).single();
 if(!news){return {title:"Noticia no encontrada | SUR20 Radio"};}
 const url=`https://sur20radio.com/noticias/${news.slug}`;
 const img=news.image_url||"https://sur20radio.com/og-image.png";
 const desc=(news.summary||"").replace(/<[^>]*>/g," ").trim().slice(0,160);
 return{
  title:`${news.title} | SUR20 Radio`,
  description:desc,
  alternates:{canonical:url},
  openGraph:{title:news.title,description:desc,url,siteName:"SUR20 Radio",type:"article",images:[{url:img}]},
  twitter:{card:"summary_large_image",title:news.title,description:desc,images:[img]}
 };
}

export default async function NoticiaPage({ params }: Props) {
  const { slug } = await params;
  const { data: news, error } = await supabase.from("news").select("*").eq("slug", slug).single();
  if (error || !news) return <main className="min-h-screen bg-black text-white p-10"><h1>Noticia no encontrada</h1><Link href="/noticias">← Volver a Noticias</Link></main>;
  const { data: related } = await supabase.from("news").select("id,title,slug,created_at").eq("status","published").neq("id",news.id).order("created_at",{ascending:false}).limit(3);
  const articleUrl=`https://sur20radio.com/noticias/${news.slug}`;
  const image=news.image_url||"https://sur20radio.com/og-image.png";
  const jsonLd={"@context":"https://schema.org","@type":"NewsArticle",headline:news.title,image:[image],datePublished:news.created_at,dateModified:news.updated_at||news.created_at,mainEntityOfPage:articleUrl,author:{ "@type":"Organization",name:"SUR20 Radio"},publisher:{"@type":"Organization",name:"SUR20 Radio"}};
  return (<main className="min-h-screen bg-black text-white"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><article className="mx-auto max-w-5xl px-8 py-20">{news.image_url&&<Image src={news.image_url} alt={news.title} width={1200} height={700} className="mb-10 rounded-3xl object-cover" priority/>}<p className="text-gray-400">{new Date(news.created_at).toLocaleDateString("es-ES")}</p><h1 className="mt-4 text-5xl font-black text-yellow-400">{news.title}</h1>{news.summary&&<div className="prose prose-invert mt-8 max-w-none text-2xl text-gray-300">{parse(news.summary)}</div>}<div className="prose prose-invert mt-10 max-w-none text-lg leading-8">{parse(news.content||"")}</div><ShareButtons title={news.title} url={articleUrl}/><Link href="/noticias" className="mt-12 inline-block text-yellow-400 hover:underline">← Volver a Noticias</Link>{related&&related.length>0&&<section className="mt-20 border-t border-zinc-800 pt-10"><h2 className="mb-8 text-3xl font-bold text-yellow-400">También te puede interesar</h2><div className="grid gap-6 md:grid-cols-3">{related.map((item:any)=><Link key={item.id} href={`/noticias/${item.slug}`} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"><p className="mb-3 text-sm text-gray-400">{new Date(item.created_at).toLocaleDateString("es-ES")}</p><h3 className="font-bold text-white">{item.title}</h3></Link>)}</div></section>}</article></main>);
}
