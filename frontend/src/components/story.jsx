import React, { useEffect, useState } from 'react';
import tate from "../image/atate.jpg";
import ShowStoryModal from '../modals/showStoryModal';
import ViewStory from '../modals/viewStory';
import Modal from 'react-modal'
import Stories from "react-insta-stories"

const Story = () => {
  const [addStoryModal, setAddStoryModal] = useState(false);
  const [openStory, setOpenStory] = useState(false);
  const [stories, setStories] = useState([]);
  const [currentStory, setCurrentStory] = useState();
  const storyStyles = {
    width:'auto',
    maxWidth:'100%',
    maxHeight:'100%',
    margin:'auto'
}
  const getStories = async () => {
    try {
      const response = await fetch('/api/stories/getStories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch stories');
      }

      const data = await response.json();
      setStories(data);
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStories();
  }, []); // Run only once when the component mounts

  return (
    <div className="p-4">
      <div className=" w-[250px] md:w-[610px] sm:w-[400px] mx-auto h-[115px] relative overflow-hidden flex items-center justify-start overflow-x-scroll">
        <div className="flex items-center space-x-4">
          <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
            <button className="relative border-none bg-white">
              <img
                className="w-[60px] h-[60px] rounded-full border border-red-500 object-cover"
                src=""
                alt=""
              />
              <button onClick={() => setAddStoryModal(true)}
                className="absolute right-0 bottom-3 flex items-center justify-center rounded-full w-[25px] h-[25px] bg-blue-500 text-white text-[15px]">
                +
              </button>
              <p className="text-center text-xs font-medium text-gray-500">
                Add Story
              </p>
            </button>
          </div>
          <div>
            
          </div>
          {stories && stories.map((story, index) => (
            <React.Fragment key={index}>
              <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
                <button onClick={() => {
                  setOpenStory(true);
                  setCurrentStory(story);
                }} className="border-none bg-white">
                  <img
                    className="w-[60px] h-[60px] rounded-full border border-red-500 object-cover"
                    src={story.storyImage}
                    alt="Hassan"
                  />
                  <p className="text-center text-xs font-medium text-gray-500">
                    {story.name}
                  </p>
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <ShowStoryModal
        addStoryModal={addStoryModal}
        setAddStoryModal={setAddStoryModal}
      />
      
      <Modal
            isOpen={openStory}
            ariaHideApp={false}
            className="grid justify-center mt-[15%] "
            contentLabel='View Story'
        >
            <div className='bg-zinc-200 w-[300px] sm:w-[400px] h-[200px] grid'>
               <Stories
               loop
               stories = {currentStory?.storyImage}
               defaultInterval={1500}
               width={432}
               height={490}
               storyStyles={storyStyles}
               />
            </div>
            <button className=' w-[100px] h-[50px] text-[25px] text-black absolute right-0 top-0' onClick={() => setOpenStory(false)}>X</button>
        </Modal>
      
 
         </div>
  );
};

export default Story;
