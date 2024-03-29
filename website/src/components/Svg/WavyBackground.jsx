export const AbstractWavyBackground = ({ upsideDown = false, className = "top-0 left-0", tailwindColour = "bg-teal-100", colour = "#cbfbf2" }) => (
    <div style={{ zIndex: -9 }} className={`absolute w-full h-auto z-0 ${upsideDown ? "transform rotate-180" : ""} ${className}`}>
        <div className={`h-32 transition-all xl:h-48 ${tailwindColour}`} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400">
            <path fill={colour} fillOpacity="1" d="M0,0L34.3,21.3C68.6,43,137,85,206,117.3C274.3,149,343,171,411,197.3C480,224,549,256,617,240C685.7,224,754,160,823,165.3C891.4,171,960,245,1029,250.7C1097.1,256,1166,192,1234,181.3C1302.9,171,1371,213,1406,234.7L1440,256L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
        </svg>
    </div>
);
