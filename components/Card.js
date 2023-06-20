import React from "react";
import whitestar from "../app/assets/white_star.png";
import greenstar from "../app/assets/green_star.png";
import iconwon from "../app/assets/icon-won.png";

export const Card = (props, ref) => {
  return (
    <div
      className="w-[294px] h-auto  m-[18px] rounded-xl "
      style={{
        border: "1px solid #E5E6E9",
        boxShadow: "0px 1px 4px rgba(30, 40, 58, 0.04)",
      }}
    >
      <div className="w-[294px] h-[180px]">
        <img src={props.image} className="w-full h-full rounded-t-xl" />
      </div>
      <div className=" p-[20px]">
        <h1>{props.title}</h1>
        <p>
          {props.occupation_names &&
            Object.keys(props.occupation_names).reduce(
              (prev, key) => prev + props.occupation_names[key][0],
              ""
            )}
        </p>
        <hr />
        <h2 className="pt-[12px] font-bold text-[16px] leading-[24px]">
          <img
            className="w-[24px] h-[24px] mx-[8px] inline-block"
            style={{ border: "1px solid #E5E6E9", borderRadius: "4px" }}
            src={props.company.logo}
          />
          {props.company.name}
          <img
            src={props.company.grade_count > 0 ? greenstar.src : whitestar.src}
            className="inline-block m-[5px]"
          />
          {props.company.grade}
          <div
            className=" inline-block font-normal"
            style={{ color: "#85878C" }}
          >
            {` (${props.company.grade_count})`}
          </div>
          <div
            ref={ref}
            style={{ color: "#85878C" }}
            className="font-normal text-[14px] leading-[22px] ml-[8px] mb-[12px]"
          >
            {props.skills.join(", ")}
          </div>
        </h2>

        {props.reward_text ? (
          <>
            <hr />
            <h3 className="mt-[10px]">
              <img
                className="inline-block w-[14px] h-[14px] m-[10px] mb-[18px]"
                src={iconwon.src}
              />
              {"취업 축하금: " + props.reward_text}
            </h3>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default React.forwardRef(Card);
