export default function Title({ children }) {
    return (
        <div className="w-auto flex justify-center">
            <h1 className="title font-black text-2xl md:text-4xl text-center mt-10 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">{children}</h1>
        </div>
    );
}