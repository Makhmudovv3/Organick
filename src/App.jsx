import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Subscribe from './pages/Footer/Subscribe';
import Footer from './pages/Footer/Footer';
import './index.css';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import Licenses from './pages/Licenses/Licenses';
import Changelog from './pages/Changelog/Changelog';
import Protected from './pages/PasswordProtect/Protected';

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Shop = lazy(() => import('./pages/Shop/Shop'));
const ShopSingle = lazy(() => import('./pages/ShopSingle/ShopSingle'));
const Services = lazy(() => import('./pages/Service/Service'));
const ServiceSingle = lazy(() => import('./pages/ServiceSingle/ServiceSingle'));
const Portfolio = lazy(() => import('./pages/Porfolio/Portfolio'));
const PortfolioSingle = lazy(() => import('./pages/PortfolioSingle/PortfolioSingle'));
const Team = lazy(() => import('./pages/Team/Team'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const BlogSingle = lazy(() => import('./pages/BlogSingle/BlogSingle'));



const PageLoader = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>Yuklanmoqda...</div>
);

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ShopSingle />} />
            <Route path="/service" element={<Services />} />
            <Route path="/service-single" element={<ServiceSingle />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioSingle />} />
            <Route path="/team" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogSingle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/licenses" element={<Licenses />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/protected" element={<Protected />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;