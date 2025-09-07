import Marquee from "react-fast-marquee";
import Image from "next/image";
// import com1 from "../../../public/com1.svg";
// import com2 from "../../../public/com2.svg";
// import com3 from "../../../public/com3.png";
// import com4 from "../../../public/com4.png";
// import com5 from "../../../public/com5.png";
// import com6 from "../../../public/com6.png";

// const clients = [com1, com2, com3, com4, com5, com6];

const clients = [
  "https://i.ibb.co.com/wZzc7fLS/com3.png",
  "https://i.ibb.co.com/m5MmzpNr/com4.png",
  "https://i.ibb.co.com/dw4tVTTZ/com5.png",
  "https://i.ibb.co.com/zVFLtHcx/com6.png",
];
const MyServerdClients = () => {
  return (
    <div className="py-20">
      <h2 className="text-center text-2xl font-semibold mb-6">Our Clients</h2>
      <Marquee
        gradient={false}
        speed={50} // adjust speed
        pauseOnHover={true}
      >
        {clients.map((client, idx) => (
          <div key={idx} className="mx-8">
            <Image
              src={client}
              alt={`Client ${idx + 1}`}
              width={120}
              height={60}
              objectFit="contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MyServerdClients;
