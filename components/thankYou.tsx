export default function ThankYou({ sendNewMessage }: { sendNewMessage?: () => void }) {
  return (
    <div className="text-center space-y-4">
      <h4 className="text-white"> Thank you! 🤘</h4>
      <p>
        Your message has been accepted. <br />
        You will receive answer soon!
      </p>
      <button
        onClick={sendNewMessage}
        className={`mt-2 px-[12px] py-[10px] text-sm w-max rounded-lg transition bg-primary cursor-pointer text-themeBackdrop
                  }`}
      >
        send-new-message
      </button>
    </div>
  );
}
