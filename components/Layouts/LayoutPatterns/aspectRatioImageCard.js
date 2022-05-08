const AspectRatioImageCard = (title, descriptive, srcUrl) => {
    return (
        <div className="grid place-items-center">
            <div
                className="w-full sm:w-1/2 flex flex-col p-4 
            bg-white rounded-lg overflow-hidden ring-1 ring-slate-900/5 shadow-xl"
            >
                <h1>{title ? 'Video Title' : title}</h1>
                <div className="relative rounded-xl overflow-auto p-8">
                    <iframe
                        className="w-full aspect-video rounded-lg shadow-lg"
                        loading="lazy"
                        src={
                            srcUrl
                                ? 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                                : srcUrl
                        }
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                    ></iframe>
                </div>
                <p>
                    {descriptive
                        ? 'Descriptive Text goes here - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.'
                        : descriptive}
                </p>
            </div>
        </div>
    )
}

export default AspectRatioImageCard
