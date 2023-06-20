"use client";
import Card from "@/components/Card";
import { useEffect, useRef, useCallback } from "react";
import Loading from "./assets/Loading.gif";
import { useSelector, useDispatch } from "react-redux";
import { fetchApi } from "../store/pageSlice";

const endPage = 4;

export const App = () => {
  const state = useSelector((state) => state.page);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApi(state.pageNumber));
  }, []);

  const observer = useRef();
  const lastCardElementRef = useCallback(
    (node) => {
      if (state.isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && state.pageNumber <= endPage) {
          dispatch(fetchApi(state.pageNumber));
        }
      });
      if (node) observer.current.observe(node);
    },
    [state.isLoading, state.pageNumber]
  );

  return (
    <div className="w-2/3 mx-auto min-h-full">
      <div className="flex  flex-row flex-wrap items-center content-start justify-evenly min-h-full min-w-full">
        {state.displayItems.map((_, index) => {
          if (state.displayItems.length === index + 1) {
            return <Card key={index} {..._} ref={lastCardElementRef} />;
          } else {
            return <Card key={index} {..._} />;
          }
        })}
        {state.isLoading ? (
          <div className="w-2/3">
            <img
              className="w-8 h-8 mx-auto"
              src={Loading.src}
              alt="loading..."
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default App;
