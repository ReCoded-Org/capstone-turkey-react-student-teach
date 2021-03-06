import { useEffect, useState } from 'react';

import BookmarkCard from '../../components/cards/bookmarkCard/BookmarkCard';
import data from '../mockData';

const numberOfItemsOnClick = 4;
let arrayHoldingWholeData = [];

function BookmarkPage() {
  const [next, setNext] = useState(8);
  const [bookmarkedItemToShow, setBookmarkedItemToShow] = useState([]);

  const loopThroughItem = (startIndex, endIndex) => {
    const slicedIndex = data.slice(startIndex, endIndex);
    arrayHoldingWholeData = [...arrayHoldingWholeData, ...slicedIndex];
    setBookmarkedItemToShow(arrayHoldingWholeData);
  };

  useEffect(() => {
    loopThroughItem(0, 8);
  }, []);

  const handleMoreItems = () => {
    loopThroughItem(next, next + numberOfItemsOnClick);
    setNext(next + numberOfItemsOnClick);
  };

  const removeBookmarked = (id) => {
    const filteredBookmarks = bookmarkedItemToShow.filter((i) => i.id !== id);
    setBookmarkedItemToShow(filteredBookmarks);
  };

  if (!data.length)
    return (
      <div className="flex items-center justify-center  h-screen">
        <p className=" text-gray-400">No Bookmarked Item Found...</p>
      </div>
    );

  return (
    data &&
    data.length && (
      <>
        <div className=" mt-12 mx-2  md:mt-20 md:mx-10 lg:mt-20 lg:ml-20 ">
          <h1 className="text-[#CA7560] text-xl md:text-2xl lg:text-3xl font-thin ">
            Bookmarks{' '}
            <span className="text-2xl  md:text-3xl lg:text-4xl font-extralight">
              |
            </span>{' '}
          </h1>
          <div className="  mt-16 max-w-7xl grid grid-cols-2 gap-x-5 gap-y-10 lg:gap-x-16 lg:gap-y-14">
            {bookmarkedItemToShow.map((item) => (
              <BookmarkCard
                key={item.id}
                userImage={item.avatar}
                id={item.id}
                name={item.name}
                questionTitle={item.questionTitle}
                removeBookmarked={removeBookmarked}
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-28">
          {bookmarkedItemToShow.length < data.length && (
            <button
              type="button"
              onClick={handleMoreItems}
              className=" text-gray-400 -ml-2 lg:-ml-28  "
            >
              load more...
            </button>
          )}
        </div>
      </>
    )
  );
}

export default BookmarkPage;
