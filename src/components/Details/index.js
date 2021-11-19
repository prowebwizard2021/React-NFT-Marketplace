import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { DetailsContainer } from "./styles";
import { useData } from '../../contexts/DataContext';
import chainLogo from '../../assets/images/matic-network.png';
import GradientButton from "../Shared/GradientButton";
import Accordion from "../Shared/Accordion";
import mobileLogo from '../../assets/images/logo-mobile.png';

export const Details = () => {
  let history = useHistory();
  const [{ initialVideos }] = useData();
  const { id } = useParams();

  const thisProduct = initialVideos.find(prod => prod.id == id);

  const [isEdit, setIsEdit] = useState(false);
  const [customPrice, setCustomPrice] = useState(thisProduct.priceValue);

  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.play();
  }, [])

  return (
    <DetailsContainer>
      <div className="broadcrum-bar">
        <div>
          <span onClick={() => history.push('/')}>Home</span>
          <span>/</span>
          <span onClick={() => history.push('/')}>Marketplace</span>
          <span>/</span>
          <span className="broadcrum-title">{thisProduct.title}</span>
        </div>
      </div>
      <div className="item-container">
        <div className="media-container">
          <div className="media">
            <video src={thisProduct.url} preload="auto" autoPlay controls loop muted ref={videoRef}></video>
          </div>
        </div>
        <div className="detail-container">
          <div className="about-container">
            <div className="title-container">
              <p className="nft-title">{thisProduct.title}</p>
              <p className="nft-by">Created By Visual Lab</p>
            </div>
            <div className="price-text">
              <p>ITEM PRICE: </p>
            </div>
            <div className="price-container">
              {isEdit ? (
                <input type="text" className="custom-price-edit" value={customPrice} onChange={(e) => setCustomPrice(e.target.value)} />
              ) : (
                <p className="dollar-price">${customPrice}</p>
              )}
              <p className="custom-price">{'17.58 ERN'}</p>
              <img src={mobileLogo} alt="chain-logo" />
            </div>
            <div className="reverseMobileContainer">
              <div className="description-container">
                <Accordion title="Description" iconUrl={null}>
                  <div>
                    <p className="description-content">
                      {thisProduct.description}
                    </p>
                  </div>
                </Accordion>
                <div className="cate-text">#Soccer</div>
              </div>
              <div className="action-container">
                <div className="total-container">
                  <p className="total-label">Available:</p>
                  <p className="total-value">{'1982/2500'}</p>
                </div>
                <div className="button-container">
                  <div className="button-group">
                    {isEdit ? (
                      <GradientButton 
                        label={'Save Price'} 
                        height={'50px'} 
                        width={'240px'}
                        handleClick={() => setIsEdit(false)} 
                      />
                    ) : (
                      <GradientButton 
                        label={'Edit Price'} 
                        height={'50px'} 
                        width={'240px'}
                        handleClick={() => setIsEdit(true)} 
                      />
                    )}
                    <GradientButton 
                      label={'Buy'} 
                      height={'50px'} 
                      width={'240px'}
                      handleClick={() => null} 
                    />
                  </div>
                  <div className="total-container-mobile">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer-container">
        
      </div> */}
    </DetailsContainer>
  );
};