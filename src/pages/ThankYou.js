import {} from "../resources/data/text.js";
import { TitleText } from "../components/StyledText.js";

export default function ThankYou() {
  return (
    <div id="content">
      <TitleText
        text={
          "Thank You, your registration for [date] [location] [class] has been placed"
        }
      />
      <div> Your credit card has been charged [cost]</div>
      <div>
        Please check your email for registration confirmation and course
        details.
      </div>
      <div>
        If you do not receive an email confirmation in one day, please contact
        Ross at Ross@captainsschool.com or (910) 547-3689
      </div>
    </div>
  );
}
