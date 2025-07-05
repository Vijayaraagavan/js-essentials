const sendMessage = () => {
  const userId = document.getElementById("user-id");
  const channel = document.getElementById("channel");
  console.log(userId.value);
  setLocalVideo()
};

const setLocalVideo = () => {
  const video = document.getElementById("local-video");
  const constraints = {
    video: {
      width: { ideal: 1280 },
      height: { ideal: 720 },
      frameRate: { ideal: 30 },
    },
    audio: true,
  };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
        video.src = stream
    })
    .catch((err) => {
      console.log("failed to get mediadevices", err);
    });
};
