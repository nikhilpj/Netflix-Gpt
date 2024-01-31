const VideoTitle=({title,overview})=>{
    return(<div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-5xl font-bold ">{title}</h1>
        <p className="py-6 text-lg w-1/2">{overview }</p>
        <div>
            <button className="bg-white px-12 text-xl text-black p-4  rounded-lg hover:bg-opacity-70">Play</button>
            <button className="bg-white mx-2 px-12 text-xl text-black p-4  rounded-lg hover:bg-opacity-70">More info</button>
        </div>
    </div>)
}

export default VideoTitle