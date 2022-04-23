import Question from '../../Question/Question';
import questionPhoto from '../../../assets/images/questionImage.png';
import personPhoto from '../../../assets/images/avatar.jpg';

function LatestQuestions() {
  const data = {
    id: 1,
    avatar: personPhoto,
    questionImage: questionPhoto,
    name: 'Maria1223',
    questionTitle: 'Lorem Ipsum is simply dummy ',
    questionText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 1500s test clamp data classname Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 1500s test clamp data classname Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 1500s test clamp data classname',
  };
  return (
    <div>
      <Question
        avatar={data.avatar}
        questionImage={data.questionImage}
        userName={data.name}
        questionTitle={data.questionTitle}
        questionText={data.questionText}
      />
      <Question
        avatar={data.avatar}
        questionImage={data.questionImage}
        userName={data.name}
        questionTitle={data.questionTitle}
        questionText={data.questionText}
      />
      <Question
        avatar={data.avatar}
        questionImage={data.questionImage}
        userName={data.name}
        questionTitle={data.questionTitle}
        questionText={data.questionText}
      />
    </div>
  );
}

export default LatestQuestions;
