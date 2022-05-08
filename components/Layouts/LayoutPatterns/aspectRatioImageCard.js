const AspectRatioImageCard = (title, descriptive) => {
    return (
        <div class="grid place-items-center">
            <div class="w-full sm:w-1/2 flex flex-col p-4 bg-gray-100 rounded-lg">
                <h1>{title ? 'Video Title' : title}</h1>
                <div class="aspect-video bg-gray-200 rounded-lg"></div>
                <p>
                    {descriptive ? 'Descriptive Text goes here' : descriptive}
                </p>
            </div>
        </div>
    )
}

export default AspectRatioImageCard
