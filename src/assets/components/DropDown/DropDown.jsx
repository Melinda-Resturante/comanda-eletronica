import './DropDown.css'

const DropDown = ({isVisible}) => {
  return (
    <div className={`dropDown ${isVisible ? "visible" : ""} fixed`} >
      <div className='dropDown-container'>

        <div className='dropDown-check'>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Gelo</label>
        </div>

        <div className='dropDown-check'>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Limão em rodela</label>
        </div>
       
        <div className='dropDown-check'>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Limão Espremido</label>
        </div>

        <div className='dropDown-check'>
          <input type="checkbox" name="" id="" className='check-custom' />
          <label htmlFor="">Laranja</label>
        </div>
        

      
      </div>

      <div className='dropDown-textarea'>
        <label htmlFor="">Outro:</label>
        <textarea 
         name="" 
         id="" 
         cols="30" 
         rows="10"
         placeholder='Observação..'
         ></textarea>
      </div>
    </div>
  )
}

export default DropDown