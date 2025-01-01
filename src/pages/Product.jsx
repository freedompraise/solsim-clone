import ProductCard from "../components/Product/ProductCard";
import PlanSelector from "../components/Product/PlanSelector";
import DescriptionAccordion from "../components/Product/DescriptionAccordion";
import CartSidebar from "../components/Product/CartSidebar";
import { useState } from "react";
const ProductPage = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-32 mt-16 p-6 bg-gray-100">
      {/* Product Card */}
      <div className="flex-1">
        <ProductCard />
      </div>

      {/* Plan Selector and Details */}
      <div className="flex-1">
        <PlanSelector openCart={() => setCartOpen(true)} />
        <DescriptionAccordion />
      </div>

      {/* Cart Sidebar */}
      {cartOpen && <CartSidebar closeCart={() => setCartOpen(false)} />}
    </div>
  );
};

export default ProductPage;
