import styled from "styled-components";

export const HeaderStyles = styled.div`
  header {
    background: #fff;
    z-index: 999;
    box-shadow: 0 15px 40px -20px rgba(40, 44, 63, 0.15);

    > div {
      @media (min-width: 1200px) {
        width: 1200px;
      }

      li a {
        color: #3d4152;
        font-weight: 500;

        &:hover {
          span {
            color: #fc8019;
          }

          path {
            fill: #fc8019;
          }

          .cart-svg {
            stroke: #fc8019;

            path {
              fill: none;
            }
          }
        }

        .truncate {
          max-width: 80px;
        }

        svg {
          margin-right: 10px;
        }
      }

      .cart-count {
        left: 5.5px;
      }
    }
  }
`;
