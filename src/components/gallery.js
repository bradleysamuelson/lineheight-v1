import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Cartoon1 from '../images/cartoons/pals.png';
import Cartoon2 from '../images/cartoons/26.jpg';
import Cartoon3 from '../images/cartoons/cl-characters.jpg';
import Cartoon4 from '../images/cartoons/usagi.jpg';

export function CartoonGallery() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const photos = [
        {
          src: Cartoon1,
          width: 1.25,
          height: 1
        },
        {
          src: Cartoon2,
          width: 2.5,
          height: 3
        },
        {
          src: Cartoon3,
          width: 3,
          height: 4
        },
        {
          src: Cartoon4,
          width: 3,
          height: 4
        }
    ]
    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
      }, []);
    
      const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
      };

      return (
          <>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
            {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
                <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                }))}
                />
            </Modal>
            ) : null}
        </ModalGateway>
        </>
      );
}
// export default CartoonGallery;

