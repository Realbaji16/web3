


export const Detail = ({ title, value, tooltip }) => {

    const handleTooltip = (e) => {
        const tooltipElement = e.currentTarget.nextElementSibling;

        tooltipElement.style.display = 'none';
        if (e.type === 'mouseEnter' || e.type === 'mouseenter') {
            tooltipElement.style.display = 'block';
        }
    };
    return (
        <div className="flex justify-between text-sm">
            <span className="text-[#acacaf] flex items-center relative">
                { title }
                { tooltip && <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" onMouseEnter={handleTooltip} onMouseLeave={handleTooltip}><path d="M12.188 9.109a1.455 1.455 0 00-1.618.95.727.727 0 01-1.372-.482 2.91 2.91 0 015.653.97c0 1.112-.826 1.847-1.415 2.24a5.64 5.64 0 01-1.262.63.735.735 0 01-.922-.46.727.727 0 01.46-.92c.322-.113.633-.271.917-.46.502-.335.767-.69.767-1.032a1.454 1.454 0 00-1.208-1.436zM12 15.636a.727.727 0 100-1.454.727.727 0 000 1.454z"></path><path fillRule="evenodd" clipRule="evenodd" d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-6.545a6.545 6.545 0 100 13.09 6.545 6.545 0 000-13.09z"></path></svg>}
                { tooltip &&
                    <div className="hidden absolute mt-8 ml-24 p-2 bg-[#28282f] rounded-lg text-xs text-white">
                        {tooltip}
                    </div>
                }
            </span>
            <span className="text-black">{value}</span>
        </div>
    )
}
