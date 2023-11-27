import { Tab } from "@headlessui/react";

const CourseTabs = () => {
    return (
        <div>
            <Tab.List className="w-full flex gap-2 sm:gap-4 justify-center items-center flex-wrap">
                <Tab
                    className={({ selected }) => {
                        if (selected)
                            return "text-white text-lg font-semibold border-b border-white outline-none first-letter:uppercase py-2";

                        return "text-gray-400 text-lg font-semibold border-b border-transparent outline-none first-letter:uppercase py-2";
                    }}
                >
                    cài đặt
                </Tab>
                <Tab
                    className={({ selected }) => {
                        if (selected)
                            return "text-white text-lg font-semibold border-b border-white outline-none first-letter:uppercase py-2";

                        return "text-gray-400 text-lg font-semibold border-b border-transparent outline-none first-letter:uppercase py-2";
                    }}
                >
                    sử dụng
                </Tab>
                <Tab
                    className={({ selected }) => {
                        if (selected)
                            return "text-white text-lg font-semibold border-b border-white outline-none first-letter:uppercase py-2";

                        return "text-gray-400 text-lg font-semibold border-b border-transparent outline-none first-letter:uppercase py-2";
                    }}
                >
                    tính năng
                </Tab>
                <Tab
                    className={({ selected }) => {
                        if (selected)
                            return "text-white text-lg font-semibold border-b border-white outline-none first-letter:uppercase py-2";

                        return "text-gray-400 text-lg font-semibold border-b border-transparent outline-none first-letter:uppercase py-2";
                    }}
                >
                    đào tạo
                </Tab>
                <Tab
                    className={({ selected }) => {
                        if (selected)
                            return "text-white text-lg font-semibold border-b border-white outline-none first-letter:uppercase py-2";

                        return "text-gray-400 text-lg font-semibold border-b border-transparent outline-none first-letter:uppercase py-2";
                    }}
                >
                    chuỗi thanh toán
                </Tab>
                 <Tab
                    className={({ selected }) => {
                        if (selected)
                            return "text-white text-lg font-semibold border-b border-white outline-none first-letter:uppercase py-2";

                        return "text-gray-400 text-lg font-semibold border-b border-transparent outline-none first-letter:uppercase py-2";
                    }}
                >
                    chuỗi sự kiện
                </Tab>
            </Tab.List>
        </div>
    );
};

export default CourseTabs;
