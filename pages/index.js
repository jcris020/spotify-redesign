import Head from 'next/head'
import Dashboard from "../Components/Dashboard";
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react";
import Loader from "../Components/Loader";

export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    }
  });

  // Loading animation
  if (status === "loading") {
    return <Loader />;
  }

  console.log(session);

  return (
    <div className="">
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard />
    </div>
  )
}
