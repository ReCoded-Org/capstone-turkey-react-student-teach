import Question from '../../Question/Question';
import personPhoto from '../../../assets/images/avatar.jpg';

function LatestQuestions() {
  const data = {
    id: 1,
    avatar: personPhoto,
    name: 'Maria1223',
    questionTitle: 'Lorem Ipsum is simply dummy ',
    questionText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 1500s test clamp data classname Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 1500s test clamp data classname Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 1500s test clamp data classname',
  };
  return (
    <div>
      <Question
        avatar={data.avatar}
        userName={data.name}
        questionTitle={data.questionTitle}
        questionText={data.questionText}
      />
      <Question
        avatar={data.avatar}
        userName={data.name}
        questionTitle={data.questionTitle}
        questionText={data.questionText}
      />
      <Question
        avatar={data.avatar}
        userName={data.name}
        questionTitle={data.questionTitle}
        questionText={data.questionText}
      />
      <Question
        avatar={data.avatar}
        userName={data.name}
        questionTitle={data.questionTitle}
        questionText={data.questionText}
      />
    </div>
  );
}

export default LatestQuestions;
