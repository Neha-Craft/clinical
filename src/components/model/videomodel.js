import React from 'react'

export default function Videomodel({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <video
              src="/videos/video1.mp4"
              controls
              className="w-100 h-auto rounded shadow"
              poster="/placeholder.svg?height=400&width=600"
              preload="metadata"
              playsInline
              controlsList="nodownload"
              autoPlay
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}