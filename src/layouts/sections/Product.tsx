import Product1 from "../../assets/products/biotrip.png";
import Product2 from "../../assets/products/dong ho 1.1.png";
import Product3 from "../../assets/products/dong ho 2.1.png";
import Product4 from "../../assets/products/vong tay.png";

const Product = () => {
    return (
        <section className="bg-slate-800 text-white px-4 py-8">
            <div className="max-w-[60rem] mx-auto">
                <h2 className="text-xl text-center first-letter:uppercase font-bold mb-8">
                    sản phẩm
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                    <div>
                        <div className="bg-white aspect-square overflow-hidden rounded-3xl">
                            <img
                                className="w-full h-full object-cover"
                                src={Product1}
                                alt="product"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="bg-white aspect-square overflow-hidden rounded-3xl">
                            <img
                                className="w-full h-full object-cover"
                                src={Product2}
                                alt="product"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="bg-white aspect-square overflow-hidden rounded-3xl">
                            <img
                                className="w-full h-full object-cover"
                                src={Product3}
                                alt="product"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="bg-white aspect-square overflow-hidden rounded-3xl">
                            <img
                                className="w-full h-full object-cover"
                                src={Product4}
                                alt="product"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
