import React from 'react'
import videoIssa from "../assets/issalogovideo.mp4"

function WaitingRoom() {
  return (
    <div className='flex-col w-full h-full content-center text-center align-middle mr-auto'>
      <div className="w-4/4 h-4/4 flex-column justify-center text-center mr-0-auto ">
      <div className=' w-screen flex justify-center text-center align-middle mt-10'>
      <video
          className='w-[250px] flex justify-center text-center align-middle rounded-xl'  
          src={videoIssa}
          muted
          autoPlay
          loop
          preload='true'
        > something </video>
        </div>
        <h1 className='text-white mt-4 text-4xl font-bold'> Issa ComeBack! </h1>
        <p className='text-white mt-4 text-2xl p-2'> <strong>Issa</strong> sta tornando! <br /> A breve lanceremo questo sito e ci saranno molte novità. <br /> <strong> Resta connesso.</strong> </p>
        <div className=' mt-8 flex justify-center text-center gap-3 decoration-none'>
            <a href="https://open.spotify.com/show/5tWQcXyvspOyZvaoEAC268" className='text-white border-1 rounded-xl bg-green-500 p-2 font-semibold'> Spotify </a>
            <a href="https://www.instagram.com/issapodcast_/" className='text-white border-1 rounded-xl bg-green-500 p-2 font-semibold'> Instagram </a>
            <a href="https://www.tiktok.com/@issapodcast" className='text-white border-1 rounded-xl bg-green-500 p-2 font-semibold'> TikTok </a>
            <a href="https://t.me/issapodcast" className='text-white border-1 rounded-xl bg-green-500 p-2 font-semibold'> Telegram </a>
        </div>
      </div>
    </div>
  )
}

export default WaitingRoom
