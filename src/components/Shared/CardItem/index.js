import React, { useRef, useEffect } from 'react';
import videoOverlay from '../../../assets/images/video-overlay.svg'
import { CardItemContainer } from './styles';

const CardItem = ({ item, onClick }) => {

  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  }

  const handlePause = () => {
    videoRef.current.pause();
  }

  useEffect(() => {
    videoRef.current.play();
    const timer = setTimeout(function(){
      videoRef.current.pause();
    }, 5000)
    return () => clearTimeout(timer);
  }, []);

  return (
    <CardItemContainer>
      <div className="card-content">
        <div className="card-media" onClick={onClick}>
          <div className="card-video-container">
            <video className="card-video" 
              ref={videoRef}
              src={item.url} 
              muted 
            >
              Your browser does not support playing videos.
            </video>
            <div 
              className="card-video-overlay"
              onMouseOver={handlePlay}
              onMouseOut={handlePause}
            >
              <img src={videoOverlay} alt="play" width="24" />
            </div>
          </div>
        </div>
        <div className="card-title">{item.title}</div>
        <div className="card-artist">{item.artist}</div>
        <div className="card-price-detail">
          <div className="card-price-label">{item.priceLabel}</div>
          <div className="card-price-value">${item.priceValue}</div>
        </div>
        {item.isMultiple && (
          <div className="card-multiple">
            <div className="multiple-tile-1"></div>
            <div className="multiple-tile-2"></div>
          </div>
        )}
      </div>
    </CardItemContainer>
  )
}

export default CardItem;