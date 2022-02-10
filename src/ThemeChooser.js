import Button from './Button';
import themes from './themes';

function ThemeChooser() {
  let templates = themes().slice(0, 4).map((theme, index) =>  {
    return (
      Button(theme, index)
    );
  });
  return (
    <div className="theme-chooser">
      {templates}
    </div>
  )
}

export default ThemeChooser;
