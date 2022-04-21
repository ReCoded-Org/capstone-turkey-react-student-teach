import Answer from '../../Answer/Answer';
import questionPhoto from '../../../assets/images/questionImage.png';

function LatestAnswers() {
  return (
    <div>
      <Answer username="Ali Saleh" image={questionPhoto} />
      <Answer username="Ali Saleh" image={questionPhoto} />
      <Answer username="Ali Saleh" image={questionPhoto} />
    </div>
  );
}

export default LatestAnswers;
