const Hero = () => {
    return (
        <section className="w-full h-[42.75rem] bg-[url('/assets/hero.gif')] bg-cover bg-no-repeat">
            <div className="w-full h-full flex items-center bg-slate-800 opacity-80">
                <div className="max-w-[60rem] mx-auto p-4 grid gap-8">
                    <h2 className="uppercase text-5xl text-yellow-300 font-bold">
                        vyvo smart chain
                    </h2>
                    <p className="text-white font-medium first-letter:uppercase">
                        được thiết kế để cung cấp cho người dùng quyền truy cập
                        vào phần thưởng từ dữ liệu họ tạo ra thông qua việc sử
                        dụng thiết bị đeo
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
