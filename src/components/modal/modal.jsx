import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './modal.scss'; 

const Modal = ({ isOpen, onClose, currentImage, images, onNext, onPrevious }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
  
    useEffect(() => {
      if (isOpen) {
        setImageLoaded(false); 
      }
    }, [isOpen, currentImage]);
  
    const handleImageLoad = () => {
      setImageLoaded(true);
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>

          <div className="image-container">
            <button 
              className="nav-button left" 
              onClick={onPrevious} 
              disabled={images.indexOf(currentImage) === 0}
            >
              <FaArrowLeft />
            </button>
            
            <img 
              src={currentImage} 
              alt="Preview" 
              className={`modal-image ${imageLoaded ? 'fade-in' : ''}`} 
              onLoad={handleImageLoad} 
            />
            
            <button 
              className="nav-button right" 
              onClick={onNext} 
              disabled={images.indexOf(currentImage) === images.length - 1}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    );
  };
  

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  currentImage: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

export default Modal;
