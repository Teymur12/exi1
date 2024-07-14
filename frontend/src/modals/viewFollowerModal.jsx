import React from 'react';
import { useSelector } from 'react-redux';

const ViewFollowers = ({ openModal, setOpenModal, currentFollowers }) => {
    const user = useSelector(state => state.user.user);

    console.log(user.user);
    if (!openModal) return null;

    return (
        <div className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded w-[300px] h-[300px] overflow-y-scroll">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Followers</h2>
                    <button onClick={() => setOpenModal(false)} className="text-[20px]">x</button>
                </div>
                <ul>
                    {currentFollowers && currentFollowers.length > 0 ? (
                        currentFollowers.map((follower, index) => (
                            <li key={index} className="mb-2">{follower.userName}</li>
                        ))
                    ) : (
                        <li>No followers found.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ViewFollowers;
