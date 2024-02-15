import React, { useState } from 'react'

const Delete = () => {
    const [isDeleted, setIsDeleted] = useState(false);

    const handleDeleteAccount = () => {
        //delete api
        setIsDeleted(true);
    }
  return (
    <div>
        <button onClick={handleDeleteAccount}>Delete</button>
    </div>
  )
}

export default Delete