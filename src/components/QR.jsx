import qr from '../assets/image-qr-code.png';

const QR = () => {
    return (
        <div className="bg-white w-[320px] rounded-3xl drop-shadow-2xl p-[1.05rem]">
            <img
                className="rounded-xl mx-auto mb-6"
                src={qr}
                alt="Frontend Mentor QR code"
            />
            <div className="text-center">
                <h1 className="font-bold text-[1.4rem]/7 text-dark-blue mb-4">
                    Improve your front-end skills by building projects
                </h1>
                <p className="text-[.97rem]/[1.2] text-grayish-blue px-2 mb-6">
                    Scan the QR code to visit Frontend Mentor and take your
                    coding skills to the next level
                </p>
            </div>
        </div>
    );
};

export default QR;
