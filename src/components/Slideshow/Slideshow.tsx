import { useEffect, useState } from 'react'
import './Slideshow.scss';


export default function Slideshow({ locationGallery }: { locationGallery: string[] | undefined }) {
    const [index, setIndex] = useState<number>(0);
    const [locationPictures, setLocationPictures] = useState<string[]>([]);
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        if (locationGallery) {
            setLocationPictures(locationGallery);
        }
    
        return () => {};
      }, [locationGallery]);
    
    function onNextPicture(): void {
        const locationPictures: number | undefined =
          locationGallery?.length;
        if (locationPictures && index < locationPictures - 1) {
          setIndex((index) => index + 1);
        } else {
          setIndex(0);
        }
        triggerAnimation();
      }
    
      function onPreviousPicture(): void {
        const maxIndex = locationPictures?.length - 1;
        if (index === 0) {
          setIndex(maxIndex);
        } else {
          setIndex((index) => index - 1);
        }
        triggerAnimation();
      }

      function triggerAnimation() {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
    }

  return (
    <div className="location__slider">
    <div className="location__slider__counter">
        <p className='location__slider__counter-text'>{index + 1} / {locationPictures.length}</p>
    </div>
    <div className={`location__slider__overlay ${animate ? 'change-picture' : ''}`}></div>
    <img
      src="arrow-left.png"
      className="location__slider__arrow-left"
      onClick={() => onPreviousPicture()}
    />
    <img
      src="arrow-right.png"
      className="location__slider__arrow-right"
      onClick={() => onNextPicture()}
    />
    {locationPictures.length > 0 && (
    <img
      src={`${locationPictures[index]}`}
      className="location__slider__slider-item"
    ></img>
    )}
    </div>
  )
}
