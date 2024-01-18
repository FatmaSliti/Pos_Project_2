// import React, { useState } from 'react'
// import { ButtonsData } from './ButtonsData'
// import { useIntl } from 'react-intl'
// import BarrierSection from './BarrierSection/BarrierSection'
// import { useSelector } from 'react-redux'

// const Control_Buttons: React.FC = () => {
//   const [showBarrierSection, setShowBarrierSection] = useState(false)
//   const { ink_status } = useSelector((state: any) => state.Websocket_Reducers)
//   const status = ink_status?.ink_status

//   const handleButtonClick = (icon) => {
//     if (icon.title === 'Barrier') {
//     }

//     setShowBarrierSection(icon)
//   }

//   const intl = useIntl()
//   const dynamicButtonsData = ButtonsData(status);

//   return (
//     <>
//       <div className='card mb-5 shadow-sm'>
//         <div
//           className='d-flex flex-equal gap-4 px-4 py-4'
//           data-kt-buttons='true'
//           data-kt-buttons-target='[data-kt-button]'
//         >
//           {dynamicButtonsData.map((data, index: number) => (
//             <label
//               key={index}
//               data-bs-target='#kt_accordion_1_body_1'
//               data-bs-toggle='collapse'
//               className='btn btn-color-gray-600 w-100  py-5 ' 
//               style={{ backgroundColor: '#F1F1F2'}}
//               onClick={handleButtonClick}
//             >
//               <input className='btn-check' type='radio' name='method' defaultValue={0} />

//               <img src={data.img} alt='imagee' />

//               <span className=' fw-bold d-block' style={{ fontSize: '16px' }}>{intl.formatMessage({ id: data.title })}</span>
//             </label>
//           ))}
//         </div>
//       </div>
//       <div id='kt_accordion_1_body_1' className='accordion-collapse collapse'>
//         <BarrierSection />
//       </div>
//     </>
//   )
// }

// export default Control_Buttons
// import React, { useState } from 'react';
// import { ButtonsData } from './ButtonsData';
// import { useIntl } from 'react-intl';
// import BarrierSection from './BarrierSection/BarrierSection';
// import { useSelector } from 'react-redux';

// const Control_Buttons: React.FC = () => {
//   const [selectedButton, setSelectedButton] = useState(null);
//   const [showBarrierSection, setShowBarrierSection] = useState(false);
//   const { ink_status } = useSelector((state: any) => state.Websocket_Reducers);
//   const status = ink_status?.ink_status;

//   const handleButtonClick = (icon) => {
//     // If the clicked button is the first one (Barrier), open the BarrierSection modal
//     if (icon.title === 'CHEKOUT.BARRIER.BUTTON') {
//       setShowBarrierSection(true);
//     }

//     // Always update the selectedButton state
//     setSelectedButton(icon);
//   };

//   const intl = useIntl();
//   const dynamicButtonsData = ButtonsData(status);

//   return (
//     <>
//       <div className='card mb-5 shadow-sm'>
//         <div
//           className='d-flex flex-equal gap-4 px-4 py-4'
//           data-kt-buttons='true'
//           data-kt-buttons-target='[data-kt-button]'
//         >
//           {dynamicButtonsData.map((data, index: number) => (
//             <label
//               key={index}
//               data-bs-target='#kt_accordion_1_body_1'
//               data-bs-toggle='collapse'
//               className={`btn btn-color-gray-600 w-100 py-5 ${selectedButton === data ? 'clicked' : ''
//                 }`}
//               style={{ backgroundColor: '#F1F1F2' }}
//               onClick={() => handleButtonClick(data)}
//             >
//               <input className='btn-check' type='radio' name='method' defaultValue={0} />

//               <img src={data.img} alt='imagee' />

//               <span className=' fw-bold d-block' style={{ fontSize: '16px' }}>
//                 {intl.formatMessage({ id: data.title })}
//               </span>
//             </label>
//           ))}
//         </div>
//       </div>
//       <div id='kt_accordion_1_body_1' className='accordion-collapse collapse'>
//         {showBarrierSection && <BarrierSection />}
//       </div>
//     </>
//   );
// };

// export default Control_Buttons;
// import React, { useState } from 'react';
// import { ButtonsData } from './ButtonsData';
// import { useIntl } from 'react-intl';
// import BarrierSection from './BarrierSection/BarrierSection';
// import { useSelector } from 'react-redux';


// interface ButtonData {
//   title: string;
//   img: string;
// }

// const Control_Buttons: React.FC = () => {
//   const [selectedButton, setSelectedButton] = useState<ButtonData | null>(null);
//   const { ink_status } = useSelector((state: any) => state.Websocket_Reducers);
//   const status = ink_status?.ink_status;

//   const handleButtonClick = (icon: ButtonData) => {
//     // If the clicked button is the first one (Barrier), show the BarrierSection modal
//     if (icon.title === 'CHEKOUT.BARRIER.BUTTON') {
//       setSelectedButton(icon);
//     } else {
//       // For other buttons, just update the selectedButton state
//       setSelectedButton(icon);
//     }
//   };

