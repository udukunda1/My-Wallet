import './TopContainer.css';

function TopContainer() {
  return (
    <div className='top-container'>
      <div className='top-container__accounts'>
        <p className='head'>Accounts</p>
        <input type='text' />
        <button>add</button>
      </div>
      <div className='top-container__categories'>
      <p className='head'>Categories</p>
      </div>
      <div className='top-container__budget-settings'>
      <p className='head'>Budget Settings</p>
      </div>
     </div>
  )
}

export default TopContainer