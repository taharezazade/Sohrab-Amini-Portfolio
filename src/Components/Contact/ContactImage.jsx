/** @format */

import { motion } from "framer-motion";
import { createContactViewModel } from "./contact.data";

export default function ContactImage({ contact }) {
  const data = createContactViewModel(contact);
  return (
    <motion.div className='relative overflow-hidden '>
      <div className='relative overflow-hidden'>
        <img
          src={data.image}
          alt='ارتباط با من'
          className='h-10/12 w-10/12 object-cover'
        />
      </div>
    </motion.div>
  );
}
