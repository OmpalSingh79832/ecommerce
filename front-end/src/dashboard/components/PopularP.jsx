import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularProducts } from '../../redux/slices/productReduer';
import { deleteroductById } from '../../redux/slices/productReduer';
import { FaTrash } from 'react-icons/fa';

const PopularProducts = () => {
    const { popuarproducts } = useSelector((state) => state.product)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularProducts())
    }, [dispatch]);

    const popular = Array.isArray(popuarproducts) ? popuarproducts : popuarproducts.products || [];

const deleteProduct = async (id) => {
    await dispatch(deleteroductById(id))
    dispatch(getPopularProducts())

  }

    return (
        <>
          <div className="bg-white shadow rounded-2xl">
              <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 pt-6">
                Popular Product Details
              </h1>
              <div>
                <div className="flex items-center p-2 border-b font-semibold text-lg text-gray-700">
                  <div className="w-20">Image</div>
                  <div className="flex-1">Product Name</div>
                  <div className="flex-1">Category</div>
                  <div className="flex-1">Color</div>
                  <div className="flex-1">Gender</div>
                  <div className="w-16 text-center">Action</div>
                </div>
        
                {popular.map((product) => (
                  <div key={product.id} className="flex items-center p-1 border-b text-base text-gray-600">
                    <div className="w-20">
                      <img src={product?.hoverimage} alt={product.name} className="h-14 w-14 object-cover rounded" />
                    </div>
                    <div className="flex-1">{product.name}</div>
                    <div className="flex-1">{product.category}</div>
                    <div className="flex-1">{product.colors}</div>
                    <div className="flex-1">{product.gender}</div>
                    <div className="w-16 text-center">
                      <button
                        onClick={() => deleteProduct(product._id)}
                        className="text-red-500 hover:text-red-700">
                        <FaTrash size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
         
        </>
    )
}

export default PopularProducts;
