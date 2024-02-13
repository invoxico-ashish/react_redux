import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
const Notifications = ({ mes }) => {
    return (
        <div>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </div>
    )
}

export default Notifications