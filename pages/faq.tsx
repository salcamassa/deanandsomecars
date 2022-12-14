import Link from "next/link";
import { FaAngleDown, FaCaretDown } from "react-icons/fa";
import Footer from "../components/layout/Footer";
import HeroImage from "../components/layout/HeroImage";
import Navbar from "../components/layout/Navbar";
import ToggleSection from "../components/layout/ToggleSection";
import heroImg from "../public/customer.png";
import styles from "../styles/FAQ.module.scss";

const faqData = [
  {
    title: "I have bad credit, what do I do?",
    content: [
      "You must find out what is impacting your credit, usually missed or late payments, or high debt balances on credit cards.",
      "Assess your current debt amount and develop a plan to catch up on payments. Sometimes a consolidation loan can assist. Pay off high interest loans first.",
      "Be prepared to hear a high rate when looking into loans, this is to lower the risk that the bank is taking to loan out the funds to you. There are no prepayment penalties on a loan in NYS, this allows you to refinance when credit and rate opportunities are better or pay off the remaining balance without being penalized.",
    ],
  },
  {
    title: "How do I build credit or fix my credit?",
    content: [
      "Work on getting a credit card. Try looking for new programs or cards, they will have a more open criteria to give out credit lines.",
      "If you are currently holding balances on any or all of your credit cards, get them down. The goal should be to carry no balances on any credit cards.",
      "Utilize only 10%-30% of the total credit balance you have. This is all of your card balances added together.",
      "Pay off balances in full each month and don't carry a balance to build credit.",
      "Have a cosigner to help battle rate or take the rate with a plan to refinance in the future once you have established your credit to remove cosigner.",
      "Looking into Used vehicle options is easier then new and it will help you with lower monthly payment.",
    ],
  },
  { title: "Difference between buying a used vs. new car?", content: [""] },
  {
    title: "What if I've never bought a car before?",
    content: [
      "When looking to buy your first car there are two hurdles to consider. The first is getting approved for a bank loan. The second is affording proper insurance that the bank requires.",
      "When getting a bank loan be prepared for higher than normal interest rates. The bank is taking a risk letting you borrow so they want it to be advantageous. You can get a cosigner with great credit to help the bank take less risk to get a lower rate. As well you can always refinance to lower the interest by switching the bank that you are borrowing the money from.",
      "Now you get a loan approval but the bank will require full coverage on the vehicle to protect their asset until you pay it off!",
      "To gain insurance on the vehicle it has to be in the name of whoever the vehicle is registered to.",
      "To get lower insurance start with higher deductibles. Just like going to a different bank, the rate of the loan to refinance can help.",
      "Going and shopping for your insurance every 6 months could save you hundreds each year and help you afford more cars in the future.",
    ],
  },
  {
    title: "What is a hybrid? And how does it work?",
    content: [
      "A hybrid operates on gas and gas only. It takes what your regular engine does and splits the job between an electric motor and a gas engine.",
      "A car burns the most gas when it starts moving. We use the electric motor to do the task of getting the car moving. The will automatically control when it uses the electric motor and when it uses the gas motor. It can use both at the same time as well. When we slow down in a hybrid we capture that energy to use later as well.",
    ],
  },
  {
    title: "Why choose a Toyota?",
    content: [
      "When considering purchasing a vehicle, I have not seen toyotas be the most affordable option but the reason I drive one myself, is the cost of the ownership.",
      "Comparing Toyota to other makes, Toyota does not depreciate as much as comparable vehicles. This helps your cost of ownership.",
      "The reason they hold value is because of how well they run and for how long it will run properly.",
    ],
  },
  {
    title: "What is Leasing?",
    content: [
      "Leasing a vehicle is paying a monthly payment for a specific amount of time based on certain parameters to enjoy the benefit of a new vehicle.",
      "When you make payments you lower the total price of the vehicle but a portion of your monthly payment goes to  the bank, manufacturers, DMV, and state taxes.",
      "Leasing allows you to utilize the whole vehicle while paying a portion off. At the end you can decide to turn in the vehicle based on parameters or you can purchase it for the agreed upon buyout from the lease inception date.",
      "One may lease a vehicle if they were unsure or want to change cars more often.",
    ],
  },
  {
    title: "Why finance your car instead of buying your car outright?",
    content: [
      "When you finance a vehicle you can protect the capital that you may have in the bank that you were planning to spend on a car.",
      "If you spend $30,000 on a car, the vehicle depreciates to a value less than what you spent almost immediately. If you get into an accident then insurance will only pay you the value of the car not the value that you paid. This leads to capital tied up until you're paid off as well as a loss of capital from the initial date of purchase.",
      "Most people finance the vehicle for a couple years then pay off the car after they have caught up to the depreciation or trade in to roll over equity that has built up and get a discount on taxes by trading in the vehicle.",
      "Most loans are between 2-6% during normal market conditions so what you can often do is put the capital into the stock market and earn an increase on your funds that outweighs the interest paid on the loan.",
    ],
  },
];

const FAQ = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroImage imageSrc={heroImg} heroText={"Frequently Asked Questions"} />
      <div className="container py-5">
        <div className={styles.sectionContainer}>
          <div className={`border-bottom text-center p-3`}>
            <div className={styles.infoText}>
              Here are some of the topics I help my customers with most often.
              If you have a question or concern that's not listed here, send me
              a message on the <Link href={"/contact"}>Contact</Link> page.
            </div>
          </div>
          {faqData.map((data, index) => (
            <ToggleSection
              title={data.title}
              content={data.content}
              showSubtitle={index === 2}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
