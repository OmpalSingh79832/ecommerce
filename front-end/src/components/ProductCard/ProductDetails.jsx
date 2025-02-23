import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "./data";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/slices/productReduer";
import TopProducts from "../../pages/homepage/TopProducts";

const ProductPage = () => {
  const { singleproduct } = useSelector((state) => state.product)
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const visibleThumbnails = 6;
  const dispatch = useDispatch();

  const id = params.productId


  useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch])

  const oneproduct = singleproduct.menu;

  console.log(oneproduct, 'd is here')
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    if (oneproduct) {
      // Set product images from API data
      const productImages = oneproduct.images || [];
      setMainImage(productImages[0]); // Use first image as main
      setThumbnails(productImages);    // All images as thumbnails
    } else {
      setError("Product not found.");
    }

    setIsLoading(false);
  }, [oneproduct]);

  const nextThumbnails = () => {
    if (startIndex + visibleThumbnails < thumbnails.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevThumbnails = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 50;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  // Conditional rendering
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!oneproduct) {
    return <div>Product data not available.</div>;
  }

  return (
    <>
      <div className="bg-white">
        <div className="w-[100%] mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* Product Images */}
            <div className="w-full md:w-[40%] flex-col-reverse md:flex-row px-4 mb-8 relative flex gap-4">
              {/* Thumbnails */}
              <div className="flex flex-row md:flex-col items-center">
                <button
                  onClick={prevThumbnails}
                  disabled={startIndex === 0}
                  className="text-4xl disabled:opacity-80 transform rotate-[270deg] md:rotate-0"
                >
                  <FaAngleUp />
                </button>

                <div className="flex flex-row md:flex-col gap-2 justify-center items-center">
                  {thumbnails
                    .slice(startIndex, startIndex + visibleThumbnails)
                    .map((thumbnail, index) => (
                      <img
                        key={index + startIndex}
                        src={thumbnail}
                        loading="lazy"
                        alt={`Thumbnail ${index + startIndex + 1}`}
                        className="md:w-14 md:h-16 sm:w-14 sm:h-16 object-cover rounded-md cursor-pointer opacity-100 hover:opacity-100 transition duration-300"
                        onMouseEnter={() => setMainImage(thumbnail)}
                      />
                    ))}
                </div>

                <button
                  onClick={nextThumbnails}
                  disabled={startIndex + visibleThumbnails >= thumbnails.length}
                  className="text-4xl disabled:opacity-80 transform rotate-[270deg] md:rotate-0"
                >
                  <FaAngleDown />
                </button>
              </div>

              {/* Main Image */}
              <div
                className="relative w-full h-full overflow-hidden shadow-lg bg-gray-100 flex justify-center items-center"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={handleMouseMove}
              >
                <img
                  src={mainImage}
                  loading="lazy"
                  alt="Product"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-[60%] px-6">
              <div className="p-6 bg-white">
                <h2 className="text-3xl font-semibold text-gray-900 mb-3">{oneproduct.name}</h2>
                <p className="text-gray-700 text-lg">{oneproduct.moq} Piece (MOQ)</p>

                {/* Quantity & Price Section */}
                <div className="flex items-center my-5 gap-4">
                  <input
                    type="number"
                    placeholder="Enter Quantity"
                    className="w-44 px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <p className="px-3 py-2 bg-gray-100 text-gray-800 rounded-lg border border-gray-300">
                    In Piece
                  </p>
                  <button className="bg-[#1E2747] text-white px-5 py-2 rounded-lg text-lg font-medium shadow-md hover:bg-[#2571B9] transition-all">
                    Get Best Price
                  </button>
                </div>

                {/* Product Details Table */}
                <table className="w-full text-lg text-left text-gray-700">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 font-semibold text-lg text-gray-800">Business Type :</td>
                      <td>	Manufacturer, Exporter, Supplier, Retailer, Trader</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-semibold text-lg text-gray-800">Size :</td>
                      <td className="flex items-center gap-4 py-4">{oneproduct.size.map((item) => (
                        <p className="border px-2 py-1">{item}</p>
                      ))}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-semibold text-lg text-gray-800">Type :</td>
                      <td>{oneproduct.fabricType}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-semibold text-lg text-gray-800">Material :</td>
                      <td>{oneproduct.material}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-semibold text-lg text-gray-800">Preferred Buyer From :</td>
                      <td>All Over World</td>
                    </tr>
                  </tbody>
                </table>

                {/* More Details Link */}
                <Link to={"/"} className="text-blue-500 text-lg font-medium hover:text-blue-700 transition-all">
                  Click to view more Details
                </Link>

                {/* Action Buttons */}
                <div className="my-6 flex gap-4">
                  <button className="bg-gray-100 px-5 py-3 text-lg font-medium rounded-lg text-gray-900 border border-gray-300 hover:bg-gray-200 transition-all">
                    Request to Call
                  </button>
                  <button className="bg-[#1E2747] text-white text-lg px-5 py-3 rounded-lg font-medium shadow-md hover:bg-[#2571B9] transition-all">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Zoomed Image */}
          {isHovering && (
            <div className="fixed top-12 right-[-19em] w-[80%] h-[100%] overflow-hidden lg:block sm:hidden bg-white border border-gray-300 shadow-lg rounded-lg">
              <img
                src={mainImage}
                loading="lazy"
                alt="Zoomed"
                className="absolute"
                style={{
                  width: "500%",
                  height: "200%",
                  transform: `translate(-${zoomPosition.x}%, -${zoomPosition.y}%)`,
                }}
              />
            </div>
          )}
        </div>
      </div>

      <div className="w-full bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4" >
        <div className="w-full max-w-7xl mx-auto bg-white shadow-xl rounded-xl p-8 border border-gray-200">

          {/* Header Section */}
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-6">
            Product Details
          </h2>

          {/* Product Information Table */}
          <div className="overflow-hidden rounded-lg border border-blue-300 shadow-md">
            <table className="w-full text-lg border-collapse">
              <tbody>
                <tr className="border-b border-blue-200 bg-gray-50">
                  <td className="px-6 py-3 font-medium text-gray-800">Application</td>
                  <td className="px-6 py-3 text-gray-700">{oneproduct.application}</td>
                </tr>
                <tr className="border-b border-blue-200 bg-gray-50">
                  <td className="px-6 py-3 font-medium text-gray-800">Color</td>
                  <td className="px-6 py-3 text-gray-700">{oneproduct.colors}</td>
                </tr>
                <tr className="border-b border-blue-200 bg-gray-50">
                  <td className="px-6 py-3 font-medium text-gray-800">Gender</td>
                  <td className="px-6 py-3 text-gray-700">{oneproduct.gender}</td>
                </tr>
                <tr className="border-b border-blue-200 bg-white">
                  <td className="px-6 py-3 font-medium text-gray-800">Season</td>
                  <td className="px-6 py-3 text-gray-700">{oneproduct.season}</td>
                </tr>
                <tr className="border-b border-blue-200 bg-gray-50">
                  <td className="px-6 py-3 font-medium text-gray-800">Features</td>
                  <td className="px-6 py-3 text-gray-700">{oneproduct.feature}</td>
                </tr>
                <tr className="border-b border-blue-200 bg-gray-50">
                  <td className="px-6 py-3 font-medium text-gray-800">Pattern</td>
                  <td className="px-6 py-3 text-gray-700">{oneproduct.pattern}</td>
                </tr>
                <tr className="border-b border-blue-200 bg-white">
                  <td className="px-6 py-3 font-medium text-gray-800">Occasion</td>
                  <td className="px-6 py-3 text-gray-700">{oneproduct.occasion}</td>
                </tr>
                <tr className="border-b border-blue-200 bg-white">
                  <td className="px-6 py-3 font-medium text-gray-800">Country of Origin</td>
                  <td className="px-6 py-3 text-gray-700">India</td>
                </tr>
              </tbody>
            </table>
          </div>



          {/* Call-to-Action Button */}
          <div className="mt-4 flex justify-center">
            <button className="bg-[#1E2747] text-white text-lg  px-8 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#2571B9]">
              Yes! I am Interested
            </button>
          </div>
        </div>
      </div>

      <TopProducts />

    </>
  );
};

export default ProductPage;
