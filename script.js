const hiringRadio = document.querySelector('input[value="Hiring"]');
const hourlyRateLabel = document.getElementById("hourlyRateLabel");
const hourlyRateContainer = document.getElementById("hourlyRateContainer");
const questionCommentLabel = document.getElementById("question/commentLabel");
const questionCommentContainer = document.getElementById(
  "question/commentContainer"
);

const radios = document.querySelectorAll('input[name="contact-type"]');
radios.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (this.value === "Question") {
      questionCommentLabel.style.display = "inline";
      questionCommentContainer.style.display = "inline-block";
      hourlyRateLabel.style.display = "none";
      hourlyRateContainer.style.display = "none";
      warningMessage.style.display = "none";
    }
    if (this.value === "Comment") {
      questionCommentLabel.style.display = "inline";
      questionCommentContainer.style.display = "inline-block";
      hourlyRateLabel.style.display = "none";
      hourlyRateContainer.style.display = "none";
      warningMessage.style.display = "none";
    }
    if (this.value === "Hiring") {
      hourlyRateLabel.style.display = "inline";
      hourlyRateContainer.style.display = "inline-block";
      questionCommentLabel.style.display = "none";
      questionCommentContainer.style.display = "none";
    }
  });
});

function checkHourlyRate() {
  var hourlyRateInput = document.getElementById("hourlyRateContainer");
  var value = parseFloat(hourlyRateInput.value);
  if (value < 16) {
    alert("Illegal!!! Hourly rate should be at least $16/hr!!!!!!");
    hourlyRateInput.value = "";
  }
}
