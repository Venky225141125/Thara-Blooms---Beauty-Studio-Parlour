export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  serviceReceived: string;
  quote: string;
  rating: number;
  date: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "t-1",
    author: "Ananya Sharma",
    role: "Bride",
    serviceReceived: "Bridal Couture & Hair Architecture",
    quote: "Thara Blooms made me feel like royalty on my wedding day. The makeup was weightless, radiant, and lasted well beyond the reception dance. Every detail was executed with grace.",
    rating: 5,
    date: "Recent Client"
  },
  {
    id: "t-2",
    author: "Pooja Mehta",
    role: "Occasion Guest",
    serviceReceived: "Signature Glow Facial & Blowout",
    quote: "The atmosphere is so tranquil. The rose quartz facial gave my skin an instant glassy glow that lasted for days, and the blowout had such natural bounce and shine.",
    rating: 5,
    date: "Recent Client"
  },
  {
    id: "t-3",
    author: "Sneha Reddy",
    role: "Regular Guest",
    serviceReceived: "Botanical Hair Spa & Nail Atelier",
    quote: "A true sanctuary in the city. The stylists listen attentively to what you love and treat your hair and skin with genuine botanical care. I always leave glowing.",
    rating: 5,
    date: "Recent Client"
  },
  {
    id: "t-4",
    author: "Divya Kapoor",
    role: "Reception Bride",
    serviceReceived: "Evening Glamour & Draping",
    quote: "The team's mastery of tone and skin undertones is phenomenal. My makeup photographed flawlessly in daylight and under chandeliers without ever looking heavy.",
    rating: 5,
    date: "Recent Client"
  }
];
