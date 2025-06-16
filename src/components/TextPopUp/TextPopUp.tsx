import React, { useEffect, useState } from "react";

type TextPopUpProps = {
  text: string;
  duration?: number; // milliseconds
  show: boolean;
  onClose?: () => void;
};

const TextPopUp: React.FC<TextPopUpProps> = ({ text, duration = 1000, show, onClose }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(show);
    if (show) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    <div
      className={`fixed right-6 bottom-6 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      } bg-[#1282A2] text-white px-6 py-3 rounded-lg shadow-lg`}
      aria-live="polite"
    >
      {text}
    </div>
  );
};

export default TextPopUp;