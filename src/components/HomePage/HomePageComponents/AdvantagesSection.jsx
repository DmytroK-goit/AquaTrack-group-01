import css from "./AdvantagesSection.module.css";
import avatar1 from "../../../images/AdvantagesSection/avatar1_mob.png";
import avatar2 from "../../../images/AdvantagesSection/avatar2_mob.png";
import avatar3 from "../../../images/AdvantagesSection/avatar3_mob.png";
import avatar1_tab from "../../../images/AdvantagesSection/avatar1_tab.png";
import avatar2_tab from "../../../images/AdvantagesSection/avatar2_tab.png";
import avatar3_tab from "../../../images/AdvantagesSection/avatar3_tab.png";

const AdvantagesSection = ({ userCount }) => {
  return (
    <div className={css.conteiner}>
      <div className={css.background}>
        <div className={css.happyCustomers}>
          <div className={css.conteinerAvatar}>
            <img
              src={avatar1_tab}
              srcSet={`
          ${avatar1} 375px, 
          ${avatar1_tab} 768px, 
          
        `}
              alt="Avatar 1"
              className={css.avatar}
            />
            <img
              src={avatar2_tab}
              srcSet={`
          ${avatar2} 375px, 
          ${avatar2_tab} 768px, 
          
        `}
              alt="Avatar 2"
              className={css.avatar}
            />
            <img
              src={avatar3_tab}
              srcSet={`
          ${avatar3} 375px, 
          ${avatar3_tab} 768px, 
          
        `}
              alt="Avatar 3"
              className={css.avatar}
            />
          </div>
          <div className={css.conteinerSpan}>
            <span>Our </span>
            <span className={css.highlight}>happy </span>
            <span> customers:</span>
            {userCount}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdvantagesSection;
