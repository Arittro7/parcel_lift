const LocationMap = () => {
  return (
    <div className=" bg-white">
      <h1 className="text-3xl  font-bold text-center text-purple-600">
        A.J.R Parcel & Courier Service Ltd
      </h1>
      <p className="text-xl font-semibold text-center text-black max-w-xl mx-auto mt-4">
        Keranipara DC'r Mor Rangpur, Bangladesh
      </p>
      <iframe
        className="w-full container mx-auto px-3 md:px-10 xl:px-20 2xl:px-32 h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] mt-10 rounded-xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58182.42823092788!2d91.65864955708115!3d24.297617348894196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37517aeaaaaaaaab%3A0xbb09d2e035972acc!2sA.J.R%20Parcel%20%26%20Courier%20Service%20Ltd.!5e0!3m2!1sen!2sbd!4v1756139651174!5m2!1sen!2sbd"
      ></iframe>
    </div>
  );
};

export default LocationMap;
