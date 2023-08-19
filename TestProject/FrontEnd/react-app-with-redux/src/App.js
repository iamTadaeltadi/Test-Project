import React, { useEffect } from 'react';
import SongList from './components/SongList';
import SongFormModal from "./components/SongForm"

function App() {

  
  return (
    <div className="App">
      {/* <SongFormModal/> */}
      <SongList />
    </div>
  );
}

export default App;
// import React, { useState } from 'react';

// function App() {
//   const [base64Encoded, setBase64Encoded] = useState('');

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onload = (e) => {
//         const base64EncodedImage = e.target.result.split(',')[1];
//         setBase64Encoded(base64EncodedImage);
//       };

//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div>
//       <h1>Image to Base64 Encoder</h1>
//       <input type="file" accept="image/*" onChange={handleImageUpload} />
//       <div>
//         <h2>Base64 Encoded Image Data:</h2>
//         <textarea rows="10" cols="50" value={base64Encoded} readOnly />
//       </div>
//     </div>
//   );
// }

// export default App;
