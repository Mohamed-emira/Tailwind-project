import { useEffect, useRef } from "react";

export default function Header() {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        // @ts-ignore
        headerRef.current.style.background = "#0c1524";
        // @ts-ignore
        headerRef.current.style.padding = "20px 0";
      } else {
        // @ts-ignore
        headerRef.current.style.background = "transparent";
        // @ts-ignore
        headerRef.current.style.padding = "60px 0";
      }
    });
  }, []);

  const links = ["Features", "Team", "Signin"];

  return (
    <header
      ref={headerRef}
      className="pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-200 items-center"
    
    >
      <div className="container  flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row">
      <a href="/" >
        <img 

        src="/src/assets/images/logo.svg" alt="logo" />
      </a>
      <nav>
        <ul className="flex items-center gap-[50px]">
          {links.map((item) => {
            return (
              <li key={item}>
                <a
                  href="#"
                  className="opacity-[0.9] hover:opacity-[1] text-white font-normal hover:underline duration-200 transition-all
             "
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      </div>
    </header>
  );
}
