
import FullName from './Component/Profile/FullName.js';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js';
import Address from './Component/Profile/Address.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <div className='ext'>
      <FullName/>
      <Address/>
      </div>


      
    </div>
  );
}

export default App;
