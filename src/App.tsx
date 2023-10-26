import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { PageOne, PageTwo } from './Components/Pages';
import {HomePage} from './pages/HomePage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
				<Route path='/' element={<HomePage />}>
					<Route index element={<div>not found</div>} />
					<Route path="one" element={<PageOne />} />
					<Route path="two" element={<PageTwo />} />
				</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;