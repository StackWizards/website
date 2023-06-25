import { Section } from '@/animation/Section';
import { Container } from '@/components/Container';
import { useState } from 'react';
import { Modal } from './Modal';
import { WhatsAppButton } from './WhatsappButton';

const services = [
  {
    id: 'appDevelopment',
    name: 'Bespoke Software Development',
    description: `
      We specialize in developing high-quality and scalable applications for web, mobile, and desktop platforms. Our team of experienced developers will work closely with you to understand your requirements and deliver custom solutions tailored to your business needs.
    `,
    image: '/images/mobile_app_dev_alt.png',
    hoverImage: '/images/mobile_app_dev.png',
  },
  {
    id: 'cloudEngineering',
    name: 'Cloud Software Engineering',
    description: `
      We provide comprehensive cloud software engineering services, leveraging the power of cloud platforms such as AWS, Azure, and Google Cloud. Our experts will design, develop, and deploy cloud-native applications, ensuring optimal performance, scalability, and security.
    `,
    image: '/images/cloud_eng.png',
    hoverImage: '/images/cloud_eng_alt.png',
  },
  {
    id: 'processAutomation',
    name: 'Process Automation',
    description: `
    We automate business processes using cutting-edge technologies and tools, from workflow automation to robotic process automation (RPA). Our bespoke software solutions can replace spreadsheets, eliminating manual data entry and complex sheets. Streamline operations, reduce errors, and save valuable time.
  `,
    image: '/images/process_automation.png',
    hoverImage: '/images/process_automation_alt.png',
  },
];

export function Services() {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const handleMouseOver = (serviceId) => {
    setHoveredService(serviceId);
  };

  const handleMouseOut = () => {
    setHoveredService(null);
  };

  const renderContent = (service) => {
    const isHovered = hoveredService === service.id;

    return (
      <>
        <img
          src={isHovered ? service.hoverImage : service.image}
          alt={service.name}
          className="w-full h-[300px] object-cover shadow-full transition-all"
        />
        <h4
          style={isHovered ? { backgroundColor: 'black' } : { backgroundColor: 'rgba(0,0,0,0.8)' }}
          className="text-xl lg:text-xl transition-all px-2 py-3 lg:leading-10 tracking-tighter uppercase mb-3 font-bold font-display text-white"
        >
          {service.name}
        </h4>

      </>
    );
  };

  return (
    <Container className="py-5 relative text-center">
      <Section>
        <div className="flex flex-col lg:flex-row justify-around">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col w-auto cursor-pointer bg-white lg:w-[450px] hover:scale-105 ${selectedService === service.id ? 'scale-105' : ''
                } transition-transform duration-300`}
              onClick={() => setSelectedService(service.id)}
              onMouseOver={() => handleMouseOver(service.id)}
              onMouseOut={handleMouseOut}
            >
              {renderContent(service)}
            </div>
          ))}
        </div>
      </Section>
      {selectedService && (
        <Modal onClose={() => setSelectedService(null)}>
          <div id="why" className="flex flex-col justify-evenly gap-x-10 gap-y-10 py-10 lg:flex-row items-center px-6">
            <div className="lg:w-1/2 flex items-start flex-col">
              <h2 className="text-xl lg:text-3xl text-left font-display tracking-tight font-bold mb-4">
                {services.find((service) => service.id === selectedService)?.name}
              </h2>
              <div
                className="text-gray-700 text-left leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: services.find((service) => service.id === selectedService)?.description,
                }}
              ></div>
              <div className="my-5">
                <WhatsAppButton
                  phoneNumber="07956000356"
                  message={`I want to see how StackWizards can help with ${services.find((service) => service.id === selectedService)?.name}`}
                />
              </div>
            </div>
            <img
              style={{ borderTopRightRadius: 2000 }}
              src={services.find((service) => service.id === selectedService)?.image}
              alt={selectedService}
              className="hidden lg:block rounded-tl-full rounded-b-full h-[380px]"
            />

          </div>

        </Modal>
      )}
    </Container>
  );
}
