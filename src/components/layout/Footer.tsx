export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="flex justify-between py-15 px-20 pr-20">
          <img 
            src="/potenslogob.svg" 
            alt="potenslogo" 
            height={150}
            width={150}
          />
        
          {/* Social/Contact Section */}
          {/* <div className='flex justify-between px-1 py-5 gap-2'>
            <img 
              src="/instagram.png" 
              alt="potenslogo" 
              height={30}
              width={30}
            />
            <img 
              src="/facebook.png" 
              alt="potenslogo" 
              height={30}
              width={30}
            />
          </div> */}

          <div className='flex justify-center items-center'>
            <p>
              &copy; {new Date().getFullYear()} Country Pulse.
            </p>
          </div>
       
      </div>
    </footer>
  );
}