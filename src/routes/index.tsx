import About from '~/components/About/About';
import Contact from '~/components/Contact/Contact';
import Experience from '~/components/Experience/Experience';
import Home from '~/components/Home/Home';
import Layout from '~/components/Layout/Layout';
import Projects from '~/components/Projects/Projects';

export default function Index() {
  return (
    <Layout>
      <Home id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Experience id="experience" />
      <Contact id="contact" />
    </Layout>
  );
}
