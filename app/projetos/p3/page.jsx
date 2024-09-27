

import { LuAlertTriangle } from "react-icons/lu";

const page = () => {
  return (
    <section className="justify-start pb-28 md:mb-0 page-align-left">
      <div className="justify-start">
        <div className="xl:pt-8 xl:pb-20">
          {/* info */}
          <div className="justify-start">
            <h1 className="text-4xl font-semibold mb-9 mt-20">
              Projeto Ferragens Negrão
              
            </h1>
            <div className="flex items-center gap-2 text-yellow-500 absolute right-10 bottom-10">
              <LuAlertTriangle />
              <p>O projeto está em andamento... 99%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
