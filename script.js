const testimonialData = [
  {
    name: "Tony Stark",
    status: "Managing Director",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, nemo distinctio alias accusamus ea blanditiis, harum quidem quae ipsum magnam, nam voluptas! Nostrum possimus, enim tenetur sit voluptas vel eius.",
  },
  {
    name: "Favour Olaleru",
    status: "Web Developer",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, nemo distinctio alias accusamus ea blanditiis, harum quidem quae ipsum magnam, nam voluptas! Nostrum possimus, enim tenetur sit voluptas vel eius.",
  },
  {
    name: "David Brown",
    status: "BasketBall Coach",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, nemo distinctio alias accusamus ea blanditiis, harum quidem quae ipsum magnam, nam voluptas! Nostrum possimus, enim tenetur sit voluptas vel eius.",
  },
  {
    name: "Mount Daniels",
    status: "Sporting Director",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, nemo distinctio alias accusamus ea blanditiis, harum quidem quae ipsum magnam, nam voluptas! Nostrum possimus, enim tenetur sit voluptas vel eius.",
  },
  {
    name: "Jose DeGeneral",
    status: "Athlete",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, nemo distinctio alias accusamus ea blanditiis, harum quidem quae ipsum magnam, nam voluptas! Nostrum possimus, enim tenetur sit voluptas vel eius.",
  },
  {
    name: "Steve Rogers",
    status: "American Hero",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, nemo distinctio alias accusamus ea blanditiis, harum quidem quae ipsum magnam, nam voluptas! Nostrum possimus, enim tenetur sit voluptas vel eius.",
  },
];

const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");
const testName = document.getElementById("test-name");
const testStatus = document.getElementById("test-status");
const testText = document.getElementById("test-text");
var index = 0;
buttonLeft.addEventListener("click", swipeBack);
buttonRight.addEventListener("click", swipeForward);

testName.innerText = testimonialData[index].name;
testStatus.innerText = testimonialData[index].status;
testText.innerText = testimonialData[index].text;

function swipeForward() {
  index = index + 1;
  if (index > testimonialData.length - 1) {
    index = 0;
  }
  testName.innerText = testimonialData[index].name;
  testStatus.innerText = testimonialData[index].status;
  testText.innerText = testimonialData[index].text;
}
function swipeBack() {
  index = index - 1;
  if (index < 0) {
    index = testimonialData.length - 1;
  }
  testName.innerText = testimonialData[index].name;
  testStatus.innerText = testimonialData[index].status;
  testText.innerText = testimonialData[index].text;
}
