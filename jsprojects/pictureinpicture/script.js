"strict";

//show webcam
const button = document.getElementById("button");

button.addEventListener("click", async () => {
    const video = document.createElement("video");
    video.muted = true;
    video.srcObject = await navigator.mediaDevices.getUserMedia({
        video: true
    });
    video.play();
    video.addEventListener("loadedmetadata", () => {
        video.requestPictureInPicture().catch(console.error);
    });
});

// const videoElement = document.getElementById("video");
// const button = document.getElementById("button");

// const displayMediaOptions = {
//     video: {
//         displaySurface: "browser"
//     },
//     audio: {
//         suppressLocalAudioPlayback: false
//     },
//     preferCurrentTab: false,
//     selfBrowserSurface: "exclude",
//     systemAudio: "include",
//     surfaceSwitching: "include",
//     monitorTypeSurfaces: "include"
// };

// //Prompt to select media stream
// async function selectMediaStream() {
//     try {
//         videoElement.srcObject = await navigator.mediaDevices.getDisplayMedia(
//             displayMediaOptions
//         );
//         videoElement.play();
//         // videoElement.addEventListener("loadedmetadata", () => {
//         //     videoElement.requestPictureInPicture().catch(console.error);
//         // });
//     } catch (error) {
//         alert(error);
//     }
// }

// async function pip() {
//     // Disable Button
//     button.disabled = true;
//     //Start Picture-in-Picture
//     await videoElement.requestPictureInPicture();
//     //reset button
//     button.disabled = false;
// }

// button.addEventListener("click", function (e) {
//     pip();
// });

// //Mainline
// selectMediaStream();
