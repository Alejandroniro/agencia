import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from './store';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import Error404 from './containers/errors/Error404';
import Home from './containers/pages/Home';
import Destination from 'containers/pages/Destination';
import About from 'containers/pages/About';
import Tour from 'containers/pages/Tour';
import Blog from 'containers/pages/Blog';


function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Trabook | Travel Agency</title>
        <meta name='description' content='Agencia de viajes'/>
        <link rel='canonical' href='dominio.com'></link>
        <meta name='description' content='Agencia de viajes'/>
      </Helmet>
      <Provider store={store}>

        <Router>
          <Routes>
            {/* Error Display */}
            <Route path="*" element={<Error404 />} />

            {/* Home Display */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
