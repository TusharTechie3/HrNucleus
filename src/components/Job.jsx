import React, { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import WhatsappLogo from "../assets/whatsapp1.webp";

const Job = ({ job }) => {
  // console.log(job)
  const whatsappMessage= "Hi! I want to apply for "+ job?.title;

  const [isOpen, setIsOpen] = useState(false); // To manage the visibility of the popup
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  });

  // Open or close the popup
  const togglePopup = () => {
    // no poup for mvp
    // setIsOpen(!isOpen);

  };

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Storing the file in the state
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, e.g., sending data to a server
    console.log("Form Submitted", formData);
    togglePopup(); // Close the popup after submission
  };

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div>
        <p className="text-sm text-gray-500 float-right">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>

        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-500">{job?.location}</p>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {job?.position}
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {job?.salary}
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          // onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
        >
          Details
        </Button>
        {/* <Button className="bg-[#7209b7]" onClick={togglePopup}>
          Apply
          
        </Button> */}

        <a href={"http://wa.me/9650052111?text="+whatsappMessage}>
        <Button className="bg-[#7209b7]" onClick={togglePopup}>
                   Apply
        </Button>
                  </a>
        
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Job Application</h2>
            <form onSubmit={handleSubmit}>
              {/* Close Button */}
              <button
                onClick={togglePopup}
                className="relative bottom-[43px] left-[312px] text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="resume"
                  className="block font-medium text-gray-700"
                >
                  Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex justify-end">
                <Button className="bg-[#7209b7]" type="submit">
                  Apply
                </Button>
                <div>
                  <a href="http://wa.me/9354691775">
                    <img
                      className="w-[31px]"
                      src={WhatsappLogo}
                      alt="apply on whatsapp"
                    />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Job;
