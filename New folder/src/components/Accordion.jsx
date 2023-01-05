import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const Accordian = () => {
  return (
    <div className="pb-20 w-full  flex flex-col items-center">
      <Accordion className="w-full">
        <AccordionItem className="w-full">
          {({ open }) => (
            <>
              <AccordionHeader className="w-full">
                <div className="bg-black/70 rounded-t-lg text-[#e5eec9] w-full">
                  <h3
                    className={`accordion-title w-full items-center justify-between text-center px-2 py-4  flex  `}
                  >
                    Locate Us
                    <span>
                      {open ? (
                        <MdOutlineKeyboardArrowUp />
                      ) : (
                        <MdOutlineKeyboardArrowDown />
                      )}
                    </span>
                  </h3>
                </div>
              </AccordionHeader>

              <AccordionBody>
                <div className="accordion-body  w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13731.225548374365!2d73.14676154999998!3d30.639413649999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b6e591391353%3A0x437438ce1c5404d8!2sCOMSATS%20City%20Hostel%20Sahiwal!5e0!3m2!1sen!2s!4v1672909720053!5m2!1sen!2s"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowfullScreen="true"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </AccordionBody>
            </>
          )}
        </AccordionItem>
        <AccordionItem className="w-full">
          {({ open }) => (
            <>
              <AccordionHeader className="w-full">
                <div className="bg-black/70 my-0.5 text-[#e5eec9] w-full">
                  <h3
                    className={`accordion-title w-full items-center justify-between text-center px-2 py-4  flex  `}
                  >
                    Contact Us
                    <span>
                      {open ? (
                        <MdOutlineKeyboardArrowUp />
                      ) : (
                        <MdOutlineKeyboardArrowDown />
                      )}
                    </span>
                  </h3>
                </div>
              </AccordionHeader>

              <AccordionBody>
                <div className="accordion-body text-[#e3e4dd] my-0.5 bg-black/70 flex flex-col items-center  w-full">
                  <h1>
                    {" "}
                    <span className="font-semibold">Phone : </span>{" "}
                    +923000293355
                  </h1>
                  <h1>
                    {" "}
                    <span className="font-semibold">Email : </span>{" "}
                    shafqat.developer@gmail.com
                  </h1>
                </div>
              </AccordionBody>
            </>
          )}
        </AccordionItem>
        <AccordionItem className="w-full">
          {({ open }) => (
            <>
              <AccordionHeader className="w-full">
                <div className="bg-black/70 rounded-b-lg text-[#e5eec9] w-full">
                  <h3
                    className={`accordion-title w-full items-center justify-between text-center px-2 py-4  flex  `}
                  >
                    What we Sell ?
                    <span>
                      {open ? (
                        <MdOutlineKeyboardArrowUp />
                      ) : (
                        <MdOutlineKeyboardArrowDown />
                      )}
                    </span>
                  </h3>
                </div>
              </AccordionHeader>

              <AccordionBody>
                <div className="accordion-body text-[#e3e4dd] bg-black/70 mt-0.5 rounded-b-lg w-full">
                  <p className="px-5 capitalize py-3">
                    This is a tech Store. We sell tech related products such as
                    android phones, iphones, apple watches, smart watches, DSLR
                    cameras and much much more.
                  </p>
                </div>
              </AccordionBody>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Accordian;
