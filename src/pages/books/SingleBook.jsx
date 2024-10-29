import React from "react";
import { useFetchBookByIdQuery } from "../../redux/features/books/booksApi";
import { useParams } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { getImgUrl } from "../../utils/getImgUrl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const SingleBook = () => {
  const { id } = useParams();
  const { data: book = {} } = useFetchBookByIdQuery(id);
  const dispatch = useDispatch();
  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };
  console.log(book);
  return (
    <div className="flex justify-center">
      <div className="px-4 py-4 shadow-md border md:max-w-[500px] max-w-screen m-5 ">
        <h2 className="text-md font-semibold text-2xl py-3">{book.title}</h2>
        <img src={`${getImgUrl(book.coverImage)}`} alt={book.title} />
        <p className="text-sm py-3">
          <span className="font-semibold">Category:</span>
          {book.category}
        </p>
        <p className="text-sm pb-2">
          <span className="font-semibold">Description:</span>
          {book.description}
        </p>
        <button
          className="bg-primary px-5 py-2 rounded-md flex items-center"
          onClick={() => handleAddToCart(book)}
        >
          <HiOutlineShoppingCart className="mr-1" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
