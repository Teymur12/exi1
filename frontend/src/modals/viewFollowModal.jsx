import React from 'react';
import { useSelector } from 'react-redux';

const ViewFollow = ({ openFollowingModal, setOpenFollowingModal, currentFollowing }) => {
    const user = useSelector(state => state.user.user);

    if (!openFollowingModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded w-[300px] h-[300px] overflow-y-scroll">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Following</h2>
                    <button onClick={() => setOpenFollowingModal(false)} className="text-[20px]">x</button>
                </div>
                <ul>
                    {currentFollowing && currentFollowing.length > 0 ? (
                        currentFollowing.map((follow, index) => (
                            <li key={index} className="mb-2">{follow.userName}</li>
                        ))
                    ) : (
                        <li>No followers found.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ViewFollow;
