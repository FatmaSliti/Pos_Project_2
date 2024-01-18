/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react'
// import {buttonsData} from './ButtonsData'
// import {useIntl} from 'react-intl'

// type Props = {
//   className: string
// }

// const First_Article_Buttons: React.FC<Props> = ({className}) => {
//   const intl = useIntl()

//   return (
//     <div className={`card ${className}`}>
//       <div className='card-body'>
//         <div className='nav d-flex justify-content-center gap-10 flex-nowrap overflow-auto'>
//           {buttonsData.map((button) => (
//             <div className='me-0' key={button.id}>
//               <button
//                 className=' btn btn-outline btn-flex flex-column flex-stack pt-9 pb-7 page-bg show rounded-4'
//                 style={{width: 148, height: 150}}
//               >
//                 <div className='mb-3'>
//                   <img src={button.img} className='w-50px' alt='' />
//                 </div>

//                 <div className=''>
//                   <span className='text-gray-800 fw-bold fs-4 d-block'>
//                     {intl.formatMessage({id: button.title})}
//                   </span>
//                 </div>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default First_Article_Buttons

/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react';
// import { buttonsData } from './ButtonsData';
// import { useIntl } from 'react-intl';
// import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap

// type Props = {
//   className: string;
// };

// const First_Article_Buttons: React.FC<Props> = ({ className }) => {
//   const intl = useIntl();

//   return (
//     <div className={`card ${className}`}>
//       <div className='card-body'>
//         <Carousel>
//           {buttonsData.map((button) => (
//             <Carousel.Item key={button.id}>
//               <div className='d-flex justify-content-center'>
//                 <button
//                   className='btn btn-outline btn-flex flex-column flex-stack pt-9 pb-7 page-bg show rounded-4'
//                   style={{ width: 148, height: 150 }}
//                 >
//                   <div className='mb-3'>
//                     <img src={button.img} className='w-50px' alt='' />
//                   </div>

//                   <div className=''>
//                     <span className='text-gray-800 fw-bold fs-4 d-block'>
//                       {intl.formatMessage({ id: button.title })}
//                     </span>
//                   </div>
//                 </button>
//               </div>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default First_Article_Buttons;










/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from 'react';
// import { buttonsData } from './ButtonsData';
// import { useIntl } from 'react-intl';
// import { Carousel } from 'react-bootstrap';

// type Props = {
//   className: string;
// };

// const First_Article_Buttons: React.FC<Props> = ({ className }) => {
//   const intl = useIntl();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : buttonsData.length - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex < buttonsData.length - 1 ? prevIndex + 1 : 0));
//   };

//   return (
//     <div className={`card ${className}`}>
//       <div className='card-body'>
//         <Carousel activeIndex={currentIndex} onSelect={() => {}}>
//           {buttonsData.map((button, index) => (
//             <Carousel.Item key={button.id}>
//               <button
//                 className='btn btn-outline btn-flex flex-column flex-stack pt-9 pb-7 page-bg show rounded-4 me-3'
//                 style={{ width: 148, height: 150 }}
//               >
//                 <div className='mb-3'>
//                   <img src={button.img} className='w-50px' alt='' />
//                 </div>

//                 <div className=''>
//                   <span className='text-gray-800 fw-bold fs-4 d-block'>
//                     {intl.formatMessage({ id: button.title })}
//                   </span>
//                 </div>
//               </button>
//             </Carousel.Item>
//           ))}
//         </Carousel>

//         <div className='d-flex justify-content-between mt-2'>
//           <a href='#' className='btn btn-primary' onClick={handlePrev}>
//             Previous
//           </a>
//           <a href='#' className='btn btn-primary' onClick={handleNext}>
//             Next
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default First_Article_Buttons;


//########################


// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState, useRef } from 'react';
// import { buttonsData } from './ButtonsData';
// import { useIntl } from 'react-intl';

// type Props = {
//   className: string;
// };

