import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPal({ totalAmt, onSuccess }) {
  const paypalClientId = localStorage.getItem("paypalClientId");

  const handlePayment = () => {
    onSuccess();
  };

  return (
    <div>
      <PayPalScriptProvider options={{ "client-id": paypalClientId }}>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalAmt.toFixed(2),
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            try {
              await actions.order.capture();
              handlePayment();
              alert("Payment Completed Successfully");
            } catch (error) {
              console.log("Error capturing order:", error);
              alert(
                "There was an error completing your payment.Please try again."
              );
            }
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default PayPal;
