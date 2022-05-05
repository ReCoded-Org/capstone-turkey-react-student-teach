import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Answer from '../../Answer/Answer';
import { fetchAllUsers } from '../../../redux/features/fetchAllUsersSlice';
import CheckContent from '../../checkContent/CheckContent';

function LatestAnswers() {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.commentsReducer.comments);
  const userSignedIn = useSelector((state) => state.signIn.user.userInfo.id);
  const userSignedUp = useSelector(
    (state) => state.signIn.signUp.isSignedUp.id,
  );
  const users = useSelector((state) => state.fetchAllUsers.users);
  const user = users.filter((u) =>
    u.id === userSignedIn || userSignedUp ? u : false,
  );
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const isThereAnswer = comments?.some(
    (a) => a.studentID === userSignedIn || a.studentID === userSignedUp,
  );

  return (
    <div>
      {isThereAnswer ? (
        comments
          ?.slice(comments.length - 21, comments?.length)
          .reverse()
          .map((answer) => {
            if (
              answer?.creatorID === userSignedIn ||
              answer?.creatorID === userSignedUp
            ) {
              return (
                <Answer
                  key={uuidv4()}
                  username={`${user[0]?.firstName} ${user[0]?.lastName}`}
                  // eslint-disable-next-line react/no-children-prop
                  children={answer?.content}
                  image={user[0]?.avatar}
                />
              );
            }
            return false;
          })
      ) : (
        <CheckContent label="No Answers to display" question={false} />
      )}
    </div>
  );
}

export default LatestAnswers;
