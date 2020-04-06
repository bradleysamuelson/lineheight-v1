import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import AOP1 from '../images/design/aop1.jpg';
import AOP2 from '../images/design/aop2.jpg';
import AOP3 from '../images/design/aop3.jpg';
import Pictela1 from '../images/design/pic1.png';
import Pictela2 from '../images/design/pic2.png';
import Pictela3 from '../images/design/pic3.png';
import Pictela4 from '../images/design/pic4.png';
import Pictela5 from '../images/design/pic5.png';
import Pictela6 from '../images/design/pic6.png';
import Reporting1 from '../images/design/reporting1.jpg';
import Reporting2 from '../images/design/reporting2.jpg';
import Reporting3 from '../images/design/reporting3.jpg';

export function DesignGallery() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const photos = [
        {
            src: Pictela1,
            width: 3,
            height: 2
        },
        {
            src: Pictela2,
            width: 3,
            height: 2
        },
        {
            src: Pictela3,
            width: 3,
            height: 2
        },
        {
            src: Pictela4,
            width: 3,
            height: 2
        },
        {
            src: Pictela5,
            width: 3,
            height: 2
        },
        {
            src: Pictela6,
            width: 3,
            height: 2
        },
        {
            src: AOP1,
            width: 3,
            height: 2
        },
        {
            src: AOP2,
            width: 3,
            height: 2
        },
        {
            src: AOP3,
            width: 3,
            height: 2
        },
        {
            src: Reporting1,
            width: 3,
            height: 2
        },
        {
            src: Reporting2,
            width: 3,
            height: 2
        },
        {
            src: Reporting3,
            width: 3,
            height: 2
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

