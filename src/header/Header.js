import Title from "./Title";
import Baseline from "./Baseline";

const Header = (props) => {
  return (
    <div className={props.className}>
      <Title title="My-Blog" />
      <Baseline className="baseline" text="Welcome to myZinZin' blog." />
    </div>
  );
};

export default Header;