// const First_Article_Buttons: React.FC<Props> = ({ className }) => {
//   const intl = useIntl();
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const handlePrev = (e) => {
//     e.preventDefault()
//     if (containerRef.current) {
//       const newScrollPosition = Math.max(0, scrollPosition - containerRef.current.clientWidth);
//       setScrollPosition(newScrollPosition);
//       containerRef.current.scrollLeft = newScrollPosition;
//     }
//   };

//   const handleNext = (e) => {
//     e.preventDefault()
//     if (containerRef.current) {
//       const newScrollPosition = Math.min(
//         containerRef.current.scrollWidth - containerRef.current.clientWidth,
//         scrollPosition + containerRef.current.clientWidth
//       );
//       setScrollPosition(newScrollPosition);
//       containerRef.current.scrollLeft = newScrollPosition;
//     }
//   };

//   return (
//     <div className={`card ${className}`}>
//       <div className='card-body'>
//         <div
//           ref={containerRef}
//           className='d-flex flex-nowrap overflow-auto'
//           style={{ scrollBehavior: 'smooth', overflowScrolling: 'touch' } as React.CSSProperties}
//         >
//           {buttonsData.map((button) => (
//             <div key={button.id}>
//               <button
//                 className='btn btn-outline btn-flex flex-column flex-stack pt-9 pb-7 page-bg show rounded-4 me-3'
//                 style={{ width: 148, height: 150 }}
//               >
//                 <div className='mb-3'>
//                   <img src={button.img} className='w-50px' alt='' />
//                 </div>

//                 <div className=''>
//                   <span className='text-gray-800 fw-bold fs-4 d-block'>
//                     {intl.formatMessage({ id: button.title })}
//                   </span>
//                 </div>
//               </button>
//             </div>
//           ))}
//         </div>

//         <div className='d-flex justify-content-between mt-2'>
//           <a href='#' className='btn btn-primary' onClick={handlePrev}>
//             &lt;
//           </a>
//           <a href='#' className='btn btn-primary' onClick={handleNext}>
//             &gt;
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default First_Article_Buttons;


/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState, useRef } from 'react';
// import { buttonsData } from './ButtonsData';
// import { useIntl } from 'react-intl';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// type Props = {
//   className: string;
// };

// const First_Article_Buttons: React.FC<Props> = ({ className }) => {
//   const intl = useIntl();
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const handlePrev = (e) => {
//     e.preventDefault()
//     if (containerRef.current) {
//       const newScrollPosition = Math.max(0, scrollPosition - containerRef.current.clientWidth);
//       setScrollPosition(newScrollPosition);
//       containerRef.current.scrollLeft = newScrollPosition;
//     }
//   };

//   const handleNext = (e) => {
//     e.preventDefault()
//     if (containerRef.current) {
//       const newScrollPosition = Math.min(
//         containerRef.current.scrollWidth - containerRef.current.clientWidth,
//         scrollPosition + containerRef.current.clientWidth
//       );
//       setScrollPosition(newScrollPosition);
//       containerRef.current.scrollLeft = newScrollPosition;
//     }
//   };

//   return (
//     <div className={`card ${className}`}>
//       <div className='card-body'>
//         <div
//           ref={containerRef}
//           className='d-flex flex-nowrap overflow-auto'
//           style={{ scrollBehavior: 'smooth' } as React.CSSProperties}
//         >
//           {buttonsData.map((button) => (
//             <div key={button.id}>
//               <button
//                 className='btn btn-outline btn-flex flex-column flex-stack pt-9 pb-7 page-bg show rounded-4 me-3'
//                 style={{ width: 148, height: 150 }}
//               >
//                 <div className='mb-3'>
//                   <img src={button.img} className='w-50px' alt='' />
//                 </div>

//                 <div className=''>
//                   <span className='text-gray-800 fw-bold fs-4 d-block'>
//                     {intl.formatMessage({ id: button.title })}
//                   </span>
//                 </div>
//               </button>
//             </div>
//           ))}
//         </div>

//         <div className='d-flex justify-content-between mt-2'>
//           <a href='#' className='btn ' onClick={handlePrev}>
//             <FontAwesomeIcon icon={faChevronLeft} />
//           </a>
//           <a href='#' className='btn ' onClick={handleNext}>
//             <FontAwesomeIcon icon={faChevronRight} />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default First_Article_Buttons;


/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState, useRef } from 'react';
// import { buttonsData } from './ButtonsData';
// import { useIntl } from 'react-intl';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// type Props = {
//   className: string;
// };

// const First_Article_Buttons: React.FC<Props> = ({ className }) => {
//   const intl = useIntl();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const sliderRef = useRef<Slider>(null);

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: buttonsData.length >= 4 ? 4 : buttonsData.length,
//     slidesToScroll: 1,
//     arrows: false, // Hide the navigation arrows
//   };

//   const handlePrev = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickPrev();
//     }
//   };

//   const handleNext = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickNext();
//     }
//   };

