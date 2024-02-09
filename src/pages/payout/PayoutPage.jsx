import QuickFilters from "./quickFilters";
import AlertNotification from "./alertNotification";
import PayoutFilter from "./payoutFilter";
import UserPayouts from "./userPayouts";

const PayoutPage = () => {
  return (
    <div className="bg-[#1D2345] h-screen max-[511px]:h-fit">
      <QuickFilters />
      <AlertNotification />
      <PayoutFilter />
      <UserPayouts />
    </div>
  );
};

export default PayoutPage;
