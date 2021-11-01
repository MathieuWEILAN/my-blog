import ItemTitle from "./ItemTitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const AboutMe = (props) => {
  return (
    <div>
      <ItemTitle title={props.title} />
      <ItemPicture picture={props.picture} />
      <ItemDescription description={props.description} />
    </div>
  );
};

export default AboutMe;
