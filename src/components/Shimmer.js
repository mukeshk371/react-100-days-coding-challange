import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const ShimmerWrapper = styled.div`
  max-width: 1048px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const ShimmerStyle = styled.div`
  height: 200px;
  background: linear-gradient(to right, #f6f7f8 4%, #edeef1 25%, #f6f7f8 36%);
  background-size: 1000px 100%;
  animation: ${shimmer} 5s infinite;
  border-radius: 16px;
  border: solid 1px #ccc;
`;

const Shimmer = () => {
  return (
    <ShimmerWrapper className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] md:px-[16px] lg:px-0 md:pt-[64px] mx-auto'>
      <ShimmerStyle />
      <ShimmerStyle />
      <ShimmerStyle />
      <ShimmerStyle />
      <ShimmerStyle />
      <ShimmerStyle />
      <ShimmerStyle />
      <ShimmerStyle />
      <ShimmerStyle />
    </ShimmerWrapper>
  );
};

export default Shimmer;