//   return (
//     <div className={`card ${className}`}>
//       <div className='card-body'>
//         <Slider {...settings} className='d-flex flex-nowrap overflow-auto' ref={sliderRef}>
//           {buttonsData.map((button) => (
//             <div key={button.id}>
//               <button
//                 className='btn btn-outline btn-flex flex-column flex-stack pt-9 pb-7 page-bg show rounded-4 me-3'
//                 style={{ width: 148, height: 150 }}
//               >
//                 <div className='mb-3'>
//                   <img src={button.img} className='w-50px' alt='' />
//                 </div>

//                 <div className=''>
//                   <span className='text-gray-800 fw-bold fs-4 d-block'>
//                     {intl.formatMessage({ id: button.title })}
//                   </span>
//                 </div>
//               </button>
//             </div>
//           ))}
//         </Slider>

//         <div className='d-flex justify-content-between mt-2'>
//           <a href='#' className='btn btn-primary' onClick={handlePrev}>
//             &lt;
//           </a>
//           <a href='#' className='btn btn-primary' onClick={handleNext}>
//             &gt;
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default First_Article_Buttons;






















/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState, useRef } from 'react';
// import { buttonsData } from './ButtonsData';
// import { useIntl } from 'react-intl';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// type Props = {
//   className: string;
// };

// const First_Article_Buttons: React.FC<Props> = ({ className }) => {
//   const intl = useIntl();
//   const sliderRef = useRef<Slider>(null);

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     // slidesToShow: buttonsData.length >= 5 ? 5 : buttonsData.length,
//     slidesToShow: 5,
//     slidesToScroll: 2,
//     arrows: true,
//   };

//   return (
//     <div className={`card ${className}`}>
//       <div className='card-body'>

//         <Slider {...settings} className='d-flex flex-nowrap overflow-auto' ref={sliderRef}>

//           {buttonsData.map((button) => (
//             <div key={button.id}>
//               <button
//                 className='btn btn-outline btn-flex flex-column flex-stack pt-9 pb-7 page-bg show rounded-4 me-3'
//                 style={{ width: 148, height: 150 }}
//               >
//                 <div className='mb-3'>
//                   <img src={button.img} className='w-50px' alt='' />
//                 </div>

//                 <div className=''>
//                   <span className='text-gray-800 fw-bold fs-4 d-block'>
//                     {intl.formatMessage({ id: button.title })}
//                   </span>
//                 </div>
//               </button>
//             </div>
//           ))}

//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default First_Article_Buttons;





// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { buttonsData } from './ButtonsData';
// import { useIntl } from 'react-intl';

// type Props = {
//   className: string;
// };

// const First_Article_Buttons: React.FC<Props> = ({ className }) => {
//   const intl = useIntl();

//   return (

//     <Swiper
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={5}
//       slidesPerView='6'
//       navigation
//       // pagination={{ clickable: true }}
//       // scrollbar={{ draggable: false }}
//       // onSwiper={(swiper) => console.log(swiper)}
//       // onSlideChange={() => console.log('slide change')}
//       className={`card ${className}`}
//     >
//       {buttonsData.map((button) => (
//         <SwiperSlide key={button.id}>
//           <button
//             className='btn btn-outline btn-flex flex-column flex-stack pt-9 pb-7 page-bg show rounded-4 me-3'
//             style={{ width: 148, height: 150 }}
//           >
//             <div className='mb-3'>
//               <img src={button.img} className='w-50px' alt='' />
//             </div>

//             <div className=''>
//               <span className='text-gray-800 fw-bold fs-4 d-block'>
//                 {intl.formatMessage({ id: button.title })}
//               </span>
//             </div>
//           </button>
//         </SwiperSlide>
//       ))}
//     </Swiper>

//   );
// };

// export default First_Article_Buttons;


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { buttonsData } from './ButtonsData';
// import { useIntl } from 'react-intl';

// type Props = {
//   className: string;
// };

// const First_Article_Buttons: React.FC<Props> = ({ className }) => {
//   const intl = useIntl();

//   return (
//     <div className={`card ${className}`}>
//       <div className='card-body'>
//         <Swiper
//           modules={[Navigation, Pagination, Scrollbar, A11y]}
//           spaceBetween={10}
//           slidesPerView= '5'
//           navigation
//         // pagination={{ clickable: true }}
//         // scrollbar={{ draggable: false }}
//         // onSwiper={(swiper) => console.log(swiper)}
//         // onSlideChange={() => console.log('slide change')}
//         >
//           {buttonsData.map((button) => (
//             <SwiperSlide key={button.id}>
//               <button
//                 className='btn btn-outline btn-flex flex-column flex-stack pt-9 pb-7 page-bg show rounded-4 me-3'
//                 style={{ width: 148, height: 150 }}
//               >
//                 <div className='mb-3'>
//                   <img src={button.img} className='w-50px' alt='' />
//                 </div>

