import Product1 from "../../assets/products/1.jpg";
import Product2 from "../../assets/products/2.jpg";
import Product3 from "../../assets/products/3.jpg";
import Product4 from "../../assets/products/4.jpg";
import Product5 from "../../assets/products/5.jpg";
import Product6 from "../../assets/products/6.jpg";
import Product7 from "../../assets/products/7.jpg";

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
                    <div>
                        <div className="bg-white aspect-square overflow-hidden rounded-3xl">
                            <img
                                className="w-full h-full object-cover"
                                src={Product5}
                                alt="product"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="bg-white aspect-square overflow-hidden rounded-3xl">
                            <img
                                className="w-full h-full object-cover"
                                src={Product6}
                                alt="product"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="bg-white aspect-square overflow-hidden rounded-3xl">
                            <img
                                className="w-full h-full object-cover"
                                src={Product7}
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
