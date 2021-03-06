import IconSedans from "./assets/icon-sedans.svg";
import IconSuvs from "./assets/icon-suvs.svg";
import IconLuxury from "./assets/icon-luxury.svg";

const App = () => {
  return (
    <>
      <div className="flex min-h-screen min-w-fit items-center justify-center bg-[#F2F2F2] px-[20px] py-[90px]">
        <div className="flex w-[325px] min-w-[325px] flex-col rounded-lg lg:w-[920px] lg:flex-row">
          {/*First card*/}
          <div className="h-[441px]	rounded-t-lg bg-[#E38826] px-[50px] lg:h-[500px] lg:rounded-t-none lg:rounded-l-lg lg:leading-6">
            <div className="flex h-full flex-col justify-evenly py-6">
              {/*Icon sedans*/}
              <img
                src={IconSedans}
                alt="Sedans"
                className="h-[35px] w-[70px]"
              />

              {/*Title*/}
              <h1 className="font-bigShouldersDisplay text-[40px] text-[#F2F2F2]">
                SEDANS
              </h1>

              {/*Description*/}
              <p className="font-lexendDeca text-[15px] text-[#FFFFFF]/[0.75]">
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip.
              </p>

              {/*Button*/}
              <button className="h-[50px] w-[145px] rounded-3xl bg-[#F2F2F2] font-lexendDeca text-[17px] text-[#E38826] hover:border-2 hover:bg-[#E38826] hover:text-[#F2F2F2] lg:relative lg:top-[40px]">
                Learn more
              </button>
            </div>
          </div>

          {/*Second card*/}
          <div className="h-[441px] bg-[#006970] pl-[50px] pr-[50px] lg:h-[500px] lg:leading-6">
            <div className="flex h-full flex-col justify-evenly py-6">
              {/*Icon suvs*/}
              <img src={IconSuvs} alt="Suvs" className="h-[35px] w-[70px]" />

              {/*Title*/}
              <h1 className="font-bigShouldersDisplay text-[40px] text-[#F2F2F2]">
                SUVS
              </h1>

              {/*Description*/}
              <p className="font-lexendDeca text-[15px] text-[#FFFFFF]/[0.75]">
                Take an SUV for its spacious interior, power, and versatility.
                Perfect for your next family vacation and off-road adventures.
              </p>

              {/*Button*/}
              <button className="h-[50px] w-[145px] rounded-3xl bg-[#F2F2F2] font-lexendDeca text-[17px] text-[#006970] hover:border-2 hover:bg-[#006970] hover:text-[#F2F2F2] lg:relative lg:top-[40px]">
                Learn more
              </button>
            </div>
          </div>

          {/*Third card*/}
          <div className="h-[441px] rounded-b-lg bg-[#004241] pl-[50px] pr-[50px] lg:h-[500px] lg:rounded-b-none lg:rounded-r-lg lg:leading-6">
            <div className="flex h-full flex-col justify-evenly py-6">
              {/*Icon luxury*/}
              <img
                src={IconLuxury}
                alt="Luxury"
                className="h-[35px] w-[70px]"
              />

              {/*Title*/}
              <h1 className="font-bigShouldersDisplay text-[40px] text-[#F2F2F2]">
                LUXURY
              </h1>

              {/*Description*/}
              <p className="font-lexendDeca text-[15px] text-[#FFFFFF]/[0.75]">
                Cruise in the best car brands without the bloated prices. Enjoy
                the enhanced comfort of a luxury rental and arrive in style.
              </p>

              {/*Button*/}
              <button className="h-[50px] w-[145px] rounded-3xl bg-[#F2F2F2] font-lexendDeca text-[17px] text-[#004241] hover:border-2 hover:bg-[#004241] hover:text-[#F2F2F2] lg:relative lg:top-[40px]">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
