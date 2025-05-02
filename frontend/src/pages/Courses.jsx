//main link: https://www.googleapis.com/youtube/v3
//API Key: AIzaSyD-WL6Uh7BYFvaLt9DKfXyLi3bd0oLZs64
//full request: https://www.googleapis.com/youtube/v3/search?key={your-api-key}&channelId={channel-id-here}&part=snippet,id&order=date&maxResults={number}

import Sidebar from "../components/Sidebar";

const Courses = () => {
  return (
    <>
      <div>
        <Sidebar />
      </div>
    </>
  );
};
export default Courses;