//   const intl = useIntl();
//   const dynamicButtonsData: ButtonData[] = ButtonsData(status);

//   return (
//     <>
//       <div className='card mb-5 shadow-sm'>
//         <div
//           className='d-flex flex-equal gap-4 px-4 py-4'
//           data-kt-buttons='true'
//           data-kt-buttons-target='[data-kt-button]'
//         >
//           {dynamicButtonsData.map((data, index: number) => (
//             <label
//               key={index}
//               className={`btn btn-color-gray-600 w-100 py-5 ${selectedButton === data ? 'clicked' : ''
//                 }`}
//               style={{ backgroundColor: '#F1F1F2' }}
//               onClick={() => handleButtonClick(data)}
//             >
//               <input className='btn-check' type='radio' name='method' defaultValue={0} />

//               <img src={data.img} alt='imagee' />

//               <span className=' fw-bold d-block' style={{ fontSize: '16px' }}>
//                 {intl.formatMessage({ id: data.title })}
//               </span>
//             </label>
//           ))}
//         </div>
//       </div>
//       {selectedButton?.title === 'CHEKOUT.BARRIER.BUTTON' && <BarrierSection />}
//     </>
//   );
// };

// export default Control_Buttons;











// import React, { useState } from 'react';
// import { ButtonsData } from './ButtonsData';
// import { useIntl } from 'react-intl';
// import BarrierSection from './BarrierSection/BarrierSection';
// import { useSelector } from 'react-redux';

// interface ButtonData {
//   title: string;
//   img: string;
// }

// const Control_Buttons: React.FC = () => {
//   const [selectedButton, setSelectedButton] = useState<ButtonData | null>(null);
//   const { ink_status } = useSelector((state: any) => state.Websocket_Reducers);
//   const status = ink_status?.ink_status;

//   const handleButtonClick = (icon: ButtonData) => {
//     setSelectedButton(icon);
//   };

//   const intl = useIntl();
//   const dynamicButtonsData: ButtonData[] = ButtonsData(status);

//   return (
//     <>
//       <div className='card mb-5 shadow-sm'>
//         <div
//           className='d-flex flex-equal gap-4 px-4 py-4'
//           data-kt-buttons='true'
//           data-kt-buttons-target='[data-kt-button]'
//         >
//           {dynamicButtonsData.map((data, index: number) => (
//             <label
//               key={index}
//               className={`btn btn-color-gray-600 w-100 py-5 ${selectedButton === data ? 'clicked' : ''
//                 }`}
//               style={{
//                 backgroundColor: '#F1F1F2',
//                 border: selectedButton === data ? '3px solid blue' : 'none',
//               }}
//               onClick={() => handleButtonClick(data)}
//             >
//               <input className='btn-check' type='radio' name='method' defaultValue={0} />

//               <img src={data.img} alt='imagee' />

//               <span className='fw-bold d-block' style={{ fontSize: '16px' }}>
//                 {intl.formatMessage({ id: data.title })}
//               </span>
//             </label>
//           ))}
//         </div>
//       </div>
//       {selectedButton?.title === 'CHEKOUT.BARRIER.BUTTON' && <BarrierSection />}
//     </>
//   );
// };

// export default Control_Buttons;
import React, { useState } from 'react';
import { ButtonsData } from './ButtonsData';
import { useIntl } from 'react-intl';
import BarrierSection from './BarrierSection/BarrierSection';
import { useSelector } from 'react-redux';

interface ButtonData {
  title: string;
  img: string;
}

const Control_Buttons: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const { ink_status } = useSelector((state: any) => state.Websocket_Reducers);
  const status = ink_status?.ink_status;

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  const intl = useIntl();
  const dynamicButtonsData: ButtonData[] = ButtonsData(status);

  return (
    <>
      <div className='card mb-5 shadow-sm'>
        <div
          className='d-flex flex-equal gap-4 px-4 py-4'
          data-kt-buttons='true'
          data-kt-buttons-target='[data-kt-button]'
        >
          {dynamicButtonsData.map((data, index: number) => (
            <label
              key={index}
              className={`btn btn-color-gray-600 w-100 py-5 ${selectedButton === index ? 'clicked' : ''
                }`}
              style={{
                backgroundColor: selectedButton === index ? '#EEF6FF' : '#F1F1F2',
                border: selectedButton === index ? '2px solid #3E97FF' : 'gray',
                color: selectedButton === index ? '#3E97FF' : 'gray',
                // color: '#3E97FF'
              }}
              onClick={() => handleButtonClick(index)}
            >
              <input className='btn-check' type='radio' name='method' defaultValue={0} />

              <img src={data.img} alt='imagee' />

              <span className='fw-bold d-block' style={{ fontSize: '16px' }}>
                {intl.formatMessage({ id: data.title })}
              </span>
            </label>
          ))}
        </div>
      </div>
      {selectedButton === 0 && <BarrierSection />}
    </>
  );
};

export default Control_Buttons;
