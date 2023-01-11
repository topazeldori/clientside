const Modal = ({ content,setContent }) => <div className='z-10 w-full h-full fixed grid place-items-center' style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
    
    <div className='bg-[#5c5470] w-2/3 p-5 rounded-xl flex flex-col items-center justify-center relative min-h-max max-w-[500px]'>
        {content}
        <br/>
        <button className='bottom-2 p-2 w-1/2 bg-[#2a2438] text-white rounded-md' onClick={() => setContent(null)}>Close</button>
    </div>
</div>
export default Modal