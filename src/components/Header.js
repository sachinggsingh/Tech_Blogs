import React from "react";

export default function Header() {
  const changeTheme = () => {
    const text = document.querySelector(".button-Text");
    if(text.innerHTML === "Light Theme")
    {
      text.innerHTML = "Dark Theme";
      document.querySelectorAll('a,p, h1, h2, h3, h4, h5, h6').forEach((element) => {
        element.style.color = "white";   
      });
      // document.body.style.color = "white";
    }
    else
    {
      text.innerHTML = "Light Theme";
      document.querySelectorAll('a,p, h1, h2, h3, h4, h5, h6').forEach((element) => {
        element.style.color = "black";   
      });
      // document.body.style.color = "black";
    }

    const theme = document.querySelector(".App");
    const backgroundImage = theme.style.backgroundImage;
    const imageUrl = backgroundImage.replace(/^url\(|\)|"/g, '');
    const icon = document.querySelector(".icons");
    const transitionDuration = '0.5s';
    
    if(imageUrl ==="https://wallpapercave.com/wp/wp12261480.png")
    {
      icon.style.color = "black";
      theme.style.transition = `background-image ${transitionDuration} ease-in-out`;
      theme.style.backgroundImage = "url('https://images8.alphacoders.com/848/848555.jpg')";
      theme.style.color = "black";
    }
    else
    {
      icon.style.color = "white";
      theme.style.transition = `background-image ${transitionDuration} ease-out-in`;
      theme.style.backgroundImage = "url('https://wallpapercave.com/wp/wp12261480.png')";
    }
  };
  return (
    // <div className="">
    // <div>
      <nav className="navbar custom-navbar">
        <div className="container-fluid">
          <a href="/" className="text navbar-brand">
          TechTalesIndia
          </a>
          <button type="button" className="button Toggle-button"   onClick={changeTheme}><p className="button-Text">Light Theme</p></button>
        </div>
      </nav>
    // </div>
  );
}
