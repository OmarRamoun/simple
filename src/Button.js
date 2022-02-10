import './buttons.css';

function Button(theme, index) {
  return (
  <button data-bg={theme.background} data-bs={theme.boxShadow} onClick={
    function () {
      const root = document.querySelector(':root');
      for (const key in theme) {
        root.style.setProperty(key, theme[key]);
      }
    }
  } className="theme-chooser-button bubbly-button">
    <span className="theme-chooser-button-text">
      {index + 1}
    </span>
  </button>
  );
}

export default Button;