//                 <div className=''>
//                   <span className='text-gray-800 fw-bold fs-4 d-block'>
//                     {intl.formatMessage({ id: button.title })}
//                   </span>
//                 </div>
//               </button>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default First_Article_Buttons;










/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react'
// import { buttonsData } from './ButtonsData'
// import { useIntl } from 'react-intl'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// type Props = {
//   className: string
// }

// const First_Article_Buttons: React.FC<Props> = ({ className }) => {
//   const intl = useIntl()

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <div className={`card ${className}`}>
//       <div className='card-body'>
//         <div className='nav d-flex justify-content-center gap-10  overflow-auto'>
//           <Slider {...settings}>
//             {buttonsData.map((button) => (
//               <div className='me-0' key={button.id}>
//                 <button
//                   className=' btn btn-outline btn-flex flex-column flex-stack pt-9 pb-7 page-bg show rounded-4'
//                   style={{ width: 148, height: 150 }}
//                 >
//                   <div className='mb-3'>
//                     <img src={button.img} className='w-50px' alt='' />
//                   </div>

//                   <div className=''>
//                     <span className='text-gray-800 fw-bold fs-4 d-block'>
//                       {intl.formatMessage({ id: button.title })}
//                     </span>
//                   </div>
//                 </button>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default First_Article_Buttons




// import React, { useState, useRef } from 'react';
// import { buttonsData } from './ButtonsData';
// import { useIntl } from 'react-intl';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// type Props = {
//   className: string;
// };

// const First_Article_Buttons: React.FC<Props> = ({ className }) => {
//   const intl = useIntl();
//   // const [currentIndex, setCurrentIndex] = useState(0);
//   const sliderRef = useRef<Slider>(null);

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: buttonsData.length >= 5 ? 5 : buttonsData.length,
//     slidesToScroll: 2,
//     arrows: true,
//   };

//   const handlePrev = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     e.preventDefault();
//     if (sliderRef.current) {
//       sliderRef.current.slickPrev();
//     }
//   };

//   const handleNext = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     e.preventDefault();
//     if (sliderRef.current) {
//       sliderRef.current.slickNext();
//     }
//   };

//   return (
//     <div className={`card ${className}`}>
//       <div className='card-body'>

//         <Slider {...settings} className='d-flex flex-nowrap overflow-auto' ref={sliderRef}>

//           {buttonsData.map((button) => (
//             <div key={button.id}>
//               <button
//                 className='btn btn-outline btn-flex flex-column flex-stack pt-9 pb-7 page-bg show rounded-4 me-3'
//                 style={{ width: 148, height: 150 }}
//               >
//                 <div className='mb-3'>
//                   <img src={button.img} className='w-50px' alt='' />
//                 </div>

//                 <div className=''>
//                   <span className='text-gray-800 fw-bold fs-4 d-block'>
//                     {intl.formatMessage({ id: button.title })}
//                   </span>
//                 </div>
//               </button>
//             </div>
//           ))}

//         </Slider>

//         <div className='d-flex justify-content-between mt-2'>
//           <a href='#' className='btn ' onClick={handlePrev}>
//             &lt;
//           </a>
//           <a href='#' className='btn ' onClick={handleNext}>
//             &gt;
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default First_Article_Buttons;










// const First_Article_Buttons: React.FC<Props> = ({ className }) => {
//   const intl = useIntl();

//   return (
//     <div className={`card ${className}`}>
//       <div className='card-body'>
//         <Swiper
//           modules={[Navigation, Pagination, Scrollbar, A11y]}
//           spaceBetween={10}
//           slidesPerView='5'
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           }}
//           // style={{paddingLeft: '50px'}}
//         >
//           {buttonsData.map((button) => (
//             <SwiperSlide key={button.id}>
//               <button
//                 className='btn btn-outline btn-flex flex-column flex-stack pt-9 pb-7 page-bg show rounded-4 me-3'
//                 style={{ width: 148, height: 150 }}
//               >
//                 <div className='mb-3'>
//                   <img src={button.img} className='w-50px' alt='' />
//                 </div>

