import { useRef } from "react";
import DisplaySection from "./components/DisplaySection";
import Nav from "./components/Nav";
import SoundSection from "./components/SoundSection";
import Jumbotron from "./components/ThreeDModel";
import WebGiViewer from "./components/WebGiViewer";
import Loader from "./components/Loader";

function App() {
  const webGiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webGiViewerRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebGiViewer contentRef={contentRef} ref={webGiViewerRef} />
    </div>
  );
}

export default App;
