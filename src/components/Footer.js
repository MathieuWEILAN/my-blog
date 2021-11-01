const Footer = (props) => {
  return (
    <div className={props.className}>
      Made with&nbsp;<span> {props.framework} </span> &nbsp;at&nbsp;
      <span> {props.where}</span>&nbsp;by&nbsp;<span>{props.name}</span>.
    </div>
  );
};

export default Footer;
