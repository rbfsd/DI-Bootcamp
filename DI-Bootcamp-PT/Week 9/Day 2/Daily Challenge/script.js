// Daily Challenge : Creating Objects

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(
      `${this.uploader} watched all ${this.time} seconds of '${this.title}'!`
    );
  }
}

// Instantiate a new Video instance and call the watch() method
const firstVideo = new Video('Introduction to JavaScript', 'JohnDoe123', 300);
firstVideo.watch();
const secondVideo = new Video('HTML Basics', 'JaneSmith456', 200);
secondVideo.watch();

// Bonus: Use an array to store data for five Video instances
const videoArray = [
    { title: 'CSS Fundamentals', uploader: 'AliceWonder789', time: 250 },
    { title: 'JavaScript Advanced Techniques', uploader: 'BobCoder567', time: 400 },
    { title: 'Web Design Principles', uploader: 'EveDesigner123', time: 180 },
    { title: 'React.js Basics', uploader: 'SamReactDev', time: 350 },
    { title: 'Node.js Crash Course', uploader: 'TomNodeMaster', time: 280 }
  ];
  
  // Bonus: Loop through the array to instantiate those instances
  const videoInstances = videoArray.map(video => new Video(video.title, video.uploader, video.time));
  
  // Bonus: Call the watch method for each instance
  videoInstances.forEach(video => video.watc