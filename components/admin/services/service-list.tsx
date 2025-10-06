"use client";
import React from "react";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import useDragAndDrop from "@/hooks/useDragAndDrop";
import ServiceCard, { ServiceCardSkeleton } from "./service-card";
import { useEditServiceOrder } from "@/apis/mutations/service";
import useGetServiceList from "@/hooks/services/useGetServiceList";

const ServiceList = () => {
  const {
    allServices,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess,
  } = useGetServiceList();

  const { observerRef } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  const editServiceOrder = useEditServiceOrder();

  const memoizedServices = React.useMemo(
    () => allServices,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allServices.length]
  );

  const { handleDrop, setDraggedId, items, draggedId } =
    useDragAndDrop<IService>({
      getItems: memoizedServices,
      editOrder: editServiceOrder,
    });

  return (
    <>
      {isLoading && (
        <div className="flex flex-wrap gap-8 mt-16 mb-16 justify-center items-center gap-y-10">
          {isLoading &&
            [1, 2, 3, 4].map((el) => <ServiceCardSkeleton key={el} />)}
        </div>
      )}

      {isSuccess && items.length > 0 && (
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
              <ServiceCard key={el._id} {...el} icon={el.icon ?? ""} />
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
      {!hasNextPage && !isLoading && allServices.length === 0 && (
        <p className="mt-6 text-gray-500">خدماتی موجود نیست.</p>
      )}
    </>
  );
};

export default ServiceList;
