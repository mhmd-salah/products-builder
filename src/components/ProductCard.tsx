
export default function ProductCard() {
  return (
    <div className="border rounded-md p-2 flex flex-col">
      <img src="https://placehold.co/400" alt="product img" />
      <h3>2020 Geneisi Gv70:Nomine...</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, deserunt? Veritatis tenetur quis eos?</p>
      <span className="w-5 h-5 bg-indigo-600 rounded-full"/>
      <span className="w-5 h-5 bg-teal-600 rounded-full"/>
      <span className="w-5 h-5 bg-orange-600 rounded-full"/>
      <span className="w-5 h-5 bg-sky-500 rounded-full"/>
    </div>
  );
}
