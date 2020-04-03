import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Cartoon from '../images/cartoons/ntw-promo.jpg';
import Cartoon1 from '../images/cartoons/pals.png';
import Cartoon2 from '../images/cartoons/26.jpg';
import Cartoon3 from '../images/cartoons/cl-characters.jpg';
import Cartoon4 from '../images/cartoons/usagi.jpg';
import Cartoon5 from '../images/cartoons/mando1.jpg';
import Cartoon6 from '../images/cartoons/mando2.jpg';
import Cartoon7 from '../images/cartoons/camp-cap.jpg';
import Cartoon8 from '../images/cartoons/campy-namor.jpg';

export function CartoonGallery() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const photos = [
        {
            src: Cartoon,
            width: 1,
            height: 1
        },
        {
          src: Cartoon1,
          width: 1,
          height: 1
        },
        {
          src: Cartoon2,
          width: 3,
          height: 3
        },
        {
          src: Cartoon3,
          width: 3,
          height: 3
        },
        {
          src: Cartoon4,
          width: 3,
          height: 4
        },
        {
            src: Cartoon5,
            width: 1,
            height: 1
        },
        {
            src: Cartoon6,
            width: 1,
            height: 1
        },
        {
            src: Cartoon7,
            width: 1,
            height: 1
        },
        {
            src: Cartoon8,
            width: 1,
            height: 1
        },
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

