"use client"
import { useEffect } from 'react';

export default function Home() {
  const sendNotification = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification('Notification Title', {
            body: 'hii',
          });
        }
      });
    }
  };

  
// Function to add ripple effect at the center of the screen
const addRippleEffect = (event) => {
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');

  // Calculate the center coordinates of the screen
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // Set the position of the ripple at the center of the screen
  ripple.style.left = `${centerX}px`;
  ripple.style.top = `${centerY}px`;

  // Append the ripple to the body element
  document.body.appendChild(ripple);

  // Remove the ripple after a delay
  setTimeout(() => {
    ripple.remove();
  }, 1000);
};




  useEffect(() => {
    // Execute sendNotification function only after component is mounted on the client side
    const button = document.querySelector('#notificationButton');
    if (button) {
      button.addEventListener('click', sendNotification);
      // Add ripple effect on button click
      button.addEventListener('click', addRippleEffect);
    }

    // Cleanup function to remove event listener when component is unmounted
    return () => {
      if (button) {
        button.removeEventListener('click', sendNotification);
        button.removeEventListener('click', addRippleEffect);
      }
    };
  }, []);

  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen" style={{ backgroundColor: 'black' }}>
      <div className="text-white mb-20 ">
        <h1>Lorem Ipsum...</h1>
        <p className="text-gray-300">Lorem ipsum dolor sit amet.</p>
      </div>
      <div onClick={addRippleEffect} className="mt-10 mb-24 flex justify-center items-center relative">
        {/* Outer circle */}
        <div className="w-44 h-44 rounded-full bg-transparent border-2 border-white absolute" style={{ borderColor: '#C74528' }}></div>
        {/* Middle circle */}
        <div className="w-36 h-36 rounded-full bg-transparent border-2 border-white absolute" style={{ borderColor: '#C74528' }}></div>
        {/* Inner circle */}
        <div className="w-28 h-28 rounded-full bg-transparent border-2 border-white absolute" style={{ borderColor: '#C74528' }}></div>
        {/* Notification icon */}
        <div className="image-container" style={{ borderRadius: '50%', backgroundColor: '#C74528' }}>
          <img onClick={addRippleEffect} className="notification-img" src="https://static-00.iconduck.com/assets.00/notification-icon-1842x2048-xr57og4y.png" alt="" style={{ width: '65px', filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(90deg)', zIndex: 1 }} />
        </div>
      </div>
      <div className='mt-30'>
        <button id="notificationButton" className="bg-gray-800 text-white font-bold py-2 px-14 rounded " style={{ backgroundColor: '#C74528' }}>
          Send Notification
        </button>
      </div>
    </div>
  </>
  
  );
  
}
