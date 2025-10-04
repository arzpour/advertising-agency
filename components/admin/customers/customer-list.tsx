"use client";
import React from "react";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import useDragAndDrop from "@/hooks/useDragAndDrop";
import { useEditCategoryOrder } from "@/apis/mutations/category";
import GlobalCard, { GlobalCardSkeleton } from "../global/global-card";
import useGetCustomers from "@/hooks/customers/useGetCustomers";

const CustomerList = () => {
  const {
    allCustomers,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess,
  } = useGetCustomers();

  const { observerRef } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  const editCategoryOrder = useEditCategoryOrder();

  const { handleDrop, setDraggedId, items, draggedId } =
    useDragAndDrop<ICustomer>({
      getItems: allCustomers,
      editOrder: editCategoryOrder,
    });

  return (
    <>
      {isLoading && (
        <div className="flex flex-wrap gap-8 mt-16 mb-16 justify-center items-center gap-y-10">
          {isLoading &&
            [1, 2, 3, 4].map((el) => <GlobalCardSkeleton key={el} />)}
        </div>
      )}

      {isSuccess && allCustomers.length > 0 && (
        <div className="flex flex-wrap gap-8 mt-14 mb-10 justify-center items-center gap-y-10">
          {items.map((el) => (
            <div
              key={el._id}
              draggable
              onDragStart={() => setDraggedId(el._id)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(el._id)}
              className={`cursor-move transition-transform duration-200 ${
                draggedId === el._id ? "scale-105 shadow-2xl z-50" : ""
              }`}
            >
              <GlobalCard
                key={el._id}
                {...el}
                icon={el.icon ?? ""}
                status="customer"
              />
            </div>
          ))}
        </div>
      )}

      {hasNextPage && (
        <div
          ref={observerRef}
          className="h-10 mt-10 flex items-center justify-center text-sm text-gray-400"
        >
          {isFetchingNextPage ? "در حال بارگذاری..." : "بارگذاری بیشتر"}
        </div>
      )}
      {!hasNextPage && !isLoading && allCustomers.length === 0 && (
        <p className="mt-6 text-gray-500">مشتری ای موجود نیست.</p>
      )}
    </>
  );
};

export default CustomerList;
