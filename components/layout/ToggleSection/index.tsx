import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import styles from "./toggle-section.module.scss";

const ToggleSection = ({
  title,
  content,
  showSubtitle,
}: {
  title: string;
  content: string[];
  showSubtitle?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const subtitleContent = (
    <>
      Both have their benefits for being proper but there are reasons why you
      may go one way over the other.
      <div className="pt-3">
        <b>Used</b>
        <ul>
          <li>Less upfront cost when comparing price of used to new</li>
          <li>
            Higher chance of approval from the bank with poor credit or first
            time buyers
          </li>
          <li>Less deprecation</li>
        </ul>
      </div>
      <div className="pt-2">
        <b>New</b>
        <ul>
          <li>Better financing rates on a new car </li>
          <li>Opportunity to lease the vehicle</li>
          <li>More vehicle option availability</li>
        </ul>
      </div>
    </>
  );

  return (
    <div className="border-bottom p-2 py-3">
      <div
        className={`d-flex justify-content-between ${styles.titleSection}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.title}>{title}</div>
        <div className={styles.angleIcon}>
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>
      <div
        className={`${styles.contentContainer} ${isOpen ? "" : styles.hidden}`}
      >
        {showSubtitle ? (
          subtitleContent
        ) : (
          <ul>
            {content.map((c) => (
              <li>{c}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ToggleSection;
