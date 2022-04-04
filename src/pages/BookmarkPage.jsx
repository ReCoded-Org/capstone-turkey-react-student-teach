import { useEffect, useState } from 'react';
import BookmarkCard from '../components/BookmarkCard';
import { data } from '../mockData';

const numberOfItemsOnClick = 4;
let arrayHoldingWholeData = [];

function BookmarkPage() {
  const [next, setNext] = useState(8);
  const [bookmarkedItemToShow, setBookmarkedItemToShow] = useState([]);

  useEffect(() => {
    loopThroughItem(0, next);
  }, []);

  console.log(bookmarkedItemToShow.length);

  // useEffect(() => {
  //   if (bookmarkedItemToShow.length < 8 && bookmarkedItemToShow.length !== 0) {
  //     handleMoreItemsOnRemoved();
  //   }
  // }, [bookmarkedItemToShow.length]);

  const loopThroughItem = (startIndex, endIndex) => {
    const slicedIndex = data.slice(startIndex, endIndex);
    arrayHoldingWholeData = [...arrayHoldingWholeData, ...slicedIndex];
    setBookmarkedItemToShow(arrayHoldingWholeData);
  };

  // const handleMoreItemsOnRemoved = () => {
  //   loopThroughItem(next, next + 1);
  //   setNext(next + 1);
  // };

  const handleMoreItems = () => {
    loopThroughItem(next, next + numberOfItemsOnClick);
    setNext(next + numberOfItemsOnClick);
  };

  const removeBookmarked = (id) => {
    const filteredBookmarks = bookmarkedItemToShow.filter((i) => i.id !== id);
    setBookmarkedItemToShow(filteredBookmarks);
    // loopThroughItem(next, next + 1);
    // setNext(next + 1);
  };

  return (
    <>
      {data && data.length ? (
        <>
          <div className="  mt-20 ml-20 ">
            <h1 className="text-[#CA7560] text-3xl font-thin ">
              Bookmarks <span className="text-4xl font-extralight">|</span>{' '}
            </h1>
            <div className="  mt-16 max-w-7xl grid grid-cols-2 gap-x-16 gap-y-14">
              {bookmarkedItemToShow.map((item) => (
                <BookmarkCard
                  key={item.id}
                  item={item}
                  removeBookmarked={removeBookmarked}
                />
              ))}
            </div>
          </div>
          <div className="text-center mt-28">
            {bookmarkedItemToShow.length < data.length && (
              <button
                onClick={handleMoreItems}
                className=" text-gray-400 -ml-28  "
              >
                load more...
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center  h-screen">
          <p className=" text-gray-400">No Bookmarked Item Found...</p>
        </div>
      )}
    </>
  );
}

export default BookmarkPage;
