import Header from '../../components/Header';
import PresentationContainer from '../../components/PresentationContainer';
import Citation from '../../components/Citation';
import Technologys from '../../components/Technologys';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <PresentationContainer />\
      <Citation />
      <Technologys />
      <Projects />
      <Footer />
    </>
  );
}
