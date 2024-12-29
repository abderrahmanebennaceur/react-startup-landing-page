
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import CodeEditorFeature from './components/sections/CodeEditorFeature'
import CollaborationFeature from './components/sections/CollaborationFeature'
import EasyToUse from './components/sections/EasyToUse'
import FeaturedDevelopers from './components/sections/FeaturedDevelopers'
import GrowingMetabox from './components/sections/GrowingMetabox'
import Hero from './components/sections/Hero'
import OurPlatform from './components/sections/OurPlatform'
import Showcase from './components/sections/Showcase'
import StartCoding from './components/sections/StartCoding'
import Testimonial from './components/sections/Testimonial'
import Trial from './components/sections/Trial'
import TrustedBy from './components/sections/TrustedBy'

const App = () => {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-black  dark:bg-dot-white/[0.2] bg-dot-white/[0.2] relative flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Showcase />
      <CodeEditorFeature />
      <OurPlatform />
      <CollaborationFeature />
      <EasyToUse />
      <FeaturedDevelopers />
      <StartCoding />
      <GrowingMetabox />
      <Testimonial />
      <Trial />
      <Footer />
    </div>
  )
}

export default App