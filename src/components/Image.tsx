interface Iprops {
  url?: string;
  className?:string
  alt?: string;
}
export default function Image({ url,className, alt }: Iprops) {
  return <img src={url} alt={alt} className={className} />;
}
