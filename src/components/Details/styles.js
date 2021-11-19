import styled from 'styled-components'

export const DetailsContainer = styled.div`
  max-height: calc(100vh - 72px);
  overflow: hidden;
  overflow-y: auto;

  .broadcrum-bar {
    color: white;
    margin: 2vh auto 2vh 2rem;

    span {
      font-family: Avenir,sans-serif;
      font-weight: regular;
      font-size: 14px;
      letter-spacing: 1.4px;
      color: #efefef;
      cursor: pointer;
      opacity: .6;
      padding: 0 3px;
    }

    .broadcrum-title {
      font-family: Avenir,sans-serif;
      font-weight: regular;
      font-size: 14px;
      letter-spacing: 1.4px;
      color: #efefef;
      opacity: 1.0;
    }
  }

  .item-container {
    display: flex;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    flex-direction: row;
    -moz-box-pack: center;
    justify-content: center;
    margin-bottom: 50px;
    min-height: 80vh;

    @media only screen and (max-width: 429px){
      flex-direction: column;
      height: auto;
      margin-top: 5vh;
      grid-gap: 5vh;
      gap: 5vh;
    }

    @media only screen and (max-width: 1300px) {
      flex-direction: column;
      height: auto;
      margin-top: 5vh;
      grid-gap: 5vh;
      gap: 5vh;
    }

    .media-container {
      flex: 1 1;
      height: 80vh;
      display: -moz-box;
      display: flex;
      -moz-box-align: center;
      align-items: center;
      margin-left: 2rem;
      position: relative;

      @media only screen and (max-width: 429px) {
        padding: 0 3vh;
        margin-left: 0;
      }

      @media only screen and (max-width: 1300px) {
        padding: 0 3vh;
        -moz-box-pack: center;
        justify-content: center;
        align-self: center;
        margin-left: 0;
      }

      .media {
        width: 80vh;
        height: 80vh;
        border: 2px solid rgb(16, 16, 16);
        padding: 50px;

        @media only screen and (max-width: 1300px) {
          width: 100%;
          height: 60vh;
          padding: 0 3vh;
        }

        video {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .detail-container {
      flex: 1 1;
      color: #efefef;
      display: -moz-box;
      display: flex;
      -moz-box-orient: vertical;
      -moz-box-direction: normal;
      flex-direction: column;
      -moz-box-pack: justify;
      justify-content: space-between;
      min-height: 80vh;
      padding: 2px 5% 2px 0;
      overflow: auto;
      margin-left: 50px;

      @media only screen and (max-width: 429px) {
        align-self: auto;
        padding: 0 3vh;
      }

      @media only screen and (max-width: 1300px) {
        align-self: auto;
        padding: 0 3vh;
        margin-left: 10px;
        -moz-box-pack: unset;
        justify-content: unset;
        min-height: unset;
      }

      .about-container {
        display: flex;
        -moz-box-orient: vertical;
        -moz-box-direction: normal;
        flex-direction: column;
        height: 100%;
        
        .title-container {
          margin-bottom: 40px;

          .nft-title {
            text-align: left;
            font-family: Metropolis;
            font-weight: 600;
            font-size: 30px;
            margin: 0 0 7px;
            line-height: normal;
          }

          .nft-by {
            text-align: left;
            font-family: Avenir,sans-serif;
            font-size: 15px;
            opacity: .6;
            margin: 0;
          }
        }

        .price-text {
          p {
            text-align: left;
            font-family: Avenir,sans-serif;
            font-size: 15px;
            font-weight: 700;
            letter-spacing: 1.4px;
            opacity: .6;
            margin: 0 0 3px;
          }
        }

        .price-container {
          display: flex;
          -moz-box-align: center;
          align-items: center;
          -moz-box-pack: start;
          justify-content: flex-start;
          margin-bottom: 20px;

          .dollar-price {
            text-align: left;
            font-family: Metropolis;
            font-size: 30px;
            font-weight: 700;
            margin: 0 10px 0 0;
            letter-spacing: 1.5px;
          }

          .custom-price {
            text-align: left;
            font-family: Avenir,sans-serif;
            font-size: 15px;
            font-weight: 700;
            color: #aaff26;
            margin: 0;
          }

          .custom-price-edit {
            display: block;
            font-family: metropolisbold,sans-serif;
            width: 100%;
            max-width: 200px;
            border: 1px solid #b2b2b2;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            border-radius: 8px;
            background: transparent;
            color: #fff;
            margin-bottom: 10px;
            text-align: left;
            padding: 5px 10px;
            font-weight: 400;
            font-size: 17px;
            line-height: 24px;
            outline: none;
            margin-right: 15px;
            margin-top: 5px; 

            @media only screen and (max-width: 1300px) {
              max-width: 150px;
            }
          }

          img {
            width: 30px;
            height: 30px;
            margin-left: 8px;
            object-position: bottom center;
          }
        }

        .reverseMobileContainer {
          display: flex;
          -moz-box-orient: vertical;
          -moz-box-direction: normal;
          flex-direction: column;
          height: 100%;

          .description-container {
            margin-bottom: auto;

            .description-title {
              display: flex;
              -moz-box-orient: horizontal;
              -moz-box-direction: normal;
              flex-direction: row;
              grid-gap: 10px;
              gap: 10px;

              .description-text {
                text-align: left;
                font-family: Avenir,sans-serif;
                font-size: 16px;
                font-weight: 700;
                letter-spacing: 1.6px;
                margin-bottom: 10px;
                margin-top: 10px;
              }
              .description-arrow {
                transform: rotate(180deg);
                display: flex;
                -moz-box-orient: vertical;
                -moz-box-direction: normal;
                flex-direction: column;
                -moz-box-pack: center;
                justify-content: center;
              }
            }

            .description-content {
              text-align: left;
              font-family: Avenir,sans-serif;
              font-size: 14px;
              font-weight: 400;
              margin-top: 0;
              margin-bottom: 0;
              max-height: 100px;
              line-height: 24px;
              overflow-y: auto;
            }

            .cate-text {
              font-family: Avenir,sans-serif;
              font-size: 14px;
              font-weight: 700;
              letter-spacing: 1.4px;
              margin-top: 20px;
            }
          }

          .action-container {
            display: flex;
            -moz-box-orient: vertical;
            -moz-box-direction: normal;
            flex-direction: column;

            .total-container {
              display: flex;
              grid-gap: 10px;
              gap: 10px;

              .total-label {
                text-align: left;
                font-family: Avenir,sans-serif;
                font-size: 16px;
                font-weight: 400;
                margin-bottom: 16px;
              }

              .total-value {
                text-align: left;
                font-family: Avenir,sans-serif;
                font-size: 16px;
                font-weight: 400;
                margin-bottom: 16px;
              }
            }

            .button-container {
              margin-top: auto;
              display: -moz-box;
              display: flex;
              -moz-box-align: center;
              align-items: center;
              width: 85%;

            }

            .button-group{
              display: flex;
              align-items: center;
              gap: 15px;

              @media (max-width: 768px){
                display: block;
              }
            }
          }
        }
      }
    }
  }

  .footer-container {
    width: 100%;
    display: -moz-box;
    display: flex;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    flex-direction: column;
    -moz-box-align: center;
    align-items: center;
    bottom: 0;
    left: 0;
    position: relative;
    height: 290px;
    padding: 27px 120px;
    background: #000;
    font-family: Avenir,sans-serif;
    color: #fff;

    @media (max-width: 1620px){
      padding: 27px 120px;
    }
  }
  
`;