//                 <div className=''>
//                   <span className='text-gray-800 fw-bold fs-4 d-block'>
//                     {intl.formatMessage({ id: button.title })}
//                   </span>
//                 </div>
//               </button>
//             </SwiperSlide>
//           ))}
//           <div className='swiper-button-next' style={{ color: 'black', transform: 'scale(0.5)' }}></div>
//           <div className='swiper-button-prev' style={{ color: 'black', transform: 'scale(0.5)' }}></div>
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default First_Article_Buttons;









// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { buttonsData } from './ButtonsData';
// import { useIntl } from 'react-intl';

// type Props = {
//   className: string;
//   prefix: string;
// };

// const First_Article_Buttons: React.FC<Props> = ({ className, prefix }) => {
//   const intl = useIntl();
//   return (
//     <div className={`card ${className}`}>
//       <div className='card-body' style={{ position: 'relative', margin: '0 20px', padding:'2rem 4rem' }}>
//         <div className={`swiper-button-next ${prefix}-swiper-button-next`} style={{ color: 'black', fontWeight: 'bold', transform: 'scale(0.3)', position: 'absolute', right: 0, top: '50%' }}></div>
//         <div className={`swiper-button-prev ${prefix}-swiper-button-prev`} style={{ color: 'black', fontWeight: 'bold', transform: 'scale(0.3)', position: 'absolute', left: 0, top: '50%' }}></div>
//         <Swiper
//           modules={[Navigation, Pagination, Scrollbar, A11y]}
//           spaceBetween={10}
//           slidesPerView={5}
//           navigation={{
//             nextEl: `.${prefix}-swiper-button-next`,
//             prevEl: `.${prefix}-swiper-button-prev`,
//           }}
//           style={{ textAlign: 'center' }}
//         >
//           {buttonsData.map((button, index) => (
//             <SwiperSlide key={`${prefix}-${button.id}`}>
//               <button
//                 className={`btn btn-outline btn-flex flex-column  pt-9 pb-7 page-bg show rounded-4 `}
//                 style={{ width: 148, height: 150, border: '1.58px solid #D8D8E5' }}
//               >
//                 <div className='mb-3'>
//                   <img src={button.img} className='w-50px' alt='' />
//                 </div>
//                 <div className=''>
//                   <span className='text-gray-800 fw-bold d-block pt-1' style={{ fontSize: '18px', lineHeight: '22px'}}>
//                     {intl.formatMessage({ id: button.title })}
//                   </span>
//                 </div>
//               </button>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default First_Article_Buttons;
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { buttonsData } from './ButtonsData';
import { useIntl } from 'react-intl';

type Props = {
  className: string;
  prefix: string;
};

const First_Article_Buttons: React.FC<Props> = ({ className, prefix }) => {
  const intl = useIntl();
  const [clickedButton, setClickedButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setClickedButton(index);
  };

  return (
    <div className={`card ${className}`}>
      <div className='card-body' style={{ position: 'relative', margin: '0 20px', padding: '2rem 4rem' }}>
        <div className={`swiper-button-next ${prefix}-swiper-button-next`} style={{ color: 'black', fontWeight: 'bold', transform: 'scale(0.3)', position: 'absolute', right: 0, top: '50%' }}></div>
        <div className={`swiper-button-prev ${prefix}-swiper-button-prev`} style={{ color: 'black', fontWeight: 'bold', transform: 'scale(0.3)', position: 'absolute', left: 0, top: '50%' }}></div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation={{
            nextEl: `.${prefix}-swiper-button-next`,
            prevEl: `.${prefix}-swiper-button-prev`,
          }}
          style={{ textAlign: 'center' }}
        >
          {buttonsData.map((button, index) => (
            <SwiperSlide key={`${prefix}-${button.id}`}>
              <button
                className={`btn btn-outline btn-flex flex-column pt-9 pb-7 page-bg show rounded-4`}
                style={{
                  width: 148,
                  height: 150,
                  // border: `3px solid ${clickedButton === index ? '#007bff' : '#D8D8E5'}`,
                  border: clickedButton === index ? '3.45px solid #3E97FF' : '1.58px solid #D8D8E5',
                }}
                onClick={() => handleButtonClick(index)}
              >
                <div className='mb-3'>
                  <img src={button.img} className='w-50px' alt='' />
                </div>
                <div className=''>
                  <span className='text-gray-800 fw-bold d-block pt-1' style={{ fontSize: '18px', lineHeight: '22px' }}>
                    {intl.formatMessage({ id: button.title })}
                  </span>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default First_Article_Buttons;
