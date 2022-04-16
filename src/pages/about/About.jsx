import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion } from '../../redux/features/addQuestionSlice';

function About() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.addQuestionReducer);
  console.log(message);
  const [post, setPost] = useState(false);
  useEffect(() => {
    if (post) {
      fetch('https://studentsteach.re-coded.com/questions')
        .then((res) => res.json())
        .then((data) => console.log(data));
      fetch('https://studentsteach.re-coded.com/questions', {
        method: 'POST',
        body: JSON.stringify({
          comments: [],
          content: { title: '', body: '' },
          createdAt: '',
          isSolved: false,
          studen: '',
          subjects: [],
          updatedAt: '',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).catch((err) => console.log(err));
      setPost(false);
    }
  }, [post]);

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            addQuestion({ title: 'title', body: 'body', studenId: 'id' }),
          )
        }
        type="button"
      >
        Fetch
      </button>
    </div>
  );
}

export default About;
