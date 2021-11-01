import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const Item = (props) => {
  return (
    <div>
      <ItemTitle title={props.title} />
      <ItemSubtitle subtitle={props.subtitle} />
      <ItemPicture picture={props.picture} />
      <ItemDescription description={props.description} />
    </div>
  );
};

export default Item;
