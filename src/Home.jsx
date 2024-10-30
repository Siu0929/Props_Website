import Modal from "./Modal";
import Video from "./Video";

function Home() {
  return (
    <>
      <div className=" h-[200vh] flex flex-col relative">
        <Video />
        <div className="h-[40px] bg-transparent" />
        <Modal className="p-0 m-0" />
      </div>
    </>
  );
}

export default Home;
