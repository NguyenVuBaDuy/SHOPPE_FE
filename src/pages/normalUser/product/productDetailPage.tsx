import { Breadcrumb, Button, Card, Carousel, Divider } from "antd";
import { BsCheckCircleFill, BsCoin } from "react-icons/bs";
import { FaChevronDown, FaShuttleVan, FaStar } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "360px",
  color: "#fff",
  lineHeight: "260px",
  textAlign: "center",
  background: "#364d79",
};

const ProductDetailPage = () => {
  return (
    <div className="w-full bg-slate-100">
      <div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item className="text-gray-900 font-bold">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item className="text-gray-900 font-bold">
            Product
          </Breadcrumb.Item>
          <Breadcrumb.Item>Product Detail</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="flex justify-center items-center">
        <Card className="w-7/8">
          <div>
            <h1 className="text-2xl font-bold">Products Name</h1>
            <div className="flex items-center gap-10">
              <div>
                <span className="text-lg font-medium text-gray-400">
                  Brands:{" "}
                </span>
                <span className="text-lg">Hihi haha</span>
              </div>
              <div>
                <div className="inline-flex items-center gap-1 mr-2">
                  <FaStar className="text-amber-300" />
                  <FaStar className="text-amber-300" />
                  <FaStar className="text-amber-300" />
                  <FaStar className="text-amber-300" />
                  <FaStar />
                </div>
                <span className="text-lg font-medium text-gray-400">
                  100 reviews
                </span>
              </div>
              <div>
                <span className="text-lg font-medium text-gray-400">SKU: </span>
                <span className="text-lg">ZBD1234</span>
              </div>
            </div>
            <div className="grid grid-cols-[minmax(300px,4fr)_4fr_3fr] gap-5 mt-5">
              <div className="px-2 py-4 relative">
                <div className="absolute top-5 left-2 z-10 p-2 rounded-lg">
                  <div className="flex flex-col gap-2">
                    <div className="rounded-md bg-emerald-600 px-2 w-fit text-white">
                      -50%
                    </div>
                    <div className="rounded-md bg-emerald-600 px-8 w-fit text-white">
                      Tag
                    </div>
                  </div>
                </div>
                <Carousel>
                  <div>
                    <h3 style={contentStyle}>1</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>2</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>3</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>4</h3>
                  </div>
                </Carousel>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <div className="h-20 w-20 bg-sky-900 text-white shadow-md shadow-gray-400 hover:cursor-pointer">
                    <h3>1</h3>
                  </div>
                  <div className="h-20 w-20 bg-sky-900 text-white shadow-md shadow-gray-500 hover:cursor-pointer">
                    <h3>2</h3>
                  </div>
                  <div className="h-20 w-20 bg-sky-900 text-white shadow-md shadow-gray-500 hover:cursor-pointer">
                    <h3>3</h3>
                  </div>
                  <div className="h-20 w-20 bg-sky-900 text-white shadow-md shadow-gray-500 hover:cursor-pointer">
                    <h3>4</h3>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <span className="text-xl ml-2 text-gray-400 line-through">
                    {" 300.000 "}
                  </span>
                  <span className="text-2xl text-red-500">{"200.000"}</span>
                </div>
                <div className="rounded-lg w-fit bg-green-300 px-2 text-green-700 font-bold">
                  Pre-order
                </div>
                <div className="mt-5">
                  Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                  luctus malesuada tincidunt. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                </div>
                <Divider style={{ borderColor: "#b0b0b0" }} />
                <div className="flex items-center gap-1 w-fit mx-auto hover:cursor-pointer">
                  <span className="text-gray-400">See more</span>
                  <FaChevronDown />
                </div>
                <div>
                  <span className="text-lg text-gray-700 font-bold">Size:</span>
                  <div className="flex gap-2 flex-wrap">
                    <div
                      className="rounded w-fit px-6
                    outline outline-green-500 bg-green-200 cursor-pointer"
                    >
                      Nhỏ
                    </div>
                    <div className="rounded w-fit px-6 outline outline-gray-400 cursor-pointer hover:bg-gray-100">
                      Lớn
                    </div>
                    <div className="rounded w-fit px-6 outline outline-gray-400 cursor-pointer hover:bg-gray-100">
                      Cực lớn
                    </div>
                    <div className="rounded w-fit px-6 outline outline-gray-400 cursor-pointer hover:bg-gray-100">
                      To chà bá
                    </div>
                    <div className="rounded w-fit px-6 outline outline-gray-400 cursor-pointer hover:bg-gray-100">
                      Siêu to khổng lồ
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-5">
                  <Button shape="circle" type="primary">
                    -
                  </Button>
                  <span className="text-lg align-middle mx-5">1</span>
                  <Button shape="circle" type="primary">
                    +
                  </Button>
                  <Button type="primary" shape="round" size={"large"}>
                    Add to Cart
                  </Button>
                </div>
                <div className="mt-5 w-fit">
                  <div className="grid grid-cols-5 mb-2 items-center gap-1">
                    <BsCheckCircleFill className="text-green-500 h-4 w-4 mx-auto" />
                    <span className="col-span-4 text-sm text-gray-400 font-bold">
                      Quality censorship
                    </span>
                  </div>
                  <div className="grid grid-cols-5 mb-2 items-center gap-1">
                    <BsCheckCircleFill className="text-green-500 h-4 w-4 mx-auto" />
                    <span className="col-span-4 text-sm text-gray-400 font-bold">
                      Quality censorship
                    </span>
                  </div>
                  <div className="grid grid-cols-5 items-center gap-1">
                    <BsCheckCircleFill className="text-green-500 h-4 w-4 mx-auto" />
                    <span className="col-span-4 text-sm text-gray-400 font-bold">
                      Quality censorship
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center h-fit">
                <Card style={{ backgroundColor: "#d1d1d1" }} className="w-full">
                  <div className="flex flex-col gap-2">
                    <div className="grid grid-cols-6 items-center gap-6">
                      <FaShuttleVan className="mx-auto my-auto w-5 h-5" />
                      <span className="col-span-5 text-sm">
                        Free Shipping apply to all orders over $100
                      </span>
                    </div>
                    <div className="grid grid-cols-6 items-center gap-6">
                      <IoFastFoodOutline className="mx-auto my-auto w-5 h-5" />
                      <span className="col-span-5 text-sm">
                        Guranteed 100% Organic from natural farmas
                      </span>
                    </div>
                    <div className="grid grid-cols-6 items-center gap-6">
                      <BsCoin className="mx-auto my-auto w-5 h-5" />
                      <span className="col-span-5 text-sm">
                        1 Day Returns if you change your mind
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Card className="w-7/8">
          <div className="flex gap-4">
            <h1 className="text-xl font-bold">Description</h1>
            <h1 className="text-xl font-bold text-gray-300">Description</h1>
            <h1 className="text-xl font-bold text-gray-300">Review (1)</h1>
          </div>
          <Divider className="w-full" />
          <div className="px-2">
            Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin
            vitae magna in dui finibus malesuada et at nulla. Morbi elit ex,
            viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum
            iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales
            nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc
            tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt.
            Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
            <br />
            Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
            auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim
            viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus
            sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit
            amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur
            laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim
            ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem
            orci convallis quam, sit amet consequat nulla felis pharetra lacus.
            Duis semper erat mauris, sed egestas purus commodo vel.
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetailPage;