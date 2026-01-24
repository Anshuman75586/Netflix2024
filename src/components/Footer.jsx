const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 py-2 overflow-hidden relative">
      <div className="whitespace-nowrap animate-marquee">
        ⚠️ This is a{" "}
        <span className="font-semibold text-white">project clone</span> for
        learning/demo purposes only. No real service or account is provided.
        &nbsp;&nbsp;⚠️ This is a{" "}
        <span className="font-semibold text-white">project clone</span> for
        learning/demo purposes only. No real service or account is provided.
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
