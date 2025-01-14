import './TopContainer.css';

function TopContainer() {
  return (
    <div className='top-container'>
      <div className='top-container__accounts'>
        <p className='head'>Accounts</p>
        <input type='text' placeholder='New account name' />
        <button>+</button>
        <div>
            <p className='account-name'>MOMO</p>
            <p className='acount-balance negative'>RWF -700</p>
        </div>
        <div>
            <p className='account-name'>Equity</p>
            <p className='acount-balance positive'>RWF 600</p>
        </div>
      </div>
      <div className='top-container__categories'>
      <p className='head'>Categories</p>
      <input type='text' placeholder='New category name' />
        <button>+</button>
      </div>
      <div className='top-container__budget-settings'>
      <p className='head'>Budget Settings</p>
      <input type='text' placeholder='Budget amount' />
      <button>Set Budget</button>
      </div>
     </div>
  )
}

export default TopContainer