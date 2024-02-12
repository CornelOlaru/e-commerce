import getProductsForCategory from "../productListCategory";
import { useParams } from "react-router-dom";
import Card from "./Card";

const Category = () => {
  const { categoryId } = useParams();
  const category = getProductsForCategory(categoryId);
  console.log(category);
  return (
    <div className="grid">
      {category.map((item) => (
        <Card
          id={item.id}
          category={item.category}
          name={item.name}
          shortDescription={item.shortDescription}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Category;
