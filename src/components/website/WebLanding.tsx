const WebLanding = () => {
  return (
    <div className='container my-20 bg-red-400'>
      <div className='row justify-content-center'>
        <div className='col-md-8 col-lg-7'>
          <h2 className='fs-4 fs-lg-3 fw-bold mb-lg-9 lh-sm mb-5 text-center text-white'>
            We made this app to solve your problems.
          </h2>
        </div>
        <div className='col-12'>
          <div className='row gy-4 g-md-3 pb-lg-11 px-1 pb-8'>
            <div className='col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2'>
              <img src='assets/img/icons/roadmap.svg' alt='' />
              <div>
                <h5 className='fs-8 lh-lg fw-bold text-white'>
                  Unlimited Projects
                </h5>
                <p className='lh-xl mb-0 text-white text-opacity-50'>
                  Manage multiple projects at once and for seamless business
                  operation.
                </p>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2'>
              <img src='assets/img/icons/users-wm.svg' alt='' />
              <div>
                <h5 className='fs-8 lh-lg fw-bold text-white'>
                  Team Management
                </h5>
                <p className='lh-xl mb-0 text-white text-opacity-50'>
                  Manage your cross-functional teams better than ever with our
                  easily manageable app.
                </p>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2'>
              <img src='assets/img/icons/share-91.svg' alt='' />
              <div>
                <h5 className='fs-8 lh-lg fw-bold text-white'>File Sharing</h5>
                <p className='lh-xl mb-0 text-white text-opacity-50'>
                  Easily share files where necessary and keep them safe with
                  enhanced security and protection.
                </p>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2'>
              <img src='assets/img/icons/video_meeting.svg' alt='' />
              <div>
                <h5 className='fs-8 lh-lg fw-bold text-white'>Video Meeting</h5>
                <p className='lh-xl mb-0 text-white text-opacity-50'>
                  Conduct video meetings and keep records for further use with
                  its cloud storage.
                </p>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2'>
              <img src='assets/img/icons/opening-times.svg' alt='' />
              <div>
                <h5 className='fs-8 lh-lg fw-bold text-white'>Time Tracking</h5>
                <p className='lh-xl mb-0 text-white text-opacity-50'>
                  Track time to ensure meeting all the deadlines and never lag
                  behind managing multiple projects.
                </p>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2'>
              <img src='assets/img/icons/card-favorite.svg' alt='' />
              <div>
                <h5 className='fs-8 lh-lg fw-bold text-white'>
                  Payment System
                </h5>
                <p className='lh-xl mb-0 text-white text-opacity-50'>
                  With its easy payment system create invoices and get paid all
                  at the same place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebLanding
