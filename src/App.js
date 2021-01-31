import './App.css';

import {VideoContext} from './data/video/VideoContext';
import VideoList from './ui/VideoList';
import NewVideoForm from './ui/NewVideoForm';
import VideoPlayer from './ui/VideoPlayer';

function App() {
  return (
    <div className="App">
      <VideoContext>
        <NewVideoForm />
        <VideoPlayer />
        <VideoList />
      </VideoContext>
      
    </div>
  );
}

export default App;
