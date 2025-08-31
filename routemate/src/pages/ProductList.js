import { useSearchParams } from "react-router-dom";

export const ProductList = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <main>
      <div className="component">ProductList</div>
      
      {category && <div>Filtering by category: {category}</div>}
    </main>
  )
}
