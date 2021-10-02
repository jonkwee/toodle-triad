function Square({stats}) {
    return (
        <button className="square">
            <div className="content-container">
                Top: {stats.top}
                Left: {stats.left}
                Right: {stats.right}
                Bottom: {stats.bottom}
            </div>
        </button>
    )
}

export default Square;