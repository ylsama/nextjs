const AspectRatioImageCard = (title, descriptive, srcUrl) => {
    return (
        <div className="grid place-items-center">
            <div
                className="w-full sm:w-1/2 flex flex-col p-4 
            bg-white rounded-lg overflow-hidden ring-1 ring-slate-900/5 shadow-xl"
            >
                <h1>{title ? 'Video Title' : title}</h1>
                <div class="relative rounded-xl overflow-auto p-8">
                    <iframe
                        class="w-full aspect-video rounded-lg shadow-lg"
                        src={
                            srcUrl
                                ? 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                                : srcUrl
                        }
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen=""
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
