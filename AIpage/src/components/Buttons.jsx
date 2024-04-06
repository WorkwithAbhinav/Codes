import ButtonSvg from "../assets/svg/ButtonSvg";
const Buttons = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex h-11 items-center justify-center transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanclasses = `relative z-10 `;
  const renderbutton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanclasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  const renderlink = ()=>(
    <a href={href} className={classes}>
    <span className={spanclasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderlink() : renderbutton();
};

export default Buttons;