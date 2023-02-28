// import Greattings from './components/iu/greattings/Greattings';
import {Routes, Route} from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { HeaderHome } from './components/layouts/HeaderHome/HeaderHome'
import { Tweets } from './components/pages/tweet/Tweets';

function App() {
  return (
    <div>
      <HeaderHome />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Tweet' element={<Tweets />}/>
      </Routes>
    </div>
  );
}

export default App;
