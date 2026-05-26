"use client"
import { useRouter } from 'next/navigation';

export default function UseRouterSamp() {

  const router = useRouter();

  const goToDashboard = () => {
    router.push('/dashboard/abc');
  };

  return (
    <button onClick={goToDashboard}>
      Go to Dashboard
    </button>
  );
}