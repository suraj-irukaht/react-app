import './form.scss';
import Search from './Search';
import Select from 'react-select';
const options = [
   { value: 'value-1', label: 'Value 1' },
   { value: 'value-1', label: 'Value 2' },
   { value: 'value-3', label: 'Value 3' },
];
const options2 = [
   { value: 'value-1', label: 'Value 1' },
   { value: 'value-2', label: 'Value 2' },
   { value: 'value-3', label: 'Value 3' },
];

const Form = () => {
   const selectStyles = {
      control: (base) => ({
         ...base,
         backgroundColor: '#303033',
         border: 0,
         minHeight: '56px',
         color: '#fff',
         borderRadius: '10px',
         cursor: 'pointer',
      }),
      placeholder: (base) => ({
         ...base,
         color: '#fff',
      }),
      option: (base) => ({
         ...base,
         backgroundColor: '#303033',
         color: '#fff',
         cursor: 'pointer',
      }),
   };
   return (
      <>
         <section className="filter">
            <div className="container">
               <form action="#">
                  <div className="select-box">
                     <div className="form-group">
                        <Select
                           className="react-select-container"
                           classNamePrefix="react-select"
                           options={options}
                           styles={selectStyles}
                           placeholder={'Categories'}
                        />
                     </div>
                     <div className="form-group">
                        <Select
                           className="react-select-container"
                           classNamePrefix="react-select"
                           options={options2}
                           styles={selectStyles}
                           placeholder={'Tags'}
                        />
                     </div>
                  </div>
                  <div className="form-input-wrap">
                     <Search placeHolder={'Search Articles'} />
                  </div>
               </form>
            </div>
         </section>
      </>
   );
};

export default Form;
