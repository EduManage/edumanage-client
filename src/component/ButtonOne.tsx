import './ButtonOne.css'

const ButtonOne = ({children}: any ,classN: any) => {
    return (
        <button className={`bg-gradient-to-r  from-teal-300 to-blue-300  relative btn4  px-2 py-3  uppercase font-semibold tracking-wider leading-none rounded overflow-hidden text-white
        ${classN}`} type="button">
        <span className="absolute inset-x-0 h-1 bottom-0 bg-white"></span>
        {children}
    </button>
    );
};

export default ButtonOne;