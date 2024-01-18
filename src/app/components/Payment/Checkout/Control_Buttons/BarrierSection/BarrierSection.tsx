import React, { useState } from 'react'
import { ButtonsData } from '../BarrierSection/ButtonsData'
import { useIntl } from 'react-intl'


// const BarrierSection: React.FC = () => {
//   const intl = useIntl()

interface Icon {
  img: string
  title: string
}

//   const renderIconRow = (icons: Icon[]) => (
//     <div className='row'>
//       {icons.map((icon: Icon, index: number) => (
//         <div key={index} className='col-md-6 my-1'>
//           <label
//             // className='btn btn-outline btn-active-color-primary btn-active-light-primary border-1  w-100 p-4 d-flex justify-content-center align-items-center gap-3 '
//             className='btn btn-outline border-1  w-100 p-4 d-flex justify-content-center align-items-center gap-3 '
//             style={{ border: '1px solid #D8D8E5'}}
//             data-kt-button='true'
//           >
//             <img src={icon.img} alt='' className='icon-img' />
//             <span className=' fw-bold' style={{ fontSize: '14px'}}>{intl.formatMessage({id: icon.title})}</span>
//           </label>
//         </div>
//       ))}
//     </div>
//   )

//   return (
//     <>
//       <div className='card mb-5 shadow-sm '>
//         <div
//           className='d-flex flex-column gap-xxl-0 px-4 py-4'
//           data-kt-buttons='true'
//           data-kt-buttons-target='[data-kt-button]'
//         >
//           {renderIconRow(ButtonsData.slice(0, 2))}
//           {renderIconRow(ButtonsData.slice(2, 4))}
//         </div>
//       </div>
//       <div className='modal fade" tabIndex={-1}' id='kt_modal_1'>
//         <div className='modal-dialog modal-dialog-centered mw-900px'>
//           <div className='modal-content'></div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default BarrierSection

// const BarrierSection: React.FC = () => {
//   const intl = useIntl();
//   const [clickedButton, setClickedButton] = useState<number | null>(null);

//   interface Icon {
//     img: string;
//     title: string;
//   }

//   const handleButtonClick = (index: number) => {
//     setClickedButton((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const renderIconRow = (icons: Icon[], startIndex: number) => (
//     <div className='row'>
//       {icons.map((icon: Icon, index: number) => (
//         <div key={index} className='col-md-6 my-1'>
//           <label
//             className={`btn w-100 p-4 d-flex justify-content-center align-items-center gap-3 ${clickedButton === startIndex + index ? 'clicked' : ''
//               }`}
//             style={{
//               border: clickedButton === startIndex + index ? '3px solid #3E97FF' : '1px solid #D8D8E5'
//             }}
//             onClick={() => handleButtonClick(startIndex + index)}
//           >
//             <img src={icon.img} alt='' className='icon-img' />
//             <span className='fw-bold' style={{ fontSize: '14px' }}>
//               {intl.formatMessage({ id: icon.title })}
//             </span>
//           </label>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <>
//       <div className='card mb-5 shadow-sm '>
//         <div
//           className='d-flex flex-column gap-xxl-0 px-4 py-4'
//           data-kt-buttons='true'
//           data-kt-buttons-target='[data-kt-button]'
//         >
//           {renderIconRow(ButtonsData.slice(0, 2), 0)}
//           {renderIconRow(ButtonsData.slice(2, 4), 2)}
//         </div>
//       </div>
//       <div className='modal fade" tabIndex={-1}' id='kt_modal_1'>
//         <div className='modal-dialog modal-dialog-centered mw-900px'>
//           <div className='modal-content'></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BarrierSection;

const BarrierSection: React.FC = () => {
  const intl = useIntl();
  const [clickedButton, setClickedButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setClickedButton((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderIconRow = (icons: Icon[], startIndex: number) => (
    <div className='row'>
      {icons.map((icon: Icon, index: number) => (
        <div key={index} className='col-md-6 my-1'>
          <label
            className={`btn w-100 p-4 d-flex justify-content-center align-items-center gap-3 ${clickedButton === startIndex + index ? 'clicked' : ''
              }`}
            style={{
              boxSizing: 'border-box', // Ensure the box-sizing property is set
              border: clickedButton === startIndex + index ? '3px solid #3E97FF' : '1px solid #D8D8E5',
              // transition: 'border-width 0.3s ease-in-out',
            }}
            onClick={() => handleButtonClick(startIndex + index)}
          >
            <img src={icon.img} alt='' className='icon-img' />
            <span className='fw-bold' style={{ fontSize: '14px' }}>
              {intl.formatMessage({ id: icon.title })}
            </span>
          </label>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className='card mb-5 shadow-sm '>
        <div
          className='d-flex flex-column gap-xxl-0 px-4 py-4'
          data-kt-buttons='true'
          data-kt-buttons-target='[data-kt-button]'
        >
          {renderIconRow(ButtonsData.slice(0, 2), 0)}
          {renderIconRow(ButtonsData.slice(2, 4), 2)}
        </div>
      </div>
      <div className='modal fade' tabIndex={-1} id='kt_modal_1'>
        <div className='modal-dialog modal-dialog-centered mw-900px'>
          <div className='modal-content'></div>
        </div>
      </div>
    </>
  );
};

export default BarrierSection;