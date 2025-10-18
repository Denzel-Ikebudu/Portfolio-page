import React, {useState} from 'react'
import './works.css'
import image_1 from '../../assets/Screenshot-ecommerce.png'
import image_2 from '../../assets/ecommerce snip5.png'
import image_3 from '../../assets/ecommerce snip 2.png'
// import image_4 from '../../assets/portfolio-owah1.png'
import image_5 from '../../assets/portfolio-owah2.png'
import image_6 from '../../assets/po.png'
import image_7 from '../../assets/portfolio1.png'
import image_8 from '../../assets/portfolio2.png'

const Works = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className='portfolio' id='works-section'>
      <h2>My Works</h2>
      <p>Here are the images of some of the websites i have built.</p>
      <div className='portfolio-items'>
        {[image_1, image_2, image_3, image_5, 
        image_6, image_7, image_8].map((img, idx) => (
          <img key={idx} src={img} alt='' onClick={() => handleImageClick(img)} />
        ))}
      </div>


      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Full size" />
            <button className="close-modal" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Works
