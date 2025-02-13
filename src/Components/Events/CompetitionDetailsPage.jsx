import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaFire } from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsCalendar2Date } from "react-icons/bs";
import { PiMapPinLine, PiMicrophoneStage } from "react-icons/pi";
import { HiOutlineClock } from "react-icons/hi2";
import { IoTicketOutline } from "react-icons/io5";
import "swiper/css";
import "swiper/css/pagination";
import { Tab } from "@headlessui/react";
import { Link , useParams} from "react-router-dom";
import Api from "../../Functions/api";
import Spinner2 from "../ShimmerAndSpinner/Spinner2";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Rangoli1 from '../../assets/Image/rangoli1.png'
import Rangoli2 from '../../assets/Image/rangoli2.png'
import Participation from "./Participation";
import PaidPart from "./PaidPart";
import UnpaidPart from "./UnpaidPart";
import Slide1 from '../../assets/Participation/Img1.jpg'
import Slide2 from '../../assets/Participation/Img2.jpg'
import Slide3 from '../../assets/Participation/Img3.jpg'
import Slide4 from '../../assets/Participation/Img4.jpg'
import Slide5 from '../../assets/Participation/Img5.jpg'
import Slide6 from '../../assets/Participation/Img6.jpg'
import Slide7 from '../../assets/Participation/Img7.jpg'

const CompetitionDetailsPage = () => {

  const { id } = useParams();
  const { fetchApi } = Api();
  const [event, setEvent] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const images = [Rangoli1, Rangoli2];
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const [buttonSelected, setButtonSelected] = useState("Solo");

  
  useEffect(() => {
    const result = fetchApi('GET', `api/competitions/${id}` , 'events');
    result.then(response => {
      if (response?.status === 200) {
        setEvent(response?.data?.data );
      }
    });
  }
  , []);
  const {date, description, start_at, ends_at, rounds, paid_event, minimum_size, maximum_size , society , tag_line, title, team_fee , upi_id, venue , image_url} = event;
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }



  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  let [categories] = useState({
    Priliminary: [
      {
        id: 1,
        title: "Time limit: 2-3 minutes",
      },
      {
        id: 2,
        title: "No video editing is allowed.",
      },
      {
        id: 3,
        title: "3 entries per college will be accepted",
      },
      {
        id: 4,
        title: "Last date for submission",
      },
    ],
    Final: [
      {
        id: 1,
        title:
          "The song should be purely classical. Semi-classical or Bollywood songs are strictly not allowed.",
      },
      {
        id: 2,
        title: "Participants are requested to bring your own college ID cards.",
      },
      {
        id: 3,
        title:
          "Kindly bring your pre-recorded music in mp3 format in a pen drive.",
      },
      {
        id: 4,
        title: "No props shall be provided by the college",
      },
    ],
  });

  if (Object.keys(event).length === 0) {
    return (
      <div className=" w-screen h-screen flex justify-center items-center">
        <Spinner2 />
      </div>
    );
  }

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={15}

        className="mySwiper h-[26rem] mt-4 px-2"
      >
        <SwiperSlide>
          <img
            className="rounded-xl h-[26rem] w-full object-cover
            "
            src={Slide7}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl h-[26rem] w-full object-cover"
            src={ Slide2 }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl h-[26rem] w-full object-cover"
            src={ Slide3 }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl h-[26rem] w-full object-cover"
            src={   Slide4 }
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="rounded-xl h-[26rem] w-full object-cover"
            src={ Slide6 }
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      {/* Tag Line */}
      <div className="flex flex-row my-16 items-center justify-center text-center gap-3">
        <RiDoubleQuotesL />
        <div className="tag_line font-semibold mt-2 text-xl text-gray-600">
          उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः। न हि सुप्तस्य सिंहस्य
          प्रविशन्ति मुखे मृगा:।
        </div>
        <RiDoubleQuotesR />
      </div>

      {/* Basic Tags */}
      <div className="tags mt-10 px-40 flex flex-row gap-4">
        <div className=" bg-amber-500 rounded-full w-fit pt-1 pb-1 pr-3 pl-3 text-white">
          {society.name}  
        </div>
      </div>

      {/* Title */}
      <div className="mt-6 flex flex-col px-40">
        <h1 className="text-4xl font-semibold text-slate-600">
          {title}: {tag_line}
        </h1>
        <div className="poster flex flex-row my-6">
          <img
            className="rounded-xl w-1/3 object-cover "
            src={ image_url }
            alt=""
          />
          <div className="flex-col ">
          
            <p className="ml-8 pt-16 text-lg desciptionbg">
              {description}
            </p>

            {/* Basic Details */}
            <div className="flex flex-row items-center justify-around mt-20 text-center">
              <div className="flex flex-col items-center">
                <BsCalendar2Date size={60} color="#475569" />
                <p className="my-4 font-semibold text-slate-600">
                  {date}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <HiOutlineClock size={70} color="#475569" />
                <p className="my-4 font-semibold text-slate-600"> { start_at} </p>
              </div>
              <div className="flex flex-col items-center">
                <PiMapPinLine size={70} color="#475569" />
                <p className="my-4 font-semibold text-slate-600">
                  {venue}
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-around py-16" >
              <div>
                {
                  paid_event ? <p className="text-rose-500 text-lg font-semibold">Paid Event</p> : <p className="text-green-500 text-lg font-semibold">Free Event</p>
                }
              </div>
              <button className="bg-rose-500 h-12 w-40 rounded-md" onClick={openModal}>
                <div className="flex flex-row items-center justify-center" >
                  <IoTicketOutline color="white" size={30}/>
                  <p className="text-lg text-white mx-2" > Participate </p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Rules and Regulations */}
        <div className="my-16 flex flex-col items-start">
          <h1 className="text-5xl font-semibold text-slate-600">
            Rules and Regulations:
          </h1>
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-600 p-1 w-full mt-6">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-lg font-medium leading-5",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white text-blue-700 shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 hover:bg-gray-100 list-disc"
                      >
                        <h3 className="text-md font-medium leading-5">
                          {post.title}
                        </h3>

                        <a
                          href="#"
                          className={classNames(
                            "absolute inset-0 rounded-md",
                            "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      
      <div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={setIsOpen}
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203; 
            </span>

            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900 text-center"
              >
                {title}
              </Dialog.Title>
              {
                paid_event ? <PaidPart event={event} closeModal={closeModal} /> : <UnpaidPart event={event} closeModal={closeModal} />
              }

              <div className="mt-4 text-center">
                <button
                  type="button"
                  className="text-rose-700"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
      
    </>
  );
};

export default CompetitionDetailsPage;
