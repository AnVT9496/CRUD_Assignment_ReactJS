// import React, { useEffect, useState } from 'react';
// import Modal from "react-modal";


// function ModalComponent({isOpen, clickOnModal, onClick, userInputForm }) {
//     console.log("userInputForm",userInputForm)
//     const [userInput, setUserInput] = useState(userInputForm)
//     useEffect(()=>{
//         setUserInput(userInputForm)
//     })
//     const handleChangeInput = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setUserInput({ ...userInput, [name]: value });
//       };

//     return (
//         <div>
//     <Modal
//           isOpen={isOpen}
//           //onRequestClose={clickOnModal}
//           style={{
//             overlay: {
//               backgroundColor: "grey",
//             },
//             content: {
//               color: "orange",
//             },
//           }}
//         >
//           {/* <form> */}
//             <table>
//               <tbody>
//                 <tr>
//                   <th>
//                     <label>Name</label>
//                   </th>
//                   <td>
//                     <input
//                       name="name"
//                       value={userInput.name}
//                       onChange={handleChangeInput}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>
//                     <label>Email</label>
//                   </th>
//                   <td>
//                     <input
//                       name="email"
//                       value={userInput.email}
//                       onChange={handleChangeInput}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>
//                     <label>Role</label>
//                   </th>
//                   <td>
//                     <input
//                       name="role"
//                       value={userInput.role}
//                       onChange={handleChangeInput}
//                     />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <button onClick={()=>onClick(userInput)}>
//               Add
//             </button>
//           {/* </form> */}
//           <button onClick={clickOnModal}>Close</button>
//         </Modal>
//         </div>
//     );
// }

// export default ModalComponent;