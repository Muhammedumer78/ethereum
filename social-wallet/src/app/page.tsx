import SocWallet from "@/components/Wallet";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-bold font-serif px-5 mt-6 mb-5 underline decoration-double text-zinc-900">
        Social Wallet with RainbowKit
      </h1>
      <div className="mb-5 flex justify-center">
        <SocWallet />
      </div>
    </div>
  );
}
