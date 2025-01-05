import { Outlet } from 'react-router-dom'
import Header from './Header/Header'

const WebsiteOutlet = () => {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  )
}

export default WebsiteOutlet
