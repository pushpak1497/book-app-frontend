import React from "react";
import { useGetOrdersByEmailQuery } from "../../redux/features/orders/orderApi";
import { useAuth } from "../../context/AuthContext";

const OrderPage = () => {
  const { currentUser } = useAuth();
  const { data: orders = [], isLoading } = useGetOrdersByEmailQuery(
    currentUser.email
  );
  if (isLoading) return <div>Loading......</div>;
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
      {orders.length === 0 ? (
        <div>No Orders Found</div>
      ) : (
        orders.map((order, index) => (
          <div key={order._id} className="border-b mb-4 pb-4">
            <p className="font-bold mb-2 text-white bg-secondary w-10 p-2 rounded-sm">
              #{index + 1}
            </p>
            <h2 className="font-bold">OrderId:{order._id}</h2>
            <p className="text-gray-600">Name:{order.name}</p>
            <p className="text-gray-600">Email:{order.email}</p>
            <p className="text-gray-600">Phone:{order.phone}</p>
            <p className="text-gray-600">TotalPrice:{order.totalPrice}</p>
            <h3 className="font-semibold mt-2">Address:</h3>
            <p>
              {order.address.city},{order.address.state},{order.address.country}
              ,{order.address.zipcode}
            </p>
            <h3 className="font-semibold mt-2">Products Id:</h3>
            <ul>
              {order.productIds.map((productId) => (
                <li key={productId}>{productId}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderPage;
