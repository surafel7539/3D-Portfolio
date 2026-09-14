import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className="footer">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    
    
    <div className="flex items-center gap-4">
      {socialImgs.map((img, index) => (
        <a 
          key={img.id || index} 
          href={img.url} 
          target="_blank" 
          rel="noreferrer"
          className="transition-opacity duration-200 hover:opacity-75"
        >
          <img 
            src={img.imgPath} 
            alt={img.altText || "Social media link"} 
            className="w-6 h-6 object-contain" 
          />
        </a>
      ))}
    </div>

    
    <div className="text-sm text-center md:text-right font-medium">
      <p>© {new Date().getFullYear()} Sucha Z. All rights reserved.</p>
    </div>

  </div>
</footer>

  )
}

export default Footer