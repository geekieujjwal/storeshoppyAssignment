import React from "react";

const AlertNotification = () => {
  return (
    <section className="flex items-center gap-3 bg-[#282D4D] rounded mx-6 mt-4 px-4 py-2 text-[10px]">
      <span className="bg-[#bc7a01] px-1 rounded ">Test</span>
      <p className="text-[#C0BCB5]">
        These are test payouts and does not affect the actual balance. They are
        used only for the purpose of integrating events.
      </p>
      <a href="#" className="text-[#4795d9]">
        Learn More
      </a>
    </section>
  );
};

export default AlertNotification;
