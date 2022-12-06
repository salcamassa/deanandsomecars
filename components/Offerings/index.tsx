import styles from "./offerings.module.scss";
import { AiOutlineTrophy } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { GiMoneyStack } from "react-icons/gi";

const Offerings = () => {
  return (
    <>
      <div className="container-fluid bg-white">
        <div className="container text-center py-5">
          <h1>What We Offer</h1>
          <div className="row py-5">
            <div className="col-md-4">
              <div className={`${styles.cardIcon} ${styles.icon1}`}>
                <AiOutlineTrophy />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>Wide Range of Models</div>
                <p>
                  We pride ourselves on delivering each customer a fantastic,
                  reliable ride. With plenty of choices to pick from in our
                  extensive 500+ car inventory! <br/> <br/>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${styles.cardIcon} ${styles.icon2}`}>
                <HiUserGroup />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>Trusted by Customers</div>
                <p>
                  We know what you want because it’s exactly what we want! A
                  stress free experience with all of your questions answered and
                  someone to be there every step of the way.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${styles.cardIcon} ${styles.icon3}`}>
                <GiMoneyStack />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>Fast & Easy Financing</div>
                <p>
                  Striving to help you with your financing plan, we give you
                  options so driving off in your dream car is easy regardless of
                  credit history. Schedule an appointment today to find out
                  more!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Offerings;
