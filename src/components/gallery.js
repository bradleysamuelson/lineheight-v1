import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Cartoon from '../images/cartoons/ntw-promo.jpg';
import Pals from '../images/cartoons/pals.png';
import TwentySix from '../images/cartoons/26.jpg';
import ChangeLog from '../images/cartoons/cl-characters.jpg';
import Usagi from '../images/cartoons/usagi.jpg';
import Mando1 from '../images/cartoons/mando1.jpg';
import Mando2 from '../images/cartoons/mando2.jpg';
import Cap from '../images/cartoons/camp-cap.jpg';
import Namor from '../images/cartoons/campy-namor.jpg';
import Cutlass from '../images/cartoons/cutlass.png';

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
            src: TwentySix,
            width: 3,
            height: 3
        },
        {
            src: Cutlass,
            width: 1,
            height: 1
        },  
        {
            src: ChangeLog,
            width: 3,
            height: 3
        },
        {
            src: Usagi,
            width: 3,
            height: 4
        },
        {
            src: Mando1,
            width: 1,
            height: 1
        },
        {
            src: Mando2,
            width: 1,
            height: 1
        },
        {
            src: Cap,
            width: 1,
            height: 1
        },
        {
            src: Namor,
            width: 1,
            height: 1
        },
        {
            src: Pals,
            width: 1,
            height: 1
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

