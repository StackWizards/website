import { Section } from '@/animation/Section';
import { Container } from '@/components/Container';
import { useState } from 'react';
import { Modal } from './Modal';
import { WhatsAppButton } from './WhatsappButton';

const choices = [
  {
    id: "scalingStartup",
    name: "A Scaling Startup",
    strengths: [
      "Innovative and disruptive ideas",
      "Agile, adaptable and lean",
      "Focused on scalable growth"
    ],
    issues: [
      "Struggling to achieve success?",
      "Killer concept, can't deliver it?",
      "Ambitious goals, limited budget?"
    ],
    image: "/images/scaling_startup.png",
    hoverImage: "/images/scaling_startup_trouble.png"
  },
  {
    "id": "creativeAgency",
    "name": "A Creative Agency",
    "strengths": [
      "Highly talented creative team",
      "Proven track record of successful campaigns",
      "Innovative and forward-thinking"
    ],
    "issues": [
      "Eager to expand service offerings?",
      "Struggling with tech complexities?",
      "Seeking a reliable tech partner?"
    ],
    "image": "/images/creative_agency.png",
    "hoverImage": "/images/creative_agency_trouble.png"
  },
  {
    id: "boomingBusiness",
    name: "A Booming Business",
    strengths: [
      "Established brand with loyal customer base",
      "Aligned with market demands",
      "Experienced and visionary leadership"
    ],
    issues: [
      "Experiencing growing pains?",
      "Drowning in spreadsheets?",
      "Constantly firefighting?"
    ],
    image: "/images/booming_business.png",
    hoverImage: "/images/booming_business_trouble.png"
  }
];


export function WhyChooseStackWizards({ selectedChoice }) {

  const data = [
    {
      id: 'scalingStartup',
      name: "Scaling Startup",
      title: 'Why Choose StackWizards for your Startup?',
      description: `
        <p>At StackWizards, we empower scaling startups to thrive and succeed.</p>
        <ul>
          <li>Unlock innovative and disruptive ideas to differentiate your startup</li>
          <li>Stay agile and adaptable to rapidly respond to market changes</li>
          <li>Scale with confidence and focus on sustainable growth</li>
          <li>Get expert assistance in product development, partnerships, and strategy</li>
        </ul>
        <p>StackWizards is your trusted tech partner for scaling success, guiding you through each stage of growth and enabling you to bring your disruptive ideas to market even with limited budgets.</p>
      `,
      image: '/images/scaling_startup_work_with_us.png',
    },
    {
      id: 'creativeAgency',
      name: "Creative Agency",
      title: 'Why Choose StackWizards for your Creative Agency?',
      description: `
        <p>StackWizards is the perfect partner for creative agencies seeking to offer comprehensive digital solutions to clients.</p>
        <ul>
          <li>Elevate your agency's technical expertise with our specialized team</li>
          <li>Expand your service offerings to include innovative and technical solutions</li>
          <li>Deliver integrated campaigns combining creativity and technology</li>
          <li>Stay ahead of the competition with our digital trend expertise</li>
        </ul>
        <p>With StackWizards as your trusted partner, your creative agency can unlock new opportunities and provide enhanced value to clients.</p>
      `,
      image: '/images/creative_agency_work_with_us.png',
    },
    {
      id: 'boomingBusiness',
      name: "Booming Business",
      title: 'Why Choose StackWizards for your Business?',
      description: `
        <p>StackWizards empowers booming businesses to sustain growth and achieve success.</p> 
        <ul>
          <li>Create bespoke software solutions tailored to your unique business needs</li>
          <li>Streamline processes and boost operational efficiency</li>
          <li>Replace cumbersome manual processes with streamlined software</li>
          <li>Stay proactive and agile with reduced firefighting</li>
        </ul>
        <p>With StackWizards as your trusted partner, your booming business can thrive, automate processes, and focus on strategic growth.</p>
      `,
      image: '/images/booming_business_work_with_us.png',
    },
  ];


  const renderContent = () => {
    const choice = data.find((choice) => choice.id === selectedChoice);

    if (!choice) {
      return null;
    }

    return (
      <>
        <div id="why" className="flex flex-col justify-evenly gap-x-10 gap-y-10 lg:flex-row items-center">
          <div className="lg:w-1/2 flex items-start flex-col">
            <h2 className="text-xl lg:text-3xl text-left font-display tracking-tight font-bold mb-4">{choice.title}</h2>
            <div
              className="text-gray-700 text-left leading-relaxed"
              dangerouslySetInnerHTML={{ __html: choice.description }}
            ></div>
          </div>
          <img style={{ borderTopRightRadius: 2000 }} src={choice.image} alt={selectedChoice} className="hidden lg:block rounded-tl-full rounded-b-full h-[380px]" />
        </div>
        <div className='my-5'>
          <WhatsAppButton phoneNumber={"+447956000356"} message={`I want to see how StackWizards can help with my ${choice.name}`} />
        </div>
      </>
    );
  };

  return (
    <div className="my-12">
      <div className="w-full px-6">{selectedChoice && renderContent()}</div>
    </div>
  );
}



export function WhoChoice() {
  const [hoveredChoice, setHoveredChoice] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null)
  const [clickedKey, setClickedKey] = useState(null)

  const handleMouseOver = (choiceId) => {
    setHoveredChoice(choiceId);
  };

  const handleMouseOut = () => {
    setHoveredChoice(null);
  };

  const renderContent = (choice) => {
    const isHovered = hoveredChoice === choice.id;

    return (
      <>
        <img
          src={isHovered ? choice.hoverImage : choice.image}
          alt={choice.name}
          className={`w-full h-[300px] object-cover  shadow-full transition-all`}
        />
        <h4 style={isHovered ? { backgroundColor: "black" } : { backgroundColor: "rgba(0,0,0,0.8)" }} className={`text-xl lg:text-xl transition-all px-2 py-3 lg:leading-10 tracking-tighter uppercase mb-3 font-bold font-display text-white`}>{choice.name}</h4>
        <ul className="text-left hidden lg:block leading-snug text-base font-display list-disc px-6 ml-2 pb-4 text-black">
          {isHovered
            ? choice.issues.map((issue, index) => (
              <li
                key={issue}
                className="opacity-1 transition-opacity duration-300"
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                {issue}
              </li>
            ))
            : choice.strengths.map((strength, index) => (
              <li
                key={strength}
                className="opacity-1 transition-opacity duration-300"
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                {strength}
              </li>
            ))}
        </ul>
      </>
    );
  };

  return (
    <Container className="py-5 relative text-center">
      <Section>
        <div className="flex flex-col lg:flex-row justify-around">
          {choices.map((choice) => (

            <div
              key={choice.id}
              className={`flex flex-col w-auto cursor-pointer bg-white lg:w-[450px] hover:scale-105 ${selectedChoice === choice.id ? "scale-105" : ""}  transition-transform duration-300`}
              onClick={() => {
                setClickedKey(new Date())
                setSelectedChoice(choice.id)
              }}
              onMouseOver={() => handleMouseOver(choice.id)}
              onMouseOut={handleMouseOut}
            >
              {renderContent(choice)}
            </div>

          ))}
        </div>

      </Section>
      {selectedChoice ?
        <>
          <Modal onClose={() => setSelectedChoice(null)} key={`${selectedChoice}_${clickedKey}`}>
            <WhyChooseStackWizards selectedChoice={selectedChoice} />
          </Modal>
        </> : null
      }
    </Container>
  );
}
