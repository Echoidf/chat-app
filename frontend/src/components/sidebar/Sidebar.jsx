import React from 'react'
import SearchInput from './SearchInput.jsx'
import ConversationList from './ConversationList.jsx'
import LogoutButton from './LogoutButton.jsx'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-slate-500 p-4'>  
      <SearchInput/>
      <div className='divider px-2'></div>
      <ConversationList/>
      <LogoutButton/>
    </div>
  )
}
export default Sidebar