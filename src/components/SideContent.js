import AboutMe from "./Item";
import Photo3 from "../img/moi.jpeg";

const SideContent = (props) => {
  return (
    <section>
      <AboutMe
        title="Mathieu"
        picture={Photo3}
        description="Actuellement au Reacteur pour apprendre React/ReactNative."
      />
    </section>
  );
};

export default SideContent;
