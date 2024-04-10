const Generating = ({className}) => {
    return (
      <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base`}>
        <div className="w-6 h-6 mr-4">
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><circle fill='none' strokeOpacity='1' stroke='#FF156D' strokeWidth='.5' cx='100' cy='100' r='0'><animate attributeName='r' calcMode='spline' dur='2' values='1;80' keyTimes='0;1' keySplines='0 .2 .5 1' repeatCount='indefinite'></animate><animate attributeName='stroke-width' calcMode='spline' dur='2' values='0;25' keyTimes='0;1' keySplines='0 .2 .5 1' repeatCount='indefinite'></animate><animate attributeName='stroke-opacity' calcMode='spline' dur='2' values='1;0' keyTimes='0;1' keySplines='0 .2 .5 1' repeatCount='indefinite'></animate></circle></svg>
        </div>
        AI is Loading
      </div>
    )
  }
  
  export default Generating