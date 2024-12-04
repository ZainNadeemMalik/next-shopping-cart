import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center gap-2 p-8 bg-black">
        <img src="/github-mark-white.png" className="w-6 h-6" alt="github" />
      <a href="https://github.com/ZainNadeemMalik" target="_blank" rel="noreferrer noopener" className="text-white hover:text-gray-500">https://github.com/ZainNadeemMalik</a>
    </footer>
  )
} 

export default Footer