interface IButton {
  btnText: string;
}

const Button = ({ btnText }: IButton) => {
  return (
    <button className="px-10 py-4 xs:px-12 xs:py-5 bg-main-text text-white hover:text-black hover:bg-white hover:border-[1px] hover:border-black uppercase font-roboto transition-all duration-200 shadow-2xl hover:shadow-none text-base xs:text-[18px] tracking-[1px]">
      {btnText}
    </button>
  );
};

export default Button;
