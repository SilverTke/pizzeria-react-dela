import headerUrl from "./assets/header.jpg";

const Header = () => (
  <header
    style={{ "--img-url": `url(${headerUrl})` }}
    className="h-[20dvh] w-full bg-[image:var(--img-url)] flex flex-col justify-center items-center text-white"
  >
    <p className="text-5xl font-bold">Mamma mia!</p>
    <p className="text-3xl">¡La mejor pizza!</p>
  </header>
);
export default Header;
