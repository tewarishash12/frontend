import React from 'react'

export default function Footer() {
  return (
    <div className='sticky-bottom' style ={{position:"sticky", bottom:"0"}}>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex justify-content-center align-items-center w-100 fs-5">
          <span className="text-muted">© 2024 BiteDash, Inc</span>
        </div>
      </footer>
    </div>
  )
}
