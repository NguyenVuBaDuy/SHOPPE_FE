import { Avatar, Badge, Divider, Dropdown, Input, MenuProps, Space } from "antd"
import iconHandSecure from './assets/images/icon-hand-secure.png'
import logo from './assets/images/logo.png'
import { DollarOutlined, DownOutlined, LogoutOutlined, MenuOutlined, ProfileOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons"
import "./assets/styles/header.css"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { IoShirtOutline } from "react-icons/io5"
import { PiDress } from "react-icons/pi"
import { MdFaceRetouchingNatural, MdOutlineDevices } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { BiHomeAlt2 } from "react-icons/bi"


const Header = () => {

    const navigate = useNavigate()

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div
                    className="cursor-pointer w-full"
                    onClick={() => navigate("/user/profile")}
                >
                    <ProfileOutlined style={{ marginRight: "8px" }} />
                    Profile
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div
                    className="cursor-pointer w-full"
                    onClick={() => navigate("/user/purchase")}
                >
                    <DollarOutlined style={{ marginRight: "8px" }} />
                    Order History
                </div>
            ),
        },
        {
            type: "divider",
        },
        {
            key: '3',
            label: (
                <div className="text-[red] cursor-pointer w-[full]">
                    <LogoutOutlined style={{ marginRight: "8px" }} />
                    Logout
                </div>
            ),
        },
    ];

    const categoryItems = {
        menFashion: [
            {
                key: '1',
                label: (
                    <div>Jacket</div>
                ),
            },
            {
                key: '2',
                label: (
                    <div>Jeans</div>
                ),
            },
            {
                key: '3',
                label: (
                    <div>Shorts</div>
                ),
            },
            {
                key: '4',
                label: (
                    <div>Shirt</div>
                ),
            },
        ],
        womenFashion: [
            {
                key: '1',
                label: (
                    <div>Jacket</div>
                ),
            },
            {
                key: '2',
                label: (
                    <div>Jeans</div>
                ),
            },
            {
                key: '3',
                label: (
                    <div>Shorts</div>
                ),
            },
            {
                key: '4',
                label: (
                    <div>Dress</div>
                ),
            },
        ],
        electronicDevices: [
            {
                key: '1',
                label: (
                    <div>Television</div>
                ),
            },
            {
                key: '2',
                label: (
                    <div>In-ear Headphones</div>
                ),
            },
            {
                key: '3',
                label: (
                    <div>Game Console</div>
                ),
            },
        ],
        beauty: [
            {
                key: '1',
                label: (
                    <div>Skincare</div>
                ),
            },
            {
                key: '2',
                label: (
                    <div>Make Up</div>
                ),
            },
            {
                key: '3',
                label: (
                    <div>Hair Care</div>
                ),
            },
        ],
    }

    const allCategories: MenuProps['items'] = [
        {
            key: 'menFashion',
            label: "Men's Fashion",
            children: categoryItems?.menFashion
        },
        {
            key: 'womenFashion',
            label: "Women's Fashion",
            children: categoryItems.womenFashion
        },
        {
            key: 'electronicDevices',
            label: "Electronic Devices",
            children: categoryItems.electronicDevices
        },
        {
            key: 'beauty',
            label: "Beauty",
            children: categoryItems.beauty
        },
    ]

    return (
        <header className="header font-[Poppins]">
            <div className="text-[#fff] w-full h-[40px] bg-[#233A95] flex justify-center items-center text-[13px]">
                Shopping cart is full, but the checkout button must be on vacation!
            </div>
            <div className="flex items-center py-[10px] px-[40px] text-[13px] text-[#3E445A] justify-between border-b-1  border-[#ccc]">
                <div>
                    <span className="cursor-pointer">About Us</span>
                    <Divider type="vertical" style={{ borderColor: "#ccc" }} />
                    <span className="cursor-pointer">My Account</span>
                    <Divider type="vertical" style={{ borderColor: "#ccc" }} />
                    <span className="cursor-pointer">Wishlist</span>
                    <Divider type="vertical" style={{ borderColor: "#ccc" }} />
                    <span className="cursor-pointer">Order Tracking</span>
                </div>
                <div className="flex">
                    <img src={iconHandSecure} alt="" className="w-[20px] h-[20px] mr-[5px]" />
                    <span>100% Secure delivery without contacting the courier</span>
                </div>
                <div className="flex">
                    <span>
                        Need help? Call us: <span className="text-[#2BBEF9]">+84123456789</span>
                    </span>
                    <Divider type="vertical" style={{ borderColor: "#ccc" }} />
                    <span className="flex items-center">English <DownOutlined style={{ fontSize: "13px", marginLeft: "3px" }} /></span>
                </div>
            </div>

            <div className="flex px-[40px] border-b-1  border-[#ccc]">
                <img src={logo} alt="" className="w-[120px] h-[120px] cursor-pointer"
                    onClick={() => navigate('/')}
                />
                <div className=" ml-[80px] flex flex-col w-full justify-around">
                    <div className="flex w-full justify-start">
                        <div className="flex w-[80%]">

                            <Dropdown menu={{ items: allCategories }}>
                                <div className="flex text-[#fff] bg-[#2BBEF9] px-[30px] py-[10px] rounded-[50px] cursor-pointer items-center" >
                                    <div className="flex items-center">
                                        <MenuOutlined />
                                        <span className="text-[16px] ml-[10px]">ALL CATEGORIES</span>
                                    </div>
                                    <DownOutlined style={{ fontSize: "16px", marginLeft: "45px" }} />
                                </div>
                            </Dropdown>

                            <div className="custom-input w-[50%] ml-[30px] h-full">
                                <Input
                                    suffix={<SearchOutlined />}
                                    className="custom-input"
                                    placeholder="What are you looking today?"
                                />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Dropdown
                                menu={{ items: items }}
                                trigger={["hover"]}
                                overlayStyle={{ minWidth: "200px" }}
                            >
                                <div
                                    onClick={(e) => e.preventDefault()}
                                    style={{
                                        position: "relative",
                                        display: "inline-block",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Space className="space" style={{ fontFamily: "'Poppins', serif", fontSize: "16px", fontWeight: "500", display: "flex", alignItems: "center" }}>
                                        <div className="flex items-center">
                                            <Avatar size={"large"} icon={<UserOutlined />} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} />
                                            <div className="ml-[10px]">I'm Admin!</div>
                                        </div>
                                        <DownOutlined />
                                    </Space>
                                </div>
                            </Dropdown>
                            <Divider type="vertical" style={{ borderColor: "#ccc", margin: "0 20px" }} />
                            <div className="cursor-pointer">
                                <Badge showZero={true} count={0} size="small" style={{ top: "6px", right: "6px" }}>
                                    <div className="bg-[#FFF1EE] w-[40px] h-[40px] rounded-[50%] flex justify-center items-center">
                                        <HiOutlineShoppingBag color="red" size={"20px"} />
                                    </div>
                                </Badge>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around">
                        <div className="flex cursor-pointer py-[10px] rounded-[40px] px-[12px] items-center custom-header-category-active custom-header-category-hover">
                            <BiHomeAlt2 style={{ width: "20px", height: "20px" }} />
                            <div className="ml-[10px]">Home</div>
                        </div>

                        <Dropdown menu={{ items: categoryItems?.menFashion }}>
                            <div className="flex cursor-pointer py-[10px] rounded-[40px] px-[12px] items-center custom-header-category-hover">
                                <IoShirtOutline style={{ width: "20px", height: "20px" }} />
                                <div className="ml-[10px]">Men's Fashion</div>
                                <DownOutlined style={{ marginLeft: "8px" }} />
                            </div>
                        </Dropdown>
                        <Dropdown menu={{ items: categoryItems?.womenFashion }}>
                            <div className="flex cursor-pointer py-[10px] rounded-[40px] px-[12px] items-center custom-header-category-hover" >
                                <PiDress style={{ width: "20px", height: "20px" }} />
                                <div className="ml-[10px]">Women's Fashion</div>
                                <DownOutlined style={{ marginLeft: "8px" }} />
                            </div>
                        </Dropdown>
                        <Dropdown menu={{ items: categoryItems?.electronicDevices }}>
                            <div className="flex cursor-pointer py-[10px] rounded-[40px] px-[12px] items-center custom-header-category-hover" >
                                <MdOutlineDevices style={{ width: "20px", height: "20px" }} />
                                <div className="ml-[10px]">Electronic Devices</div>
                                <DownOutlined style={{ marginLeft: "8px" }} />
                            </div>
                        </Dropdown>
                        <Dropdown menu={{ items: categoryItems?.beauty }}>
                            <div className="flex cursor-pointer py-[10px] rounded-[40px] px-[12px] items-center custom-header-category-hover" >
                                <MdFaceRetouchingNatural style={{ width: "20px", height: "20px" }} />
                                <div className="ml-[10px]">Beauty</div>
                                <DownOutlined style={{ marginLeft: "8px" }} />
                            </div>
                        </Dropdown>



                        <div className="flex cursor-pointer py-[10px] rounded-[40px] px-[12px] items-center custom-header-category-hover" >
                            About
                        </div>
                        <div className="flex cursor-pointer py-[10px] rounded-[40px] px-[12px] items-center custom-header-category-hover" >
                            Contact
                        </div>
                    </div>
                </div>


            </div>
        </header>
    )
}
export default Header