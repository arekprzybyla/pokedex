import titleStyles from "../scss/Title.module.scss";

let id: number = 5;

const Title = () => {
  return (
    <div className={titleStyles.titleContainer}>
      <img src="./logo.png" alt="" />
    </div>
  );
};

export default Title;
