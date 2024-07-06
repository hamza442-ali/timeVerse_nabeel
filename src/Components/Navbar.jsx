import React from "react";

const Navbar = () => {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderLogoOnly = windowWidth < 810;
  return (
    <div
      id="Navbar"
      className="box-border fixed z-20    top-4 h-[49px]"
      style={{
        "--rem": "16",
        fontSize: "12px",
        fontFamily: "sans-serif",
        "--token-a8e28c9d-4ce6-4ad2-96a7-a1a12837bc97": "rgb(254, 232, 76)",
        "--token-b86e4be1-9c71-4182-8aae-893747175d3f": "rgb(23, 30, 32)",
        "--framer-aspect-ratio-supported": "auto",
        WebkitFontSmoothing: "inherit",
        flex: "none",
      }}
    >
      <div
       id="in-Nav"
        className="flex items-center justify-center  gap-2.5 relative overflow-hidden p-1.5 box-border w-full h-full rounded-full opacity-100"
        style={{
          "--framer-will-change-override": "transform",
          "--border-bottom-width": "0px",
          "--border-color": "rgba(0, 0, 0, 0)",
          "--border-left-width": "0px",
          "--border-right-width": "0px",
          "--border-style": "solid",
          "--border-top-width": "0px",
          padding: "3px 3px 3px 0",
        }}
      >
        <div
        id="content"
          style={{
            "--rem": "16",
            fontSize: "12px",
            fontFamily: "sans-serif",
            "--token-a8e28c9d-4ce6-4ad2-96a7-a1a12837bc97": "rgb(254, 232, 76)",
            "--token-b86e4be1-9c71-4182-8aae-893747175d3f": "rgb(23, 30, 32)",
            "--framer-aspect-ratio-supported": "auto",
            "--border-bottom-width": "0px",
            "--border-color": "rgba(0, 0, 0, 0)",
            "--border-left-width": "0px",
            "--border-right-width": "0px",
            "--border-style": "solid",
            "--border-top-width": "0px",
            boxSizing: "border-box",
            WebkitFontSmoothing: "inherit",
            alignContent: "center",
            alignItems: "center",
            display: "flex",
            flex: "1 0 0px",
            gap: "11rem",
            height: "26px",
            justifyContent: "flex-start",
            overflow: "visible",
            padding: "0",
            position: "relative",
            width: "min-content",
            transform: "none",
            transformOrigin: "50% 50% 0px",
            opacity: "1",

          }}
        >
          <div className="navbar bg-transparent w-full h-16 flex justify-start items-center">
            <div className="center flex items-center justify-between gap-5">
              {/* Logo */}
              <div>
                <a
                  href="/"
                  title="Home"
                  target="_self"
                  className="no-underline"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/mains/logo.png`}
                    srcSet={`
                ${process.env.PUBLIC_URL}/mains/logo.png?scale-down-to=512 512w,
                ${process.env.PUBLIC_URL}/mains/logo.png?scale-down-to=1024 1024w,
                ${process.env.PUBLIC_URL}/mains/logo.png?scale-down-to=2048 2048w,
                ${process.env.PUBLIC_URL}/mains/logo.png 2868w
              `}
                    alt="Logo"
                    className="logo-img max-w-100px h-210px rounded-lg "
                  />
                </a>
              </div>
              {renderLogoOnly && (
<div className="w-[224px]"></div>
              )}
              {!renderLogoOnly && (<div className="options">
                <div className="w-1px h-25px bg-opacity-30 bg-customDividerColor"></div>
              </div>)}
              
              {!renderLogoOnly && (
              <div className="options flex gap-6 text-15px font-">
                <div className="options ">
                  <a
                    href="#overview"
                    className="nav-link framer-IPMi1 framer-1sa9dg6 framer-v-1sa9dg6 framer-svebul Link"
                  >
                    <div className="Link flex flex-col justify-start flex-shrink-0 opacity-60">
                      <p className="framer-text text-textNav">Overview</p>
                    </div>
                  </a>
                </div>
                <div className="options">
                  <a
                    href="#overview"
                    className="nav-link framer-IPMi1 framer-1sa9dg6 framer-v-1sa9dg6 framer-svebul Link"
                  >
                    <div className="Link flex flex-col justify-start flex-shrink-0 opacity-60">
                      <p className="framer-text text-textNav">Features</p>
                    </div>
                  </a>
                </div>
                <div className="options">
                  <a
                    href="#overview"
                    className="nav-link framer-IPMi1 framer-1sa9dg6 framer-v-1sa9dg6 framer-svebul Link"
                  >
                    <div className="Link flex flex-col justify-start flex-shrink-0 opacity-60">
                      <p className="framer-text text-textNav">References</p>
                    </div>
                  </a>
                </div>
                <div className="options">
                  <a
                    href="#overview"
                    className="nav-link framer-IPMi1 framer-1sa9dg6 framer-v-1sa9dg6 framer-svebul Link"
                  >
                    <div className="Link flex flex-col justify-start flex-shrink-0 opacity-60">
                      <p className="framer-text text-textNav">Faq</p>
                    </div>
                  </a>
                </div>
              </div>
              )}
            </div>
           
          </div>
           {!renderLogoOnly && (
          <a
            className="flex items-center justify-center relative align-center w-32 h-10 hover:bg-yellow-400 leading-3 text-center bg-customYellow rounded-full   "
            style={
                {transform: "none",
    transformOrigin: "50% 50% 0px",}
                
            }
            href="./#waitlist"
          >
            <div
              className="p-2 flex flex-col justify-start items-start "
              style={{ textDecoration: "none", letterSpacing: "0px" }}
            >
              <p className="font-bold ">Waitlist</p>
            </div>
          </a>
           )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
