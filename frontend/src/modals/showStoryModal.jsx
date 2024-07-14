import React, { useState } from 'react';
import Modal from 'react-modal';

export default function ShowStoryModal({ addStoryModal, setAddStoryModal }) {
  const [photoUrl, setPhotoUrl] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    try {
      const response = await fetch('/stories/createStory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ photoUrl }),
      });

      if (!response.ok) {
        throw new Error('Failed to upload story');
      }

      const data = await response.json();
      console.log('Story uploaded:', data);
      // Optionally, you can close the modal or clear the input after successful upload
      setAddStoryModal(false);
      setPhotoUrl('');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Modal
      isOpen={addStoryModal}
      ariaHideApp={false}
      className="grid justify-center mt-[15%]"
      contentLabel="Create Story"
    >
      <div className="bg-zinc-200 w-[300px] sm:w-[400px] h-[200px] grid p-4">
        <h4 className="text-[20px] mb-4">Create a story</h4>
        <div className="mb-4">
          <input type="file" name="storyImage" onChange={handleImageChange} />
        </div>
        <button onClick={handleUpload} className="bg-brand text-white p-2 rounded">
          Upload Story
        </button>
      </div>
      <button
        className="w-[50px] h-[50px] text-[25px] text-black absolute right-4 top-4"
        onClick={() => setAddStoryModal(false)}
      >
        X
      </button>
    </Modal>
  );
}
