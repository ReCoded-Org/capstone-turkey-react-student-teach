import { useEffect, useState } from 'react';

function About() {
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
          createdAt: new Date(),
          isSolved: false,
          studen: '',
          subjects: [],
          updatedAt: '',
          __v: 0,
          _id: '',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((json) => console.log(json.meesage));
      setPost(false);
    }
  }, [post]);

  return (
    <div>
      <button onClick={() => setPost(!post)} type="button">
        Fetch
      </button>
    </div>
  );
}

export default About;
