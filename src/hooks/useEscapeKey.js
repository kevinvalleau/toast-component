import React from "react";

export default function useEscapeKey(callback) {
    React.useEffect(() => {
        function handleKeydown(e) {
          if (e.code === 'Escape') {
            callback(e);
          }
        }
    
        window.addEventListener('keydown', handleKeydown);
    
        return () => {
          window.removeEventListener('keydown', handleKeydown)
        }
      },[callback]);
}