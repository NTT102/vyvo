import { Tab, Disclosure } from "@headlessui/react";
import { CourseTabs } from "../../components";
import { IoIosArrowDown } from "react-icons/io";

const Guide = () => (
    <section className="bg-slate-800 text-white px-4 py-8">
        <div className="max-w-[60rem] min-h-[60vh] mx-auto">
            <h2 className="text-xl text-center first-letter:uppercase font-bold mb-4">
                hướng dẫn
            </h2>
            <Tab.Group>
                {/* Tab header list */}
                <CourseTabs />
                {/* Tab content */}
                <Tab.Panels className="py-6">
                    {/* Tab panel 1 */}
                    <Tab.Panel className="grid gap-2">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn tạo tài khoản
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/GJmDFht1rEU?si=EhjdgLwbnGNFzHBA"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn lấy địa chỉ ví
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://youtube.com/embed/pcYUADDbbyM?si=SGWGEu-ZDayzg803"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn chuyển tiền từ ví đến chi
                                            tiêu
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://youtube.com/embed/z4FGRIaEqgI?si=vj6TeB062Iuy7m1R"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn mua gói basic 271$
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/e-HGF2W8YPk?si=2WJP3wdKT2MLtI7O"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn mua gói poolkit 1250$
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/2DY5ZLt7qA8?si=bzA3DVHdGV643gF9"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn mua mã kinh doanh
                                            (hubconsole)
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://youtube.com/embed/p5MHK3rl6vc?si=rCnNsoXAWoSa8DlB"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn thay đổi thông tin cá nhân
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/rykAth43w-8?si=AgvZ4WwgFVY5cjvo"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn lấy mã giới thiệu
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://youtube.com/embed/Vz7XGSQSqhY?si=EJ42WIki9oH7tvLz"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn lấy mã seed voucher
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://youtube.com/embed/cbiF0gge2AU?si=UVbM_qsmEwoZ53ij"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn cách sử dụng seed voucher
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/bVfXCtuGM9A?si=R-w0FOYMXJU6b8BL"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </Tab.Panel>
                    {/* Tab panel 2 */}
                    <Tab.Panel className="grid gap-2">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn kết nối thiết bị helosmart
                                            + inpersona
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/pxIdBTygLJI?si=juFANs-Nuna3VuUV"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn hiệu chỉnh huyết áp
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/bVfXCtuGM9A?si=R-w0FOYMXJU6b8BL"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn đo các chỉ số bằng đồng hồ
                                            (Life Watch gen 2)
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/2DY5ZLt7qA8?si=bzA3DVHdGV643gF9"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn đo các chỉ số bằng vòng
                                            tay (Biosense Band)
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://youtube.com/embed/p5MHK3rl6vc?si=rCnNsoXAWoSa8DlB"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn kích hoạt 4 chỉ số chuyên
                                            sâu
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/1zaDC46RxbQ?si=IFyWuWINT00_tBoq"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn khởi động lại vòng tay
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/1FSXTsNoy14?si=MEd1dLFAzQAtjpu5"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </Tab.Panel>
                    {/* Tab panel 3 */}
                    <Tab.Panel className="grid gap-2">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn sử dụng đồng hồ Helo Watch
                                            và vòng đeo tay Biosens từ A - Z
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/TJj2kmzC8jo?si=70afyzX47ukAOl0t"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn cách đọc và phân tích chỉ
                                            số sức khoẻ trên HELO SMART
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/aK4BN5HY5HM?si=KU08aSJRlNhvmQmi"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Hướng dẫn KYC odee Full
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/PxknxtRE7Bk?si=IJJe3-_zmS85izlO"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Hướng dẫn kích hoạt band hoặc thẻ
                                            vào OdeePay và VyvoPay
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/_mWhf9FkCUI?si=vsrUXm7skoD-9mUi"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </Tab.Panel>
                    {/* Tab panel 4 */}
                    <Tab.Panel className="grid gap-2">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Đào tạo chuyên sâu về dự án
                                            Inpersona Cofounder VGroup
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/al7duH-REDo?si=ZI-vg77Xn-3IYquH"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            đào tạo chuyên sâu sản phẩm Helo Big
                                            Leader Lan Violet
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/PG7w8aQvG8M?si=xvU_IW3v49H6w_0W"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            đào tạo đặc biệt
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/_uOAq8_cTHM?si=MDRsi-yGpdxbx0UN"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </Tab.Panel>
                    {/* Tab panel 5 */}
                    <Tab.Panel className="grid gap-2">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            tổng hợp video Thanh toán - Rút tiền
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/videoseries?si=286bLXzoLFjHD5_d&amp;list=PLsI7x29OMpKdiXaq91Pto-wrD8991QzvE"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    </section>
);

export default Guide;
