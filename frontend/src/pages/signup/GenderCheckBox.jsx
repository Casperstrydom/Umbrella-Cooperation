export const GenderCheckBox = ({ onCheckboxChange,selectedGender}) => {
    return (
      <div className="flex gap-4">
        {/* Male Checkbox */}
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}` }>
            <span className="label-text">Male</span>
            <input type="checkbox" className="checkbox border-slate-900" 
              checked={selectedGender === 'male'}
              onChange={() => onCheckboxChange('male')}
            />
          </label>
        </div>
  
        {/* Female Checkbox */}
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}` }>
            <span className="label-text">Female</span>
            <input type="checkbox" className="checkbox border-slate-900" 
             checked={selectedGender === 'female'}
              onChange={() => onCheckboxChange('female')}
            />
          </label>
        </div>
      </div>
    );
  };
  
  export default GenderCheckBox;



  //STARTER CODE FOR THIS FILE

//   export const GenderCheckBox = () => {
//     return (
//       <div className="flex gap-4">
//         {/* Male Checkbox */}
//         <div className="form-control">
//           <label className="label gap-2 cursor-pointer">
//             <span className="label-text">Male</span>
//             <input type="checkbox" className="checkbox border-slate-900" />
//           </label>
//         </div>
  
//         {/* Female Checkbox */}
//         <div className="form-control">
//           <label className="label gap-2 cursor-pointer">
//             <span className="label-text">Female</span>
//             <input type="checkbox" className="checkbox border-slate-900" />
//           </label>
//         </div>
//       </div>
//     );
//   };
  
//   export default GenderCheckBox;