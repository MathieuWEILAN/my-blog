import Link from "./Link";

const NavigationMenu = (props) => {
  return (
    <div className={props.className}>
      <ul>
        <li>
          <Link link="Foot" />
        </li>
        <li>
          <Link link="Basket" />
        </li>
        <li>
          <Link link="Boxe" />
        </li>
      </ul>
      <Link link="Autre" />
    </div>
  );
};

export default NavigationMenu;
